import { FC } from 'react';
import { AggregateOffer, Offers, AggregateRating, Review } from '../types';
export interface ProductJsonLdProps {
  keyOverride?: string;
  productName: string;
  images?: string[];
  description?: string;
  brand?: string;
  reviews?: Review[];
  aggregateRating?: AggregateRating;
  offers?: Offers | Offers[];
  aggregateOffer?: AggregateOffer;
  sku?: string;
  gtin8?: string;
  gtin13?: string;
  gtin14?: string;
  mpn?: string;
  color?: string;
  manufacturerName?: string;
  manufacturerLogo?: string;
  material?: string | ProductJsonLdProps;
  slogan?: string;
  disambiguatingDescription?: string;
  productionDate?: string;
  purchaseDate?: string;
  releaseDate?: string;
  award?: string;
}
declare const ProductJsonLd: FC<ProductJsonLdProps>;
export default ProductJsonLd;
