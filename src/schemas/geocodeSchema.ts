import { z } from "zod";

const LocalNamesSchema = z
  .object({
    ascii: z.string().optional(),
    feature_name: z.string().optional(),
  })
  .catchall(z.string());

export const LocationSchema = z.object({
  name: z.string(),
  local_names: LocalNamesSchema.optional(),
  lat: z.number(),
  lon: z.number(),
  country: z.string(),
  state: z.string().optional(),
});

export const LocationsSchema = z.array(LocationSchema);
