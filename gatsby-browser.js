import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// ++++++++++++++++++++++++++++++++++++++++++++++++
// for styling
import "./src/css/global.css"

// ++++++++++++++++++++++++++++

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});

// +++++++++++++++++++++++++++++

export const wrapRootElement = ({element}) =>{
    return <ApolloProvider client={client}>{element}</ApolloProvider>;
};