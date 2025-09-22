"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";

interface RadioInputProps {
  name: string;
  label: string;
  description?: string;
  required?: boolean;
  options: string[];
  // hasOtherOption?: boolean;
}

export const RadioInput = ({
  name,
  label,
  description,
  required,
  options,
}: // hasOtherOption,
RadioInputProps) => {
  const form = useFormContext();
  const [showOtherOption, setShowOtherOption] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showOtherOption && inputRef.current) {
      // Short delay to ensure the input is rendered
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [showOtherOption]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3 w-full">
          <Label htmlFor={name} className="text-primary font-medium">
            {label} {required && <span className="text-red-500">*</span>}
          </Label>
          <FormControl>
            <RadioGroup
              onValueChange={(value) => {
                field.onChange(value);

                setShowOtherOption(false);
                form.setValue(`${name}Other`, "");
              }}
              value={field.value}
              className="flex flex-col space-y-1"
            >
              {options.map((option) => (
                <FormItem
                  key={option}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem
                      className="border border-primary bg-border"
                      value={option}
                    />
                  </FormControl>
                  <FormLabel className="font-normal text-primary">
                    {option}
                  </FormLabel>
                </FormItem>
              ))}
              {/* {hasOtherOption && (
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem
                      className="border border-primary bg-border"
                      value="Other"
                    />
                  </FormControl>
                  <FormLabel className="font-normal text-primary">
                    Other
                  </FormLabel>
                </FormItem>
              )} */}
            </RadioGroup>
          </FormControl>
          <FormDescription className="text-primary">
            {description}
          </FormDescription>
          {/* Custom text input for 'Other' */}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
