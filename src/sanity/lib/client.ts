import { createClient } from 'next-sanity'
import ImageUrlBuilder from "@sanity/image-url";

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'development', // Use CDN only in development
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);