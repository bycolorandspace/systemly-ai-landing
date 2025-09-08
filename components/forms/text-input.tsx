import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import { FormInputProps } from "./form-input-interface";

export default function TextInput({
  name,
  label,
  type,
  placeholder,
  description,
}: FormInputProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className="input input-bordered border-border w-full selection:bg-blue-400"
              {...field}
              value={field.value ?? ""}
            />
          </FormControl>
          <FormDescription className="text-secondary text-sm">
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
