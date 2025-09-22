"use client";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";

export default function TextInput({
  name,
  type,
  label,
  placeholder,
  description,
  required,
  showLabel = true,
  showDescription = true,
}: {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  description?: string;
  required: boolean;
  showLabel?: boolean;
  showDescription?: boolean;
}) {
  const form = useFormContext();
  return (
    <div className="flex flex-col w-full">
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {showLabel && (
              <Label htmlFor={name} className="text-primary font-medium">
                {label} {required && <span className="text-red-500">*</span>}
              </Label>
            )}
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                className="border-2 border-primary/50 focus-visible:border-primary/70 outline-0 bg-background text-primary w-full rounded-2xl p-5"
                {...field}
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            </FormControl>
            {showDescription && (
              <FormDescription className="text-primary">
                {description}
              </FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
