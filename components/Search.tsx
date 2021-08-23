import React, {Fragment} from 'react'
import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
} from 'react-instantsearch-dom';
import {CustomSearchBox} from "./CustomSearchBox";
import {SearchResults} from "./SearchResults";

const searchClient = algoliasearch(
    process.env.appId as string,
    process.env.apiKey as string
);

export const Search = () => {
    return <Fragment>
        <InstantSearch
            indexName={process.env.indexName as string}
            searchClient={searchClient}
        >
            <CustomSearchBox />
            <SearchResults/>
        </InstantSearch>
    </Fragment>
}
