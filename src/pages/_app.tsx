import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { BlogContextProvider } from '@/providers/BlogContextProvider';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.graphqlUri,
    cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <BlogContextProvider>
                <Component {...pageProps} />
            </BlogContextProvider>
        </ApolloProvider>
    );
}
