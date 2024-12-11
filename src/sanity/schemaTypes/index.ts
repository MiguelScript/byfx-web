import { type SchemaTypeDefinition } from "sanity";
import socialNetworks from "./social-schema";
import services from "./services";
import home from "./home";
import team from "./team";
import teamBrand from "./team-brand";
import quote from "./quote";
import proyects from "./proyects";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [home, socialNetworks, quote, team, teamBrand, services, proyects],
};
