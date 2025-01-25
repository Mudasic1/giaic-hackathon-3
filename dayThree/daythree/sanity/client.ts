import { createClient } from "next-sanity";

const sanityClient = createClient({
    projectId: "8p9t123f",
    dataset: "production",
    apiVersion: '2025-01-13',
    useCdn: true,
});

export default sanityClient;