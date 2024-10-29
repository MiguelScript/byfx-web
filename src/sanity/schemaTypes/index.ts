import { type SchemaTypeDefinition } from "sanity";
import socialNetworks from "./social-schema";
import services from "./services";
import home from "./home";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [home, socialNetworks, services],
};
