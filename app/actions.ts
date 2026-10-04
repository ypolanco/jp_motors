"use server";

import { bookingServices } from "@/lib/data";

export type FormState = { status: "idle" | "success" | "error"; message?: string; errors?: Record<string, string> };

function str(fd: FormData, key: string) {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export async function requestAppointment(_prev: FormState, fd: FormData): Promise<FormState> {
  const data = {
    name: str(fd, "name"),
    phone: str(fd, "phone"),
    email: str(fd, "email"),
    year: str(fd, "year"),
    make: str(fd, "make"),
    model: str(fd, "model"),
    service: str(fd, "service"),
    problem: str(fd, "problem"),
    date: str(fd, "date"),
    time: str(fd, "time"),
  };

  const errors: Record<string, string> = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (data.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a phone number we can reach you at.";
  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) errors.email = "That email doesn’t look right.";
  if (!(bookingServices as readonly string[]).includes(data.service)) errors.service = "Choose a service.";
  if (data.year && !/^(19|20)\d{2}$/.test(data.year)) errors.year = "Use a 4-digit year.";

  if (Object.keys(errors).length) return { status: "error", errors, message: "Check the highlighted fields." };

  // TODO: deliver the request — email (Resend/Postmark), SMS, or a booking DB.
  // Until then requests are not stored anywhere.

  return { status: "success" };
}

export async function sendMessage(_prev: FormState, fd: FormData): Promise<FormState> {
  const name = str(fd, "name");
  const contact = str(fd, "contact");
  const message = str(fd, "message");
  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!contact) errors.contact = "Add a phone or email so JP can reply.";
  if (!message) errors.message = "What would you like to ask?";
  if (Object.keys(errors).length) return { status: "error", errors };

  // TODO: deliver the message (email/SMS).
  return { status: "success" };
}
