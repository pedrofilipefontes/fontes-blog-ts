/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        emotion: true,
    },
    env: {
        graphqlUri: process.env.CONTENTFUL_GRAPHQL_URI,
    },
};

module.exports = nextConfig;
