import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
	preset: "static",
	serveStatic: true,
	prerender: {
		crawlLinks: true,
		routes: ["/"],
	},
});