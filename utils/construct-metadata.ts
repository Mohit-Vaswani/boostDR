import { Metadata } from "next";
// import { HOME_DOMAIN } from "../constants";

export function constructMetadata({
  title = `BoostDR`,
  description = `The #1 Database of Successful Solopreneurs.`,
  image = "https://BoostDR.xyz/og.jpg",
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: [
          {
            url: image,
          },
        ],
      }),
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),
      creator: "@hii_mohit",
    },
    icons,
    metadataBase: new URL("https://BoostDR.xyz"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}