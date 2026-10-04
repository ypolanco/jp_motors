import type { Metadata } from "next";
import { inCity, site } from "./site";

type PageMeta = {
  /** Service keyword, e.g. "Brake Repair". City is appended when configured. */
  keyword: string;
  description: string;
  path: string;
};

export function pageMetadata({ keyword, description, path }: PageMeta): Metadata {
  const title = inCity(keyword);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path, type: "website" },
  };
}
