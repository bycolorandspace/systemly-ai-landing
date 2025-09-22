// autimlyTherapistOnboardingData.ts

// Enums specific to the Autimly therapist onboarding form
export enum Pronouns {
  SHE_HER = "She/Her",
  HE_HIM = "He/Him",
  THEY_THEM = "They/Them",
}

export enum ClientPopulations {
  INFANTS_TODDLERS = "Infants & Toddlers (under 3)",
  CHILDREN = "Children (3-12)",
  TEENAGERS = "Teenagers",
  ADULTS = "Adults",
}

export enum SupportTypes {
  AUTISTIC_INDIVIDUALS = "Autistic individuals",
  INDIVIDUALS_WITH_ADHD = "Individuals with ADHD",
}

export enum FamilySupport {
  PARENTS_CARERS = "Parents & Carers",
  COUPLES = "Couples",
  FAMILIES = "Families",
}

export enum MedicalDiagnostic {
  CLINICAL_PSYCHOLOGIST = "Clinical Psychologist",
  PSYCHIATRIST = "Psychiatrist",
  NEURODEVELOPMENTAL_PAEDIATRICIAN = "Neurodevelopmental Paediatrician",
  PAEDIATRIC_NEUROLOGIST = "Paediatric Neurologist",
}

export enum DevelopmentalTherapies {
  OCCUPATIONAL_THERAPY = "Occupational Therapy (OT)",
  SPEECH_LANGUAGE_THERAPY = "Speech & Language Therapy (SLT)",
  DIETITIAN_NUTRITION = "Dietitian / Nutrition & Feeding Support",
}

export enum BehaviouralApproaches {
  ABA_THERAPIST = "Applied Behaviour Analysis (ABA) -- Therapist",
  ABA_CONSULTANT = "Applied Behaviour Analysis (ABA) -- Consultant",
  POSITIVE_BEHAVIOUR_SUPPORT = "Positive Behaviour Support (PBS)",
  PIVOTAL_RESPONSE_THERAPY = "Pivotal Response Therapy (PRT)",
}

export enum RelationshipBasedApproaches {
  DIR_FLOORTIME = "DIR/Floortime",
  RDI = "Relationship Development Intervention (RDI)",
}

export enum CreativeTherapies {
  LEGO_THERAPY = "Lego Therapy",
  MUSIC_THERAPY = "Music Therapy",
}

export enum MentalHealthSupport {
  COUNSELLING_THERAPY = "Counselling / Therapy / Psychotherapy",
}

export enum CoachingMentoring {
  NEURODIVERGENT_COACHING = "Neurodivergent coaching",
  PARENT_CARER_COACHING = "Coaching for parents & carers",
  EMPLOYMENT_COACHING = "Employment and workplace coaching",
  PEER_MENTORING = "Peer/lived experience mentoring",
}

export enum EducationalSupport {
  TUTOR_HOME_EDUCATION = "Tutor / Home Education Support",
  EDUCATIONAL_SUPPORT = "Educational Support (e.g. Study Skills Coach, Learning Mentor)",
}

export enum LegalAdvocacy {
  LEGAL_SEND_ADVOCATE = "Legal/SEND advocate",
  ADVOCACY_CASEWORK = "Advocacy / Casework Support",
  WORKPLACE_EMPLOYMENT_ADVOCACY = "Workplace / Employment Advocacy",
}

export enum CaregivingSupport {
  BABYSITTER_CHILDMINDER = "Babysitter/Childminder",
  CARER_SUPPORT_WORKER = "Carer/Support Worker",
  RESPITE_SUPPORT = "Respite Support",
}

export enum DiagnosticServices {
  AUTISM = "Autism",
  ADHD = "ADHD",
}

export enum SolutionFocusedApproaches {
  CBT = "Cognitive Behavioural Therapy (CBT)",
  DBT = "Dialectical Behaviour Therapy (DBT)",
  ACT = "Acceptance and Commitment Therapy (ACT)",
}

export enum ExploratoryApproaches {
  PSYCHODYNAMIC = "Psychodynamic Therapy (PDT)",
  MENTALIZATION_BASED = "Mentalization-Based Therapy (MBT)",
}

export enum SupportiveHumanistic {
  TRAUMA_INFORMED = "Trauma-Informed Therapy",
  PERSON_CENTRED = "Person-Centred Therapy",
  FAMILY_THERAPY = "Family Therapy",
}

export enum BodyBasedTraumaFocused {
  EMDR = "Eye Movement Desensitisation and Reprocessing (EMDR)",
  SOMATIC_THERAPY = "Somatic Therapy",
}

