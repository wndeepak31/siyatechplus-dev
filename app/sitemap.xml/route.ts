import { NextResponse } from "next/server";

export function GET() {
  const baseUrl = "https://www.siyatechplus.com";

  const pages = [
    // Core pages
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",

    // Services – main
    "/services/web-app-development",
    "/services/crm-erp",
    "/services/automation",
    "/services/manufacturing-solutions",
    "/services/rfid-solutions",
    "/services/3d-rendering-and-visualisation",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
