
import React from 'react';
import { MaterialCategory, ResourceItem, FeatureBlock } from './types';

export const CATEGORIES: MaterialCategory[] = [
  {
    id: 'cement',
    title: 'Cement & Concrete',
    icon: '🧱',
    description: 'The foundation of modern construction. Explore binders, aggregates, and reinforcing techniques.',
    details: 'Cement is a binder, a substance used for construction that sets, hardens, and adheres to other materials to bind them together.'
  },
  {
    id: 'steel',
    title: 'Steel & Metals',
    icon: '🏗',
    description: 'Strength and flexibility. Learn about structural steel, alloys, and anti-corrosion tech.',
    details: 'Steel is an alloy of iron and carbon, and sometimes other elements. Because of its high tensile strength and low cost, it is a major component used in buildings.'
  },
  {
    id: 'wood',
    title: 'Wood & Timber',
    icon: '🪵',
    description: 'Nature’s legacy. Insights into engineered wood, sustainable harvesting, and framing.',
    details: 'Wood has been used for thousands of years for fuel and as a construction material. It is an organic material, a natural composite of cellulose fibers.'
  },
  {
    id: 'smart',
    title: 'Smart Materials',
    icon: '🧪',
    description: 'Materials of the future: self-healing concrete, transparent wood, and smart glass.',
    details: 'Smart materials are those whose properties can be significantly changed in a controlled fashion by external stimuli, such as stress, temperature, moisture, pH, electric or magnetic fields.'
  },
  {
    id: 'bricks',
    title: 'Bricks & Blocks',
    icon: '🧱',
    description: 'Classic durability meets modern insulation standards and decorative finishes.',
    details: 'A brick is a type of block used to build walls, pavements and other elements in masonry construction.'
  },
  {
    id: 'insulation',
    title: 'Insulation Materials',
    icon: '🧴',
    description: 'Thermal efficiency and soundproofing. Explore eco-friendly and high-performance barriers.',
    details: 'Building insulation is any object in a building used as insulation for any purpose.'
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    type: 'Article',
    title: 'The Rise of Self-Healing Concrete',
    author: 'Dr. Sarah Chen',
    date: 'Oct 12, 2023',
    imageUrl: 'https://picsum.photos/seed/concrete/600/400'
  },
  {
    type: 'Video',
    title: 'Mastering Steel Framing for High-Rises',
    author: 'Engineering Daily',
    date: 'Sep 28, 2023',
    imageUrl: 'https://picsum.photos/seed/steel/600/400'
  },
  {
    type: 'Chart',
    title: 'Thermal Conductivity Comparison 2024',
    author: 'BuildSmart Research',
    date: 'Nov 05, 2023',
    imageUrl: 'https://picsum.photos/seed/chart/600/400'
  },
  {
    type: 'Guide',
    title: 'Sustainable Wood Sourcing PDF',
    author: 'EcoBuild Org',
    date: 'Dec 01, 2023',
    imageUrl: 'https://picsum.photos/seed/wood/600/400'
  }
];

export const FEATURES: FeatureBlock[] = [
  {
    title: 'Trusted Information',
    description: 'All our data is peer-reviewed by industry veterans and structural engineers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Updated Standards',
    description: 'Stay current with international building codes and environmental regulations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: 'AI-Enhanced Insights',
    description: 'Leverage our proprietary AI models to predict material lifespan and cost trends.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Expert Friendly',
    description: 'Whether you are a student or a senior architect, our resources scale to your level.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];
