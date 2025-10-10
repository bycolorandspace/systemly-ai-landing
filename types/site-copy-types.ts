// Types for each content section in site-copy.ts

import { LucideIcon } from "lucide-react";
import { Metadata } from "next";

export type MetadataType = Metadata;

type Stats = {
  number: string;
  label: string;
  context?: string;
  disclaimer?: string; // NEW
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
  disclaimer?: string; // NEW
};

type PricingPlan = {
  name: string;
  description: string;
  price: { billedMonthly: string; billedAnnually: string };
  features: string[];
  ctaLabel?: string;
  ctaUrl?: string;
  badge: string;
  disclaimer?: string;
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
  disclaimer?: string; // NEW
};

export type TradeCardsSectionType = {
  title: string;
  subtext: string;
  disclaimer?: string; // NEW
};

export type AboutSectionType = {
  title: string;
  subheader: string;
  description: string;
  description_2: string;
  description_3: string;
  stats: Stats[];
  disclaimer?: string; // NEW
};

export type FeaturesSectionType = {
  title: string;
  subheader: string;
  featuresList: FeatureList[];
  disclaimer?: string; // NEW
};

export type TestimonialsSectionType = {
  title: string;
  subheader: string;
  description: string;
  testimonialsList: Testimonial[];
  disclaimer?: string; // NEW
};

export type PricingSectionType = {
  title: string;
  subheader: string;
  description: string;
  plansList: PricingPlan[];
  moneyBackGuarantee: string;
  disclaimer?: string; // NEW
};

export type HowItWorksSectionType = {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  ctaText: string;
  ctaButton: string;
  disclaimer?: string; // NEW
};

export type NewsletterSectionType = {
  title: string;
  subheader: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  privacyNote: string;
  disclaimer?: string; // NEW
};

export type SocialProofSectionType = {
  title: string;
  description: string;
  stats: Stats[];
  disclaimer?: string; // NEW
};

export type FinalCTASectionType = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  trustSignals: string[];
  disclaimer?: string; // NEW
};

// New types for compliance
export type DisclaimerType = {
  short: string;
  full: string;
  riskWarning: string;
  regulatory: string;
};

export type LegalPageType = {
  title: string;
  url: string;
  description: string;
};

export type CompanyInfoType = {
  legalName: string;
  registrationNumber: string;
  registeredAddress: string;
  icoNumber: string;
  email: string;
  regulatoryStatus: string;
};

export type LegalSectionType = {
  title: string;
  pages: LegalPageType[];
  companyInfo: CompanyInfoType;
};

// Type definition for Terms of Service Page
export type TermsOfServiceSection = {
  heading: string;
  intro?: string;
  items?: string[];
  content?: string;
  subsections?: SubSection[];
  footer?: string;
};

type SubSection = {
  subheading: string;
  content?: string;
  items?: string[];
};

export type TermsOfServicePageType = {
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  introduction: string;
  sections: TermsOfServiceSection[];
  footer: string;
};

// Type definition for Risk Disclaimer Page
export type RiskDisclaimerSection = {
  heading: string;
  intro?: string;
  warning?: string;
  subheading?: string;
  items: string[];
  footer?: string;
};

export type RiskDisclaimerPageType = {
  title: string;
  lastUpdated: string;
  sections: RiskDisclaimerSection[];
  footer: string;
};

export type PrivacyPolicySubsectionType = {
  subheading: string;
  content?: string;
  items?: string[];
  footer?: string;
};

export type PrivacyPolicySectionType = {
  heading: string;
  intro?: string;
  content?: string;
  items?: string[];
  subsections?: PrivacyPolicySubsectionType[];
  footer?: string;
};

export type PrivacyPolicyPageType = {
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  introduction: string;
  sections: PrivacyPolicySectionType[];
  footer: string;
};
