export type Language = 'pt' | 'en';

export interface Artwork {
  id: string;
  titlePT: string;
  titleEN: string;
  year: string;
  mediumPT: string;
  mediumEN: string;
  seriesPT: string;
  seriesEN: string;
  locationPT: string;
  locationEN: string;
  category: 'performance' | 'escultura' | 'fotografia' | 'video' | 'instalacao';
  imageUrl: string;
  dimensions?: string;
  altPT: string;
  altEN: string;
  descriptionPT?: string;
  descriptionEN?: string;
}

export interface TimelineItem {
  year: string;
  titlePT: string;
  titleEN: string;
  subtitlePT?: string;
  subtitleEN?: string;
}

export interface ExhibitionItem {
  year: string;
  titlePT: string;
  titleEN: string;
  locationPT: string;
  locationEN: string;
}

export interface CollectionItem {
  institutionPT: string;
  institutionEN: string;
  locationPT: string;
  locationEN: string;
}

export interface ProcessBlock {
  id: string;
  titlePT: string;
  titleEN: string;
  subtitlePT: string;
  subtitleEN: string;
  text1PT: string;
  text1EN: string;
  text2PT: string;
  text2EN: string;
  imageAltPT: string;
  imageAltEN: string;
  materialColor: string; // CSS color or gradient
  materialNamePT: string;
  materialNameEN: string;
}

export interface PressClipping {
  id: string;
  source: string;
  quotePT: string;
  quoteEN: string;
  link?: string;
  authorPT?: string;
  authorEN?: string;
}
