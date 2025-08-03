import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const applicationTables = {
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