export enum CulturallyInformed {
  LGBTQ_CLIENTS = "LGBTQ+ Clients",
  PEOPLE_OF_COLOUR = "People of Colour / Minority Ethnic Clients",
  FAITH_BASED = "Faith-based or culturally specific clients",
}

export enum SessionFormats {
  SHORT_CONSULTS = "Short Consults (e.g., 30-minute advice or guidance sessions)",
  FULL_SUPPORT_SESSIONS = "Full Support / Therapy Sessions (typically 50-60 minutes)",
  PARENT_COACHING = "Parent Coaching Sessions",
  JOINT_SESSIONS = "Joint Sessions (e.g., SLT + OT)",
  GROUP_SUPPORT = "Group Support Sessions",
  DISCUSS_OPTIONS = "I'd like to discuss these options",
}

export enum SessionDelivery {
  REMOTE = "Remote",
  IN_PERSON = "In-person",
  BOTH = "Both",
}

export enum PreferredDays {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
}

export enum PreferredTimes {
  MORNINGS = "Mornings (8am-12pm)",
  AFTERNOONS = "Afternoons (12pm-4pm)",
  EVENINGS = "Evenings (4pm-8pm)",
}

export enum SpecificExperience {
  PDA_PROFILES = "PDA profiles",
  HIGH_SUPPORT_NEEDS = "High support needs",
  ALEXITHYMIA = "Alexithymia",
  LATE_DIAGNOSED = "Late-diagnosed clients",
  NON_SPEAKING = "Non-speaking individuals",
}

export enum NeurodivergentIdentity {
  IDENTIFY_AS_NEURODIVERGENT = "I identify as neurodivergent",
  PREFER_NOT_TO_SHARE = "Prefer not to share",
}

export enum ProfileVisibility {
  YES_SHOW_ON_PROFILE = "Yes, I'd like this shown on my profile",
  NO_KEEP_PRIVATE = "No, keep this private (visible only to the Autimly team)",
}

// Type definitions
type BaseQuestion = {
  id: string;
  label: string;
  required: boolean;
  description?: string;
  placeholder?: string;
};

type TextQuestion = BaseQuestion & {
  type: "text";
  dependsOn?: {
    questionId: string;
    value: string;
  };
};

type NumberQuestion = BaseQuestion & {
  type: "number";
};

type EmailQuestion = BaseQuestion & {
  type: "email";
};

type TelQuestion = BaseQuestion & {
  type: "tel";
};

type DateQuestion = BaseQuestion & {
  type: "date";
  minDate?: Date; // For date inputs
  maxDate?: Date; // For date inputs
};

type FileQuestion = BaseQuestion & {
  type: "file";
  accept?: string; // For file inputs
  maxSize?: number; // For file inputs (MB)
  multiple?: boolean; // For file inputs
};

type RadioQuestion = BaseQuestion & {
  type: "radio";
  options: string[];
  dependsOn?: {
    questionId: string;
    value: string;
  };
  hasOtherOption?: boolean;
};

type CheckboxQuestion = BaseQuestion & {
  type: "checkbox";
  options: string[];
  maxSelections?: number;
  hasOtherOption?: boolean;
};

type TextareaQuestion = BaseQuestion & {
  type: "textarea";
  dependsOn?: {
    questionId: string;
    value: string;
  };
};

type Question =
  | TextQuestion
  | NumberQuestion
  | EmailQuestion
  | TelQuestion
  | DateQuestion
  | FileQuestion
  | RadioQuestion
  | CheckboxQuestion
  | TextareaQuestion;

type Step = {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
};

