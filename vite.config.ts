import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "reload-on-report-draft",
      configureServer(server) {
        const draft = path.resolve(__dirname, "drafts/phase-1-report.md");
        server.watcher.add(draft);
        server.watcher.on("change", (file) => {
          if (path.resolve(file) === draft) {
            server.ws.send({ type: "full-reload" });
          }
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
