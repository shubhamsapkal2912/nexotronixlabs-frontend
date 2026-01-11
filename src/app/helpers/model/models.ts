export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  longDescription?: string;
  features?: string[];
}

export interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;        // Make sure this exists
  postedDate: string;        // Make sure this exists
  description: string;
  responsibilities: string[];
  requirements: string[];
}


export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface CultureValue {
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  icon: string;
  description: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface SelectOption {
  label: string;
  value: string;
}
