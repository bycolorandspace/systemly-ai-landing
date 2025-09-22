"use client";

import { Textarea } from "@/components/ui/textarea";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import InputLabel from "../form-label";

export default function TextAreaInput({
  name,
  label,
  placeholder,
  description,
  required,
}: {
  name: string;
  label: string;
  placeholder: string;
  description: string;
  required: boolean;
}) {
  const form = useFormContext();
  return (
    <div className="flex flex-col w-full">
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <InputLabel label={label} required={required} />
            <FormControl>
              <Textarea
                placeholder={placeholder}
                className="border-2 border-primary/50 min-h-[200px] focus-visible:border-primary/70 outline-0 bg-background text-primary w-full rounded-2xl p-5"
                {...field}
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            </FormControl>
            <FormDescription className="text-primary">
              {description}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
