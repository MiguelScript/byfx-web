import { groq } from "next-sanity";
import { client } from "./lib/client";
import socialNetworks from "@/types/socialNetwork";
import service from "@/types/service";
import home from "@/types/home";
import trabajo from "@/types/trabajo";

export async function getSocialNetworks(): Promise<socialNetworks[]> {
  return client.fetch(groq`*[_type == "social-networks"]{
        _id,
        name,
        url,
    }`);
}

export async function getSocialInfoHome(): Promise<socialNetworks[]> {
  return client.fetch(groq`*[_type == "social-networks" && showInHome == true] | order(posicion desc){
        _id,
        name,
        url,
        "image": image.asset->url,
        imgSize,
        posicion
    }`);
}

export async function getWhatsappLink(): Promise<socialNetworks> {
  return client.fetch(groq`*[_type == "social-networks" && name == "whatsapp"][0] {
        _id,
        name,
        url,
        "image": image.asset->url,
        imgSize,
        posicion
    }`);
}

export async function getHomeTexts(): Promise<home[]> {
  return client.fetch(groq`*[_type == "home"]{
        _id,
        name,
        content,
    }`);
}

export async function getServices(): Promise<service[]> {
  return client.fetch(groq`*[_type == "services"] | order(position asc){
        _id,
        name,
        description,
        position,
       "image": image.asset->url,
    }`);
}

export async function getFeaturedWorks(): Promise<trabajo[]> {
  return client.fetch(groq`*[_type == "trabajos" && featured == true] | order(posicion asc){
        _id,
        titulo,
        cliente,
        posicion,
       "imagen": imagen.asset->url,
    }`);
}

export async function getServicesList(): Promise<
  Pick<service, "_id" | "name" | "position">[]
> {
  return client.fetch(groq`*[_type == "services"] | order(position asc){
        _id,
        name,
        position,
    }`);
}

export async function getService({ _id }: { _id: string }): Promise<service> {
  return client.fetch(groq`*[_type == "services" && _id == $serviceId][0]`, {
    serviceId: _id,
  });
}

export async function getTeamContent(): Promise<any> {
  const query = `*[_type == "team"][0]{
        title,
        description,
       "image": image.asset->url,
        audio {
          asset->{
          _id,
          url
        }
      },
        equitment[]->{
          name,
          image,
          size
        }
      }`;
  const data = await client.fetch(query);
  return data;
}

export async function getQuoteContent(): Promise<any> {
  const query = `*[_type == "quote"][0]{
        countries
      }`;
  const data = await client.fetch(query);
  return data;
}

export async function getProyectsByServiceId({
  _id,
}: {
  _id: string;
}): Promise<service | undefined> {
  return client.fetch(
    groq`*[_type == "services" && _id == $_id][0]{
      _id,
      name,
      descriptionFullArray,
      position,
      hashtag,
      tags,
    }`,
    { _id }
  );
}

export async function getTrabajosWithRecursos(): Promise<trabajo[]> {
  return client.fetch(groq`*[_type == "trabajos"] | order(posicion asc) {
    _id,
    titulo,
    cliente,
    servicio->{
      _id,
      name
    },
    posicion,
    "imagen": imagen.asset->url,
    recursos[] {
      _key,
      resourceType,
      link,
      file {
        asset->{
          url
        }
      }
    }
  }`);
}

export async function getRecursosByTrabajoId({
  _id,
}: {
  _id: string;
}): Promise<trabajo | null> {
  return client.fetch(
    groq`*[_type == "trabajos" && _id == $trabajoId][0] {
    _id,
    titulo,
    cliente,
    servicio->{
      _id,
      name
    },
    posicion,
    "imagen": imagen.asset->url,
    recursos[] {
      _key,
      resourceType,
      link,
      file {
        asset->{
          url
        }
      }
    }
  }`,
    { trabajoId: _id },
  );
}
