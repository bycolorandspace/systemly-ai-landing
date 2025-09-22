"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, X, FileText, Image as ImageIcon } from "lucide-react";
import InputLabel from "../form-label";

interface FileUploadInputProps {
  name: string;
  label: string;
  description?: string;
  required?: boolean;
  accept?: string;
  maxSize?: number; // in MB
  multiple?: boolean;
}

export default function FileUploadInput({
  name,
  label,
  description,
  required = false,
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  maxSize = 5,
  multiple = false,
}: FileUploadInputProps) {
  const { control, setValue, watch } = useFormContext();

  const currentFile = watch(name);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setValue(name, e.target.files);
    }
  };

  const removeFile = () => {
    setValue(name, null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith("image/")) {
      return <ImageIcon className="h-4 w-4" />;
    }
    return <FileText className="h-4 w-4" />;
  };

  const renderFilePreview = () => {
    if (!currentFile || !currentFile.length) return null;

    const file = currentFile[0];
    return (
      <div className="mt-2 p-3 bg-primary/10 rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getFileIcon(file.type)}
            <div>
              <p className="text-sm font-medium text-primary">{file.name}</p>
              <p className="text-xs text-primary/50">
                {formatFileSize(file.size)}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={removeFile}
            className="text-red-500 hover:text-red-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel className="text-base font-medium">
            <InputLabel label={label} required={required} />
            {required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          {description && (
            <FormDescription className="text-sm text-gray-600">
              {description}
            </FormDescription>
          )}
          <FormControl>
            <div className="space-y-2">
              {/* Hidden file input */}
              <Input
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={handleFileChange}
                className="hidden"
                id={`file-${name}`}
              />

              {/* Drop zone */}
              <div
                className={`border-2 border-dashed border-primary/50 rounded-lg p-6 text-center cursor-pointer transition-colors  `}
                onClick={() => document.getElementById(`file-${name}`)?.click()}
              >
                <Upload className="mx-auto h-12 w-12 text-primary/50" />
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-900">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-primary/50 mt-1">
                    {accept.replace(/\./g, "").toUpperCase()} up to {maxSize}MB
                  </p>
                </div>
              </div>

              {/* File preview */}
              {renderFilePreview()}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
