
import React from 'react';

export interface MaterialCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  details?: string;
}

export interface ResourceItem {
  type: 'Article' | 'Video' | 'Chart' | 'Guide';
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

export interface FeatureBlock {
  title: string;
  description: string;
  // Fix: Imported React to provide the React namespace for ReactNode
  icon: React.ReactNode;
}

export interface AIResponse {
  summary: string;
  properties: string[];
  sustainabilityScore: number;
  aiTips: string;
}
