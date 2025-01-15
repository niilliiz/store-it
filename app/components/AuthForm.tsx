"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type formType = "sign-in" | "sign-up";

const authFormSchema = (formType: formType) =>
  z.object({
    fullName:
      formType === "sign-up"
        ? z.string().min(2).max(50)
        : z.string().optional(),
    email: z.string().email(),
  });

export default function AuthForm({ type }: { type: formType }) {
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const [isLoading, setISLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");

  const content = type === "sign-in" ? "Sign In" : "Sign Up";

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        <h1 className="form-title">{content}</h1>
        {type === "sign-up" && (
          <FormField
            control={control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <div className="shad-form-item">
                  <FormLabel className="shad-form-label">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      className="shad-input"
                      {...field}
                    />
                  </FormControl>
                </div>

                <FormMessage className="shad-form-message  " />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="shad-form-item">
                <FormLabel className="shad-form-label">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>
              </div>

              <FormMessage className="shad-form-message  " />
            </FormItem>
          )}
        />
        <Button
          className="form-submit-button flex items-center gap-2"
          type="submit"
          disabled={isLoading}
        >
          {content}
          {isLoading && (
            <Image
              src="/assets/icons/loader.svg"
              alt="loader"
              width={20}
              height={20}
              className="animate-spin"
            />
          )}
        </Button>
        {errorMessage && <p className="error-message">*{errorMessage}</p>}

        <div className="body-2 flex justify-center">
          <p className="text-light-100">
            {type === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link
            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            className="ml-1 font-medium text-brand"
          >
            {type === "sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </form>
    </Form>
  );
}
