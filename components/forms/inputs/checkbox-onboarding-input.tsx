"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CheckboxProps {
  name: string;
  label: string;
  description?: string;
  required?: boolean;
  options: string[];
  maxSelections?: number;
  hasOtherOption?: boolean;
}

export default function CheckBoxOnboardingInput({
  name,
  label,
  required = false,
  options,
  maxSelections,
  hasOtherOption,
}: CheckboxProps) {
  const form = useFormContext();
  const [showOtherOption, setShowOtherOption] = useState(false);
  const [customOption, setCustomOption] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showOtherOption && inputRef.current) {
      // Short delay to ensure the input is rendered
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [showOtherOption]);

  // Handle adding custom options to both contexts
  const handleAddCustomOption = (e?: string) => {
    // console.log("Custom: ", customOption.trim());

    if (e)
      if (customOption.trim() !== "") {
        // console.log("New: ", e);
        // Update React Hook Form
        const currentFormValue = form.getValues(name) || [];
        // console.log("Current values: ", currentFormValue);

        if (!currentFormValue.includes(customOption)) {
          form.setValue(name, [...currentFormValue, customOption], {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          });
          // console.log("All options incl other: ", currentFormValue);
        }
      }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-lg font-medium text-primary">
              {label} {required && <span className="text-red-500">*</span>}
            </FormLabel>
          </div>

          {options.map((option) => (
            <FormField
              key={option}
              control={form.control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={option}
                    className="w-full h-auto rounded-xl mb-2 md:mb-4 font-bold bg-card text-primary text-sm md:text-lg"
                  >
                    <label className="flex flex-row gap-4 justify-start items-center px-6 py-4 cursor-pointer hover:bg-gray-200 rounded-xl">
                      <FormControl>
                        <Checkbox
                          className="border border-border bg-background"
                          checked={
                            Array.isArray(field.value) &&
                            field.value.includes(option)
                          }
                          onCheckedChange={(checked) => {
                            const currentValue = Array.isArray(field.value)
                              ? field.value
                              : [];
                            if (checked) {
                              if (
                                maxSelections &&
                                currentValue.length >= maxSelections
                              ) {
                                return field.onChange([
                                  ...currentValue.slice(1),
                                  option,
                                ]);
                              }
                              return field.onChange([...currentValue, option]);
                            } else {
                              return field.onChange(
                                currentValue.filter(
                                  (value: string) => value !== option
                                )
                              );
                            }
                          }}
                        />
                      </FormControl>
                      <span className="font-bold text-left text-primary text-sm md:text-lg">
                        {option}
                      </span>
                    </label>
                  </FormItem>
                );
              }}
            />
          ))}

          {/* "Other" option with text input if hasOtherOption is true */}
          {hasOtherOption && (
            <FormField
              control={form.control}
              name={`${name}Other`}
              render={({ field }) => (
                <FormItem className="mt-0">
                  <div className="flex flex-row items-start space-x-3">
                    <FormControl>
                      <Checkbox
                        className="border border-primary bg-border"
                        checked={!!field.value}
                        onCheckedChange={(checked) => {
                          if (!checked) {
                            field.onChange("");
                            setShowOtherOption(false);
                          } else {
                            setShowOtherOption(true);
                            // Focus the text input when checkbox is checked
                            // setTimeout(() => {
                            //   document
                            //     .getElementById(`${name}-other-input`)
                            //     ?.focus();
                            // }, 0);
                            field.onChange(" "); // Add a space to indicate it's checked
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">Other</FormLabel>
                  </div>

                  {showOtherOption && (
                    <div className="flex flex-col items-left space-x-2 mt-4 space-y-2">
                      <Label>Please specify:</Label>
                      {/* Text input for custom option */}
                      <Input
                        ref={inputRef}
                        type="text"
                        value={customOption}
                        className="border-2 border-primary/50 focus-visible:border-primary/70 outline-0 bg-background text-primary w-full rounded-2xl px-5 py-2"
                        onChange={(e) => {
                          setCustomOption(e.target.value);
                        }}
                        onBlur={() => {
                          setTimeout(handleAddCustomOption, 50);
                          //   handleAddCustomOption(e.target.value);
                        }} // Add when input loses focus
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault(); // Prevent form submission
                            handleAddCustomOption();
                          }
                        }}
                        placeholder="Add custom option"
                      />
                    </div>
                  )}
                </FormItem>
              )}
            />
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
