// next-seo.config.js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Mi Proyecto",
  description: "Descripción de mi proyecto.",
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Mi Proyecto",
    description: "Descripción de mi proyecto.",
    images: [
      {
        url: "https://example.com/imagen.jpg",
        width: 800,
        height: 600,
        alt: "Imagen Alt",
      },
    ],
  },
  twitter: {
    handle: "@usuario",
    site: "@site",
    cardType: "summary_large_image",
  },
};
