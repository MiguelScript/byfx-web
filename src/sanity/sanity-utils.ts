import { groq } from "next-sanity";
import { client } from "./lib/client";
import socialNetworks from "@/types/socialNetwork";
import service from "@/types/service";
import home from "@/types/home";

export async function getSocialNetworks(): Promise<socialNetworks[]> {
	return client.fetch(groq`*[_type == "social-networks"]{
        _id,
        name,
        url,
    }`);
}

export async function getSocialInfo(): Promise<socialNetworks[]> {
	return client.fetch(groq`*[_type == "social-networks" && showInHome == true] | order(posicion desc){
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
	return client.fetch(groq`*[_type == "cta"] | order(priority asc){
        _id,
        title,
        subtitle,
        highlight,
        highlight2,
        btnPrimary,
        btnSecondary,
        btnHeader,
    }`);
}
