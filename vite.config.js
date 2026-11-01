import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/data/site.config.js";

function absoluteUrl(path) {
  const base = site.siteUrl.endsWith("/") ? site.siteUrl : `${site.siteUrl}/`;
  return new URL(path.replace(/^\//, ""), base).href;
}

function socialMetaPlugin() {
  return {
    name: "social-meta",
    transformIndexHtml(html) {
      const pageUrl = absoluteUrl("");
      const imageUrl = absoluteUrl("og-image.png");
      const title = site.meta.title;
      const description = site.meta.description;
      const tags = [
        `<title>${title}</title>`,
        `<meta name="description" content="${description}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:url" content="${pageUrl}" />`,
        `<meta property="og:title" content="${title}" />`,
        `<meta property="og:description" content="${description}" />`,
        `<meta property="og:image" content="${imageUrl}" />`,
        `<meta property="og:image:type" content="image/png" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:alt" content="Arpan and Lakshita's wedding invitation logo and celebration details" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${title}" />`,
        `<meta name="twitter:description" content="${description}" />`,
        `<meta name="twitter:image" content="${imageUrl}" />`,
        `<meta name="twitter:image:alt" content="Arpan and Lakshita's wedding invitation logo and celebration details" />`,
      ].join("\n    ");
      return html.replace("<!-- social-meta -->", tags);
    },
  };
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tailwindcss(), socialMetaPlugin()],
});
