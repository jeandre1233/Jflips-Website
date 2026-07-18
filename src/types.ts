/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface PartnershipOption {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  recommended: boolean;
  ctaText: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  ageGroup: string;
  duration: string;
  intensity: 'Introductory' | 'Intermediate' | 'Elite' | 'All Levels';
  features: string[];
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  instagram: string;
  facebook: string;
}
