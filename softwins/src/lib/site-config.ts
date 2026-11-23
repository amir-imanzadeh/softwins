const rawSiteUrl = process.env.SITE_URL;

if (!rawSiteUrl) {
  throw new Error("SITE_URL environment variable is required");
}

const parsedUrl = new URL(rawSiteUrl);

if (parsedUrl.protocol !== "https:") {
  throw new Error("SITE_URL must use HTTPS");
}

export const siteConfig = {
  name: "Linux Sensor Monitor",
  description:
    "A Linux application for monitoring hardware sensors and system temperatures.",
  url: parsedUrl.origin,
  language: "en",
  version: "1.0.0",
  sourceCode: "https://github.com/example/linux-sensor-monitor",
  license: "MIT",
};
