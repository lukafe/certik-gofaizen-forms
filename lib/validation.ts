import { z } from "zod";
import {
  contactChannels,
  licensingStatuses,
  servicesOfInterest,
  timelines,
} from "@/config/form";

export const intakeSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(200),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company or project")
    .max(200),
  role: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(320),
  contactChannel: z.enum(contactChannels, {
    message: "Please choose a contact channel",
  }),
  contactHandle: z.string().trim().max(200).optional().or(z.literal("")),
  country: z
    .string()
    .trim()
    .min(2, "Please enter the country where the company is based")
    .max(120),
  services: z
    .array(z.enum(servicesOfInterest))
    .min(1, "Please select at least one service"),
  licensingStatus: z.enum(licensingStatuses, {
    message: "Please choose a licensing status",
  }),
  jurisdictions: z.string().trim().max(500).optional().or(z.literal("")),
  techStack: z.string().trim().max(500).optional().or(z.literal("")),
  timeline: z.enum(timelines).optional(),
  additionalInfo: z.string().trim().max(5000).optional().or(z.literal("")),
  consent: z.literal(true, {
    message: "Please confirm you agree to be contacted",
  }),

  // Hidden fields
  referralPartner: z.string().trim().max(200).default("Gofaizen & Sherle"),
  utm: z.record(z.string(), z.string().max(500)).optional(),
  submittedAt: z.string().optional(),

  // Honeypot — humans never fill this; bots do. Deliberately permissive
  // here so a filled value passes validation and the route can return a
  // fake success instead of tipping the bot off with a field error.
  website: z.string().max(1000).optional(),
});

export type IntakePayload = z.infer<typeof intakeSchema>;
