import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch } from 'react-instantsearch-dom';
import { CustomHitsModal } from '../Searchpage/Hits';
import { useSelector } from 'react-redux';

const CustomCarousel = () => {
    const searchClient = algoliasearch(window.appID, window.key);
    const { persona } = useSelector(state => state.selectedPersona);
    return (
        <InstantSearch indexName={window.index} searchClient={searchClient}>
            <Configure
                hitsPerPage={8}
                userToken={persona}
                filters="PRICE_INT<5"
            />

            <CustomHitsModal />
        </InstantSearch>
    );
};

export default CustomCarousel;
