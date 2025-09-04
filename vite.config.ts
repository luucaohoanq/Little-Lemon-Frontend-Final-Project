import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://little-lemon-frontend-final-proj-git-68231b-lcaohoanqs-projects.vercel.app",
});
