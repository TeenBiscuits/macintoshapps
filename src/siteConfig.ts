import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Macintosh Apps",
  description: "Curated apps for macOS.",
  url: "https://macintoshapps.com",
  author: "Trevor Tyler Lee",
  locale: "en-CA",
};

export const NAV_LINKS: NavigationLinks = {
  submit: {
    path: "/submit",
    label: "Submit an app",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:trevortylerlee@gmail.com",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/trevortylerlee/macintoshapps",
  },
  twitter: {
    label: "Twitter",
    url: "https://twitter.com/boogerbuttcheek",
  },
};
