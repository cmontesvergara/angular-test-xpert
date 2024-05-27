export interface Breed {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  images: any[];
  name: string;
  imagePath?: string;
  temperament: string;
  origin: string;
  countryCodes: string;
  countryCode: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  altNames: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  cfa_url: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  vetstreet_url: string;
  vcahospitals_url: string;
}


export interface CatImage {
  id: string;
  url: string;
  breeds: {
    weight: {
      imperial: string;
      metric: string;
    };
    id: string;
    name: string;
    vetstreetUrl: string;
    temperament: string;
    origin: string;
    countryCodes: string;
    countryCode: string;
    description: string;
    lifeSpan: string;
    indoor: number;
    lap: number;
    altNames: string;
    adaptability: number;
    affectionLevel: number;
    childFriendly: number;
    dogFriendly: number;
    energyLevel: number;
    grooming: number;
    healthIssues: number;
    intelligence: number;
    sheddingLevel: number;
    socialNeeds: number;
    strangerFriendly: number;
    vocalisation: number;
    experimental: number;
    hairless: number;
    natural: number;
    rare: number;
    rex: number;
    suppressedTail: number;
    shortLegs: number;
    wikipediaUrl: string;
    hypoallergenic: number;
    referenceImageId: string;
  }[];
  width: number;
  height: number;
}


export interface StorageKeys {
  detailCatData:string
}
export interface ImageResponse {
  id:string
  url:string
}
