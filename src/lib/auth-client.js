import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://suncart-mall.vercel.app",
});
