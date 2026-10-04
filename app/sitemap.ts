import type { MetadataRoute } from "next";
import { navLinks, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((l) => ({
    url: new URL(l.href, site.url).toString(),
    changeFrequency: l.href === "/youtube" ? "weekly" : "monthly",
    priority: l.href === "/" ? 1 : ["/brakes", "/maintenance", "/contact"].includes(l.href) ? 0.9 : 0.7,
  }));
}
