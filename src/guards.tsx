import type { Player } from "./types";

export function textIsPlayer(text: unknown): text is Player {
  return typeof text === "string" && ["X", "O"].includes(text);
}
