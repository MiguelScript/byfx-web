import { TypedObject } from "sanity";

type service = {
  _id: string;
  name: string;
  description: string;
  descriptionFullArray: TypedObject | TypedObject[];
  tags: string[];
  position: number;
  hashtag: string;
  image: string;
  proyects?: proyect[];
};

export type proyect = {
  _id: string;
  client?: string;
  title?: string;
  resourceType: "link" | "file";
  link: string;
  file?: { asset: { url: string } };
};

export default service;
