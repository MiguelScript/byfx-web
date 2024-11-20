import { type SchemaTypeDefinition } from "sanity";
import socialNetworks from "./social-schema";
import services from "./services";
import home from "./home";
import team from "./team";
import teamBrand from "./team-brand";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [home, socialNetworks, services, team, teamBrand],
};
