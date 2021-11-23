import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import algoliasearch from 'algoliasearch/lite';

import {
    Configure,
    InstantSearch,
    connectHits,
    Highlight,
    connectStateResults,
    Index
} from 'react-instantsearch-dom';
import {
    searchVisible,
    federatedSearchVisible,
    recipesPage
} from '../../actions/visibility';

const RecipesSearch = () => {
    const dispatch = useDispatch();
    const searchClient = algoliasearch(window.appID, window.key);
    const { query } = useSelector(state => state.getQuery);
    return (
        <div>
            <Index indexName={window.recipeIndex}>
                <Configure
                    enablePersonalization={true}
                    hitsPerPage={1}
                    query={query}
                />
                <ResultsTitle>
                    <h3>We have found a recipe to please you</h3>
                </ResultsTitle>
                <CustomHitsModal />
                <ResultsTitle>
                    <button
                        className="recipes-button"
                        onClick={() => {
                            dispatch(searchVisible(false));
                            dispatch(recipesPage(true));
                            dispatch(federatedSearchVisible(false));
                        }}
                    >
                        Show More Recipes
                    </button>
                </ResultsTitle>
            </Index>
        </div>
    );
};

const HitsModal = ({ hits }) => {
    return (
        <div className="hits-wrapper">
            <ul className="hits-list hits-list-modal">
                {hits.map(hit => (
                    <li
                        key={hit.objectID}
                        className="hit-list recipes-list"
                        onClick={() => {
                            window.location.href = `${hit.url}`;
                        }}
                    >
                        <div className="image-wrapper">
                            <img src={hit.recipe_image} alt="" />
                        </div>
                        <p>{hit.SALES_UNIT}</p>
                        <div className="infos recipes">
                            <h3>
                                <Highlight hit={hit} attribute="recipe_title" />
                            </h3>
                            <br />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CustomHitsModal = connectHits(HitsModal);

const ResultsTitle = connectStateResults(({ searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? children : ''
);

export default RecipesSearch;