// Define the Autimly therapist onboarding form data
const partnerOnboardingData: Step[] = [
  // Section 1: Personal Information
  {
    id: "personal-information",
    title: "Personal Information",
    description:
      "We are so glad you're here, please take a moment to complete this form so we can get to know you better and build your profile.",
    questions: [
      {
        id: "fullName",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        id: "preferredPronouns",
        type: "radio",
        label: "Preferred Pronouns",
        required: true,
        options: Object.values(Pronouns),
        hasOtherOption: true,
      },
      {
        id: "professionalTitle",
        type: "text",
        label: "Professional Title / Role",
        required: true,
        placeholder: "e.g., Clinical Psychologist, Occupational Therapist",
      },
      {
        id: "yearsExperience",
        type: "text",
        label: "Years of Professional Experience",
        required: true,
        placeholder: "e.g., 5 years",
      },
      {
        id: "registrationBody",
        type: "text",
        label: "Professional Registration Body & Number",
        description:
          "(e.g., HCPC, GMC, BACP, MNCPS, BACB, or another relevant accreditation)",
        required: false,
        placeholder: "e.g., HCPC: AB123456",
      },
      {
        id: "qualifications",
        type: "textarea",
        label:
          "Relevant Qualifications, Trainings, Memberships, or Specialisations",
        required: false,
        placeholder: "List your relevant qualifications and specialisations...",
      },
      {
        id: "contactEmail",
        type: "email",
        label: "Contact Email",
        required: true,
        placeholder: "your.email@example.com",
      },
      {
        id: "phoneNumber",
        type: "tel",
        label: "Phone Number",
        required: true,
        placeholder: "07712 345678",
      },
      {
        id: "languagesSpoken",
        type: "text",
        label: "Languages Spoken",
        description: "(optional)",
        required: false,
        placeholder: "e.g., English, Spanish, French",
      },
    ],
  },

  // Section 2: Who You Work With
  {
    id: "who-you-work-with",
    title: "Who You Work With",
    description:
      "Tick all that apply based on your experience and practice focus.",
    questions: [
      {
        id: "whoDoYouSupport",
        type: "checkbox",
        label: "Who Do You Support? (Select all that apply)",
        required: true,
        options: Object.values(SupportTypes),
        hasOtherOption: true,
      },
      {
        id: "clientPopulations",
        type: "checkbox",
        label: "Client Populations (Select all that apply)",
        required: true,
        options: Object.values(ClientPopulations),
      },
      {
        id: "familySupport",
        type: "checkbox",
        label:
          "Do your services include support for families, couples, or relational systems",
        required: false,
        options: Object.values(FamilySupport),
        hasOtherOption: true,
      },
    ],
  },

  // Section 3: Areas of Practice and Support
  {
    id: "areas-of-practice",
    title: "Areas of Practice and Support",
    description:
      "Let us know the support you provide — from clinical care to therapeutic, educational, and daily life support — so we can match you accurately.",
    questions: [
      {
        id: "medicalDiagnostic",
        type: "checkbox",
        label: "Medical & Diagnostic Professionals",
        required: false,
        options: Object.values(MedicalDiagnostic),
        hasOtherOption: true,
      },
      {
        id: "clinicalSleepSupport",
        type: "checkbox",
        label: "I offer clinical sleep support",
        description:
          "Only select if clinically trained in sleep support (e.g., clinical psychologist, paediatrician).",
        required: false,
        options: [
          "Only select if clinically trained in sleep support (e.g., clinical psychologist, paediatrician).",
        ],
      },
      {
        id: "developmentalTherapies",
        type: "checkbox",
        label: "Developmental & Allied Therapies",
        required: false,
        options: Object.values(DevelopmentalTherapies),
        hasOtherOption: true,
      },
      {
        id: "sensoryIntegration",
        type: "radio",
        label:
          "If you are an occupational therapist, do you provide sensory integration therapy?",
        required: false,
        options: ["Yes", "No"],
      },
      {
        id: "behaviouralApproaches",
        type: "checkbox",
        label: "Structured and naturalistic behavioural approaches",
        required: false,
        options: Object.values(BehaviouralApproaches),
      },
      {
        id: "relationshipBasedApproaches",
        type: "checkbox",
        label: "Developmental & Relationship-Based Approaches",
        required: false,
        options: Object.values(RelationshipBasedApproaches),
      },
      {
        id: "creativeTherapies",
        type: "checkbox",
        label: "Play & Creative Therapies",
        required: false,
        options: Object.values(CreativeTherapies),
        hasOtherOption: true,
      },
      {
        id: "mentalHealthSupport",
        type: "checkbox",
        label: "Mental Health & Emotional Wellbeing Support",
        required: false,
        options: Object.values(MentalHealthSupport),
        hasOtherOption: true,
      },
      {
        id: "coachingMentoring",
        type: "checkbox",
        label: "Coaching & Mentoring",
        required: false,
        options: Object.values(CoachingMentoring),
        hasOtherOption: true,
      },
    ],
  },

  // Section 4: Educational, Legal/Advocacy & Practical Support Roles
  {
    id: "educational-legal-practical",
    title: "Educational, Legal/Advocacy & Practical Support Roles",
    questions: [
      {
        id: "educationalSupport",
        type: "checkbox",
        label: "Education Support",
        required: false,
        options: Object.values(EducationalSupport),
        hasOtherOption: true,
      },
      {
        id: "legalAdvocacy",
        type: "radio",
        label: "Legal & Advocacy Support",
        required: false,
        options: Object.values(LegalAdvocacy),
      },
      {
        id: "caregivingSupport",
        type: "checkbox",
        label: "Caregiving & Daily Support (Children and Adults)",
        required: false,
        options: Object.values(CaregivingSupport),
        hasOtherOption: true,
      },
    ],
  },

  // Section 5: Diagnostic Services
  {
    id: "diagnostic-services",
    title: "Diagnostic Services",
    questions: [
      {
        id: "diagnosticAssessments",
        type: "checkbox",
        label: "I provide formal diagnostic assessments for:",
        required: false,
        options: Object.values(DiagnosticServices),
        hasOtherOption: true,
      },
    ],
  },

  // Section 6: Your Approach & Modalities
  {
    id: "approach-modalities",
    title: "Your Approach & Modalities",
    description:
      "If you provide therapy or mental health support in Section 3, please tell us more about how you work.",
    questions: [
      {
        id: "solutionFocusedApproaches",
        type: "checkbox",
        label: "Solution-Focused Approaches",
        required: false,
        options: Object.values(SolutionFocusedApproaches),
      },
      {
        id: "exploratoryApproaches",
        type: "checkbox",
        label: "Exploratory / Insight-Focused",
        required: false,
        options: Object.values(ExploratoryApproaches),
      },
      {
        id: "supportiveHumanistic",
        type: "checkbox",
        label: "Supportive / Humanistic",
        required: false,
        options: Object.values(SupportiveHumanistic),
      },
      {
        id: "bodyBasedTraumaFocused",
        type: "checkbox",
        label: "Body-Based & Trauma-Focused",
        required: false,
        options: Object.values(BodyBasedTraumaFocused),
      },
      {
        id: "neurodivergenceSpecific",
        type: "text",
        label: "Neurodivergence-Specific (please specify)",
        description:
          "(e.g. Autism-affirming, PDA-informed, ADHD-informed, Sensory-informed)",
        required: false,
        placeholder: "e.g., Autism-affirming, PDA-informed",
      },
      {
        id: "eclecticIntegrative",
        type: "text",
        label:
          "Eclectic / Integrative Modalities - I use a mix of modalities (please list)",
        required: false,
        placeholder: "List the modalities you use...",
      },
      {
        id: "culturallyInformed",
        type: "checkbox",
        label: "Do you provide specialised or culturally informed support for:",
        required: false,
        options: Object.values(CulturallyInformed),
        hasOtherOption: true,
      },
    ],
  },

  // Section 7: Session Types, Delivery & Availability
  {
    id: "session-delivery-availability",
    title: "Session Types, Delivery & Availability",
    questions: [
      {
        id: "sessionFormats",
        type: "checkbox",
        label:
          "Session Formats You're Open to Providing (tick as many that apply)",
        required: false,
        options: Object.values(SessionFormats),
      },
      {
        id: "sessionDelivery",
        type: "checkbox",
        label: "How Do You Deliver Sessions?",
        required: false,
        options: Object.values(SessionDelivery),
      },
      {
        id: "sessionRate",
        type: "text",
        label:
          "What is your standard session rate? Please include the session length and fee",
        required: false,
        placeholder: "e.g., 60 minutes - £80",
      },
      {
        id: "practiceLocation",
        type: "text",
        label: "Practice Location/Areas you cover",
        description:
          "If you offer in-person services, please let us know one or both of the following: -Your main practice location -Any areas you're willing to travel to",
        required: false,
        placeholder: "e.g., Central London, willing to travel within 20 miles",
      },
      {
        id: "preferredDays",
        type: "checkbox",
        label: "Preferred Days",
        description: "When are you generally available to offer sessions:",
        required: false,
        options: Object.values(PreferredDays),
      },
      {
        id: "preferredTimes",
        type: "checkbox",
        label: "Preferred Times (please tick as many that apply)",
        required: false,
        options: Object.values(PreferredTimes),
        hasOtherOption: true,
      },
    ],
  },

  // Section 8: Legal and Regulatory Compliance
  {
    id: "legal-regulatory-compliance",
    title: "Legal and Regulatory Compliance",
    questions: [
      {
        id: "independentContractor",
        type: "checkbox",
        label: "Independent Contractor",
        required: false,
        options: ["I confirm I am joining as an independent contractor."],
      },
      {
        id: "insuranceType",
        type: "text",
        label: "Insurance Type",
        required: false,
        placeholder: "e.g., Professional Indemnity",
      },
      {
        id: "insuranceProvider",
        type: "text",
        label: "Insurance Provider",
        required: false,
        placeholder: "e.g., AXA, Bupa",
      },
      {
        id: "coverageAmount",
        type: "text",
        label: "Coverage Amount",
        required: false,
        placeholder: "e.g., £6,000,000",
      },
      {
        id: "policyExpiryDate",
        type: "date",
        label: "Policy Expiry Date",
        required: false,
      },
      {
        id: "safeguardingDeclarations",
        type: "checkbox",
        label: "Safeguarding Declarations",
        required: false,
        options: [
          "I hold a current Enhanced DBS certificate",
          "I have completed safeguarding training",
        ],
      },
      {
        id: "dbsIssueDate",
        type: "date",
        label: "DBS Issue Date",
        required: false,
      },
      {
        id: "safeguardingTraining",
        type: "text",
        label: "Safeguarding Training",
        description:
          "Please include the level of training (if known), provider, and approximate date completed.",
        required: false,
        placeholder: "e.g., Level 2 Safeguarding, NSPCC, March 2024",
      },
    ],
  },

  // Section 9: Document Uploads
  {
    id: "document-uploads",
    title: "Document Uploads",
    description:
      "Please upload relevant documentation to support your application",
    questions: [
      {
        id: "qualificationsCertificates",
        type: "file",
        label: "Qualifications / Training Certificates",
        required: false,
        accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx",
      },
      {
        id: "professionalRegistration",
        type: "file",
        label: "Proof of Professional Registration",
        required: false,
        accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx",
      },
      {
        id: "dbsCertificate",
        type: "file",
        label: "Enhanced DBS Certificate",
        required: false,
        accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx",
      },
      {
        id: "insuranceCertificate",
        type: "file",
        label: "Professional Insurance Certificate",
        required: false,
        accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx",
      },
      {
        id: "profilePhoto",
        type: "file",
        label: "Profile Photo (adds warmth and trust for clients)",
        required: false,
        accept: ".jpg,.jpeg,.png",
      },
    ],
  },

  // Section 10: About You / Personal Statement
  {
    id: "about-you-personal-statement",
    title: "About You / Personal Statement",
    questions: [
      {
        id: "shortBio",
        type: "textarea",
        label: "Short Bio (for your profile):",
        description:
          "In 2-4 sentences, tell us what your work is grounded in and what people can expect when working with you. This helps us understand your approach and lets individuals and families get a feel for how you work.",
        required: true,
        placeholder:
          "Describe your approach and what clients can expect when working with you...",
      },
      {
        id: "specificExperience",
        type: "checkbox",
        label:
          "Do you have specific experience with any of the following? (optional)",
        required: false,
        options: Object.values(SpecificExperience),
        hasOtherOption: true,
      },
      {
        id: "neurodivergentIdentity",
        type: "radio",
        label:
          "Neurodivergent Identity - At Autimly, we value lived experience. If you identify as neurodivergent, you're welcome to share this with us.",
        required: false,
        options: Object.values(NeurodivergentIdentity),
      },
      {
        id: "profileVisibility",
        type: "radio",
        label: "Would you like this to appear on your public profile?",
        description: "(You can update this at any time)",
        required: false,
        options: Object.values(ProfileVisibility),
        dependsOn: {
          questionId: "neurodivergentIdentity",
          value: "I identify as neurodivergent",
        },
      },
      {
        id: "adjustments",
        type: "textarea",
        label: "Do you need any adjustments to work with us comfortably?",
        description:
          "We're committed to accessibility. Let us know how we can support you best.",
        required: false,
        placeholder: "Please describe any adjustments you might need...",
      },
    ],
  },

  // Section 11: Ethics & Final Confirmation
  {
    id: "ethics-final-confirmation",
    title: "Ethics & Final Confirmation",
    questions: [
      {
        id: "confirmation",
        type: "checkbox",
        label: "Confirmation",
        required: true,
        options: [
          "I aim to provide support that respects neurodivergent identity, communication, and autonomy.",
          "I confirm the information provided is accurate and consent to its use for onboarding.",
          "I'm open to joining Autimly's professional community.",
        ],
      },
    ],
  },
];

export default partnerOnboardingData;

export type {
  Question,
  TextQuestion,
  NumberQuestion,
  EmailQuestion,
  TelQuestion,
  DateQuestion,
  FileQuestion,
  RadioQuestion,
  CheckboxQuestion,
  TextareaQuestion,
  Step,
};
