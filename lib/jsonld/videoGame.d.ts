import { FC } from 'react';
import {
  Offers,
  AggregateRating,
  GamePlayMode,
  Video,
  Review,
  ApplicationCategory,
} from '../types';
export interface VideoGameJsonLdProps {
  keyOverride?: string;
  name: string;
  url?: string;
  image?: string;
  description?: string;
  languageName?: string | string[];
  translatorName?: string | string[];
  authorName?: string;
  aggregateRating?: AggregateRating;
  applicationCategory?: ApplicationCategory;
  platformName?: string | string[];
  operatingSystemName?: string | string[];
  datePublished?: string;
  keywords?: string;
  producerName?: string;
  producerUrl?: string;
  providerName?: string;
  providerUrl?: string;
  publisherName?: string | string[];
  offers?: Offers | Offers[];
  genreName?: string | string[];
  playMode?: GamePlayMode | GamePlayMode[];
  processorRequirements?: string;
  memoryRequirements?: string;
  storageRequirements?: string;
  trailer?: Video;
  reviews?: Review[];
}
declare const VideoGameJsonLd: FC<VideoGameJsonLdProps>;
export default VideoGameJsonLd;
