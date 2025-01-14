"use client";

import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

type AuthForm = { type: "sign-in" | "sign-out" };

export default function AuthForm({ type }: AuthForm) {
  return <div>dfdf</div>;
}
