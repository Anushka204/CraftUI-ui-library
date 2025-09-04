import { component } from "./registry-components.ts";
import { hooks } from "./registry-hooks.ts";
import { lib } from "./registry-lib.ts";
import type { Registry } from "./schema.ts"; 
import { block } from "./registry-blocks.ts";

export const registry: Registry = [...component, ...hooks, ...lib, ...block];