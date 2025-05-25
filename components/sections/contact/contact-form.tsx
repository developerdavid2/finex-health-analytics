"use client";

import React, { useState, useRef, JSX } from "react";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { countryCodes } from "@/constants/contactData";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  countryCode: z.string().min(1, "Country code is required"),
  phoneNumber: z.string().min(5, "Phone number is required"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

// Type for form values
type FormValues = z.infer<typeof formSchema>;

const ContactForm = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues): Promise<void> => {
    setIsLoading(true);

    try {
      // Format the form data for EmailJS
      const templateParams = {
        from_name: `${values.firstName} ${values.lastName}`,
        from_email: values.email,
        from_number: `${values.countryCode} ${values.phoneNumber}`,
        message: values.message,
      };

      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
      );

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const charCount = form.watch("message")?.length || 0;

  return (
    <Card className="w-full bg-transparent border-none">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-start mb-6">Get in touch</h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            ref={formRef}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your first name"
                        {...field}
                        className="bg-white/20 border-white/30 focus-visible:ring-offset-0 placeholder:text-gray-400 placeholder:font-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your last name"
                        {...field}
                        className="bg-white/20 border-white/30 focus-visible:ring-offset-0 placeholder:text-gray-400 placeholder:font-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      {...field}
                      className="bg-white/20 border-white/30 focus-visible:ring-offset-0 placeholder:text-gray-400 placeholder:font-normal"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number with Country Code */}
            <div className="grid grid-cols-3 gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Country</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between bg-white/20 border-white/30 focus-visible:ring-offset-0",
                              !field.value && "text-gray-400",
                            )}
                          >
                            {field.value
                              ? countryCodes.find(
                                  (code) => code.value === field.value,
                                )?.value
                              : "Code"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 w-48">
                        <Command>
                          <CommandInput placeholder="Search country..." />
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup className="max-h-64 overflow-y-auto">
                            {countryCodes.map((code) => (
                              <CommandItem
                                key={code.id}
                                value={code.label}
                                onSelect={() => {
                                  form.setValue("countryCode", code.value);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    field.value === code.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                {code.label} ({code.value})
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your phone number"
                        {...field}
                        className="bg-white/20 border-white/30 focus-visible:ring-offset-0 placeholder:text-gray-400 placeholder:font-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between">
                    <FormLabel>Message</FormLabel>
                    <span
                      className={`text-xs ${charCount > 1000 ? "text-red-500" : "text-gray-400"}`}
                    >
                      {charCount}/1000
                    </span>
                  </div>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message (max 1000 characters)"
                      className="resize-none h-32 bg-white/20 border-white/30 focus-visible:ring-offset-0 placeholder:text-gray-400 placeholder:font-normal"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="text-md p-6 md:text-lg md:p-8 bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 font-bold rounded-3xl text-white hover:text-white transition duration-300 w-full mx-auto cursor-pointer flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
