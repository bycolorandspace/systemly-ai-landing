type StepCTA = {
  text: string;
  action: string; // Changed from () => void to string to match "next_step"
};

type StepContent = {
  headline?: string | null;
  body?: string | null;
  cta?: StepCTA | null;
};

type OnboardImage = {
  url: string;
  alt: string;
  size?: "small" | "medium" | "large";
};

type OptionMetadata = {
  type?:
    | "insight_point"
    | "testimonial"
    | "benefit_point"
    | "selectable_option";
  nextStepLogic?: string;
  tags?: string[];
  pricingTier?: string;
  featureNeeds?: string[];
  solutionFocus?: string;
  integrationPotential?: "high" | "medium" | "low";
  tier?: string;
  [key: string]: string | number | boolean | object | string[] | undefined;
};

type QuizFormField = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  options?: string[]; // For select or radio inputs
  required: boolean;
  validation: string;
};

type StepOption = {
  id: string;
  text: string;
  emoji?: string;
  value: string | null;
  followUp?: string | null;
  image: OnboardImage | null;
  metadata?: OptionMetadata;
  optionType?: "single" | "multiple";
};

type DataCollection = {
  fieldName: string;
  fieldType: "single_select" | "multi_select" | "form";
  validation: "required";
};

type StepMetadata = {
  marketInsight: string | null;
  required: boolean;
};

type Step = {
  id: number;
  type: "content" | "question" | "form";
  input:
    | "radio"
    | "multi_select"
    | "text"
    | "email"
    | "number"
    | "textarea"
    | "select"
    | null;
  category: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  image: OnboardImage | null;
  content: StepContent | null; // Made non-optional since it's always present
  dataCollection: DataCollection | null;
  metadata: StepMetadata | null; // Made non-optional since it's always present
  options?: StepOption[];
  formFields?: QuizFormField[];
};

type OnboardingMetadata = {
  title: string;
  subtitle: string;
  estimatedTime: string;
  totalSteps: number;
  purpose: string;
  image: OnboardImage;
};

type OnboardingFlow = {
  metadata: OnboardingMetadata;
  steps: Step[];
  //   dataAnalysis?: {
  //     segmentation?: Record<string, Record<string, string>>;
  //   };
  //   analytics?: {
  //     conversionMetrics?: string[];
  //     marketResearchMetrics?: string[];
  //   };
};

type UserResponses = {
  [key: string]: string | string[] | null;
};

export type {
  StepCTA,
  StepContent,
  OnboardImage,
  OptionMetadata,
  QuizFormField,
  StepOption,
  DataCollection,
  StepMetadata,
  Step,
  OnboardingMetadata,
  OnboardingFlow,
  UserResponses,
};
