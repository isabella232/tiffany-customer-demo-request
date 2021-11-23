import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { CarouselNoResults } from '../Homepage/Carousel';
import RecipesPage from '../Recipes/RecipesPage';

import {
    Pagination,
    Configure,
    QueryRuleCustomData,
    Index,
    Stats,
    SortBy,
    connectCurrentRefinements,
    InstantSearch,
    ExperimentalDynamicWidgets,
    HierarchicalMenu,
    connectStateResults
} from 'react-instantsearch-dom';

//COMPONENTS
import { CustomHits, ModalProduct } from './Hits';
import {
    CustomFilters,
    DynamicFacets,
    GuidedNavRefinementList
} from './Filters';
import CustomSearchBox from './SearchBox';
import VirtualSearchBox from './VirtualSearchBox';
import ProductDetails from '../ProductsDetails/ProductsDetails';
import Banner from './banner';
import CustomSuggestions from './Suggestions';
import FederatedSearch from '../Federated Search/FederatedSearch';
import { showModalPDP } from '../../actions/productDetail';
import { federatedSearchVisible } from '../../actions/visibility';

// UNIQBY LIB
import uniqBy from 'lodash.uniqby';
import { getQuery } from '../../actions/getQuery';

const SearchResults = () => {
    const searchClient = algoliasearch(window.appID, window.key);

    // REDUX STATE & ACTIONS
    const dispatch = useDispatch();
    const {
        searchVisible,
        catTwo,
        catOne,
        catMens,
        catKids,
        homepage,
        recipesPage
    } = useSelector(state => state.visibility);
    const federatedvisble = useSelector(
        state => state.visibility.federatedSearchVisible
    );

    const { query } = useSelector(state => state.getQuery);
    const { showModal } = useSelector(state => state.productDetail);
    const { persona } = useSelector(state => state.selectedPersona);
    const { guidedNavigation } = useSelector(state => state.selectedPersona);

    // REACT STATE
    const [filterAnim, setFilterAnim] = useState(true);
    const [isDynamicFactesOn, setIsDynamicFactesOn] = useState(false);

    return (
        <div className="searchResult-wrapper">
            {catOne ||
            catTwo ||
            catMens ||
            catKids ||
            homepage ||
            recipesPage ? (
                <div
                    className={`container-federated 
                ${federatedvisble ? 'active' : 'hidden'}`}
                >
                    <div
                        onClick={e => {
                            if (e.target === e.currentTarget) {
                                dispatch(federatedSearchVisible(false));
                                dispatch(getQuery(''));
                            }
                        }}
                    >
                        <InstantSearch
                            searchClient={searchClient}
                            indexName={window.index}
                            indexId="categoryPage"
                        >
                            <VirtualSearchBox />
                            <FederatedSearch />
                        </InstantSearch>
                        {/* <Configure query="" /> */}
                    </div>
                </div>
            ) : null}
            <div
                className={`container ${
                    searchVisible || catOne || catTwo || recipesPage || catKids
                        ? 'active'
                        : 'hidden'
                }`}
            >
                <QueryRuleCustomData
                    transformItems={items => {
                        const match = items.find(data =>
                            Boolean(data.redirect)
                        );
                        if (match && match.redirect) {
                            window.location.href = match.redirect;
                        }
                        return [];
                    }}
                >
                    {() => null}
                </QueryRuleCustomData>
                <div className="search-panel">
                    {/* <Index indexName={window.indexSugg} indexId="suggestions">
                        <CustomSuggestions attribute="title" />
                    </Index> */}
                    <Banner />
                    {!recipesPage ? (
                        <>
                            <div className="searchPanel-results">
                                {catOne ? (
                                    <Configure
                                        userToken={persona}
                                        filters="categories.lvl0:'drinks'"
                                        enablePersonalization={true}
                                        hitsPerPage={21}
                                    />
                                ) : (
                                    ''
                                )}
                                {catTwo ? (
                                    <Configure
                                        userToken={persona}
                                        filters="categories.lvl0:'Fresh food bakery'"
                                        enablePersonalization={true}
                                        hitsPerPage={21}
                                    />
                                ) : (
                                    ''
                                )}

                                {/* {searchVisible ? ( <Configure
                                userToken={persona}
                                enablePersonalization={true}
                                hitsPerPage={21}
                                query={query}
                            />): ('')} */}
                                <FilterBtn
                                    filterAnim={filterAnim}
                                    setFilterAnim={setFilterAnim}
                                />
                                <CustomFilters
                                    filterAnim={filterAnim}
                                    isDynamicFactesOn={isDynamicFactesOn}
                                    setIsDynamicFactesOn={setIsDynamicFactesOn}
                                />
                                <div className="hits-panel-wrapper">
                                    <Configure
                                        userToken={persona}
                                        enablePersonalization={true}
                                        query={query}
                                        hitsPerPage={21}
                                    />
                                    <Results>
                                        <GuidedNavRefinementList
                                            attribute="flat_categories"
                                            limit={5}
                                        />
                                        <SortAndStat />
                                        {!guidedNavigation ? (
                                            <CustomCurrentRefinements
                                                transformItems={items =>
                                                    items.filter(
                                                        item =>
                                                            item.attribute !==
                                                            'price'
                                                    )
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}
                                        <CustomHits />
                                    </Results>
                                </div>
                            </div>
                            <ModalProduct />
                            <div className="pagination">
                                <Pagination />
                            </div>
                        </>
                    ) : (
                        <RecipesPage />
                    )}
                </div>
            </div>
        </div>
    );
};

const SortAndStat = () => {
    return (
        <div className="sort-and-stat">
            <div>
                <Stats />
                <CustomClearRefinements />
            </div>
            <SortBy
                defaultRefinement={window.index}
                items={[
                    {
                        value: window.index,
                        label: 'Relevancy'
                    },
                    {
                        value: window.index_desc,
                        label: 'Price Desc.'
                    },
                    {
                        value: window.index_asc,
                        label: 'Price Asc.'
                    }
                    // {
                    //     value: window.index_pop,
                    //     label: 'Popularity'
                    // }
                ]}
            />
        </div>
    );
};

const ClearRefinements = ({ items, refine }) => (
    <a
        className="clearRefinement-btn"
        onClick={() => refine(items)}
        disabled={!items.length}
    >
        Clear all refinements
    </a>
);

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);

const FilterBtn = ({ filterAnim, setFilterAnim }) => {
    return (
        <div
            className="filterBtn"
            onClick={() => {
                setFilterAnim(!filterAnim);
            }}
        >
            <p>NAVIGATION & FILTERS</p>
            {filterAnim ? <p>-</p> : <p>+</p>}
        </div>
    );
};

const CurrentRefinements = ({ items, refine }) => {
    const unique = uniqBy(items, 'currentRefinement');
    return (
        <ul className="refinement-content">
            {unique.map(item => (
                <li className="refinement-item" key={item.label}>
                    {item.items ? (
                        <React.Fragment>
                            {/* <h3>{item.label}</h3> */}
                            <ul className="refinement-results">
                                {item.items.map(nested => (
                                    <li key={nested.label}>
                                        <a
                                            className="refinement-filter"
                                            href="#"
                                            onClick={event => {
                                                event.preventDefault();
                                                refine(nested.value);
                                            }}
                                        >
                                            {nested.label.includes('>')
                                                ? nested.label.split('>')[1]
                                                : nested.label}
                                            <span
                                                onClick={() => {
                                                    refine(item.value);
                                                }}
                                            >
                                                X
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ) : (
                        <>
                            <a
                                className="refinement-filter"
                                href="#"
                                onClick={event => {
                                    event.preventDefault();
                                    refine(item.value);
                                }}
                            >
                                {item.attribute === 'PRICE_INT' ? (
                                    <p>{item.label}</p>
                                ) : (
                                    <p>{item.currentRefinement}</p>
                                )}
                                <span
                                    className="close-refinment"
                                    onClick={() => {
                                        refine(item.value);
                                    }}
                                >
                                    X
                                </span>
                            </a>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

const Results = connectStateResults(
    ({ searchState, searchResults, children }) =>
        searchResults && searchResults.nbHits !== 0 ? (
            children
        ) : (
            <div className="no-results-hits">
                <h3>NO RESULTS FOUND for {searchState.query}.</h3>
                <p>You can look at our product suggestion below </p>
                <CarouselNoResults />
            </div>
        )
);

export default SearchResults;
