interface ActiveCampaignTherapistApiResponse {
  contact?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  message?: string;
  errors?: Array<{
    title: string;
    detail: string;
    source?: { parameter: string };
  }>;
}

interface ContactListResponse {
  contactList?: {
    id: string;
    contact: string;
    list: string;
    status: string;
  };
}

interface ActiveCampaignField {
  name?: string;
  id?: string;
  title?: string;
  type?: string;
}

// Admin Email Data Structure - All Sections
// These types organize your rich form data into logical sections for the admin notification email

interface PersonalInfoSection {
  fullName: string;
  pronouns: string;
  pronounsOther?: string;
  title: string;
  experience: string;
  registrationBody: string;
  qualifications: string;
  email: string;
  phone: string;
  languagesSpoken?: string;
}

interface WorkingWithSection {
  clientTypes: string; // formatted from whoDoYouSupport array
  clientTypesOther?: string;
  populations: string; // formatted from clientPopulations array
  familySupport?: string; // formatted from familySupport array
  familySupportOther?: string;
}

interface PracticeAreasSection {
  medicalDiagnostic?: string; // formatted array
  medicalDiagnosticOther?: string;
  clinicalSleepSupport?: string; // formatted array
  developmentalTherapies?: string; // formatted array
  developmentalTherapiesOther?: string;
  sensoryIntegration?: string;
  behaviouralApproaches?: string; // formatted array
  relationshipBasedApproaches?: string; // formatted array
  creativeTherapies?: string; // formatted array
  creativeTherapiesOther?: string;
  mentalHealthSupport?: string; // formatted array
  mentalHealthSupportOther?: string;
  coachingMentoring?: string; // formatted array
  coachingMentoringOther?: string;
}

interface SupportServicesSection {
  educationalSupport?: string; // formatted array
  educationalSupportOther?: string;
  legalAdvocacy?: string;
  caregivingSupport?: string; // formatted array
  caregivingSupportOther?: string;
  diagnosticAssessments?: string; // formatted array
  diagnosticAssessmentsOther?: string;
}

interface ApproachSection {
  solutionFocusedApproaches?: string; // formatted array
  exploratoryApproaches?: string; // formatted array
  supportiveHumanistic?: string; // formatted array
  bodyBasedTraumaFocused?: string; // formatted array
  neurodivergenceSpecific?: string;
  eclecticIntegrative?: string;
  culturallyInformed?: string; // formatted array
  culturallyInformedOther?: string;
}

interface LogisticsSection {
  sessionFormats: string; // formatted array
  sessionDelivery: string; // formatted array
  sessionRate: string;
  practiceLocation: string;
  preferredDays: string; // formatted array
  preferredTimes: string; // formatted array
  preferredTimesOther?: string;
}

interface ComplianceSection {
  independentContractor: string; // formatted array
  insuranceType: string;
  insuranceProvider: string;
  coverageAmount: string;
  policyExpiryDate: string;
  safeguardingDeclarations: string; // formatted array
  dbsIssueDate: string;
  safeguardingTraining: string;
}

interface DocumentLinksSection {
  qualificationsCertificates?: string; // file URL
  professionalRegistration?: string; // file URL
  dbsCertificate?: string; // file URL
  insuranceCertificate?: string; // file URL
  profilePhoto?: string; // file URL
}

interface ProfileSection {
  shortBio: string;
  specificExperience?: string; // formatted array
  specificExperienceOther?: string;
  neurodivergentIdentity?: string;
  profileVisibility: string;
  adjustments?: string;
  confirmations: string; // formatted array - what they confirmed
}

// Main Admin Email Data Interface
interface AdminEmailData {
  personalInfo: PersonalInfoSection;
  workingWith: WorkingWithSection;
  practiceAreas: PracticeAreasSection;
  supportServices: SupportServicesSection;
  approach: ApproachSection;
  logistics: LogisticsSection;
  compliance: ComplianceSection;
  documents: DocumentLinksSection;
  profile: ProfileSection;
}

// ActiveCampaign Contact Interface (minimal data)
interface ActiveCampaignTherapistContact {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  fieldValues: {
    professionalTitle: string;
    yearsExperience: string;
    practiceLocation: string;
    sessionRate: string;
  };
}

export type {
  ActiveCampaignField,
  ActiveCampaignTherapistApiResponse,
  ContactListResponse,
  ActiveCampaignTherapistContact,
  AdminEmailData,
  PersonalInfoSection,
  WorkingWithSection,
  PracticeAreasSection,
  SupportServicesSection,
  ApproachSection,
  LogisticsSection,
  ComplianceSection,
  DocumentLinksSection,
  ProfileSection,
};
