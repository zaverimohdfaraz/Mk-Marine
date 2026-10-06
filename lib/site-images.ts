// Centralized marine photography for the public website.
//
// All images are free-to-use under the Unsplash License
// (https://unsplash.com/license) — free for commercial use, no
// permission or attribution required. Loaded live from
// images.unsplash.com, so an internet connection is needed for them
// to render.
//
// To swap in your own photography later, just replace the `src`
// value for the relevant key below — every page pulls from this one
// file, so there's a single place to update.

function unsplash(id: string, params = "q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/${id}?${params}`;
}

export const siteImages = {
  heroContainerShip: {
    src: unsplash("photo-1634638021403-70f46d19fc02", "w=1800&q=80&auto=format&fit=crop"),
    alt: "Container ship at sea",
  },
  cargoShipBow: {
    src: unsplash("photo-1573014089159-8ee711dc5a8e", "w=1200&q=80&auto=format&fit=crop"),
    alt: "View from a cargo vessel's bridge crossing open ocean",
  },
  portCrane: {
    src: unsplash("photo-1560964828-7f4d3a91697a", "w=1200&q=80&auto=format&fit=crop"),
    alt: "Shipping containers and cranes at a port terminal",
  },
  industrialValves: {
    src: unsplash("photo-1744113627248-8c9ba859be91", "w=1200&q=80&auto=format&fit=crop"),
    alt: "Industrial pipework and valves",
  },
  aerialCargoShip: {
    src: unsplash("photo-1724597500306-a4cbb7d1324e", "w=1600&q=80&auto=format&fit=crop"),
    alt: "Aerial view of a container ship navigating open ocean",
  },
  largeCargoShip: {
    src: unsplash("photo-1722413890417-67b8ce3f4005", "w=1600&q=80&auto=format&fit=crop"),
    alt: "Large cargo ship loaded with containers at sea",
  },
} as const;

export type SiteImageKey = keyof typeof siteImages;
