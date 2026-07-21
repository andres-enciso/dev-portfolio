export type Lang = "es" | "en";

export interface Translations {
  layout: {
    title: string;
    description: string;
  };
  hero: {
    name: string;
    label: string;
    availableBadge: string;
    image: string;
    city: string;
    region: string;
    email: string;
    phone: string;
    profiles: { network: string; url: string }[];
    copiedText: string;
  };
  about: {
    title: string;
    summary: string;
  };
  experience: {
    title: string;
    labels: {
      summary: string;
      responsibilities: string;
      achievements: string;
      showMore: string;
      showLess: string;
      present: string;
    };
    items: Array<{
      name: string;
      position: string;
      location_type: string;
      location: string;
      url: string;
      startDate: string;
      endDate: string | null;
      summary: string;
      responsibilities: string[];
      achievements: string[];
      skills: string[];
    }>;
  };
  skills: {
    title: string;
    categories: Array<{
      name: string;
      items: { name: string }[];
    }>;
  };
  languages: {
    title: string;
    items: { language: string; level: string }[];
  };
  education: {
    title: string;
    certificatesTitle: string;
    labels: {
      showMore: string;
      showLess: string;
    };
    education: Array<{
      institution: string;
      url: string;
      area: string;
      studyType: string;
      startDate: string;
      endDate: string;
    }>;
    mainCertificates: Array<{
      name: string;
      date: string;
      issuer: string;
      url: string;
    }>;
    otherCertificates: Array<{
      name: string;
      date: string;
      issuer: string;
      url: string;
    }>;
  };
  projects: {
    title: string;
    labels: {
      visit: string;
      repo: string;
      close: string;
      showMore: string;
      showLess: string;
    };
    items: Array<{
      name: string;
      isActive: boolean;
      description: string;
      highlights: string[];
      url: string;
      github?: string;
      image?: string;
      skills?: string[];
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    emailButton: string;
    linkedinButton: string;
  };
  footer: {
    cmdK: string;
    printResume: string;
    visitProfile: string;
  };
}
