// Types for each content section in site-copy.ts

import { LucideIcon } from "lucide-react";
import { Metadata } from "next";

export type MetadataType = Metadata;

type Stats = {
  number: string;
  label: string;
  context?: string;
};

type FeatureList = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Testimonial = {
  description: string;
  name: string;
  title: string;
};

type PricingPlan = {
  name: string;
  description: string;
  price: { billedMonthly: string; billedAnnually: string };
  features: string[];
  ctaLabel?: string;
  ctaUrl?: string;
  badge: string;
};

type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type HeroSectionType = {
  header: string;
  subheader: string;
  ctaLabel: string;
  ctaUrl: string;
  secondaryCta: string;
};

export type TradeCardsSectionType = {
  title: string;
  subtext: string;
};

export type AboutSectionType = {
  title: string;
  subheader: string;
  description: string;
  description_2: string;
  description_3: string;
  stats: Stats[];
};

export type FeaturesSectionType = {
  title: string;
  subheader: string;
  featuresList: FeatureList[];
};

export type TestimonialsSectionType = {
  title: string;
  subheader: string;
  description: string;
  testimonialsList: Testimonial[];
};

export type PricingSectionType = {
  title: string;
  subheader: string;
  description: string;
  plansList: PricingPlan[];
  moneyBackGuarantee: string;
};

export type HowItWorksSectionType = {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  ctaText: string;
  ctaButton: string;
};

export type NewsletterSectionType = {
  title: string;
  subheader: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  privacyNote: string;
};

export type SocialProofSectionType = {
  title: string;
  description: string;
  stats: Stats[];
};

export type FinalCTASectionType = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  trustSignals: string[];
};
