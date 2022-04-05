import { writable } from "svelte/store";

export const history = writable([] as { prev: string; output: string }[]);
export const prevOutput = writable("");
export const output = writable("");
