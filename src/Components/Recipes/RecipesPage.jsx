import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useSelector } from 'react-redux';
import { Configure, Index } from 'react-instantsearch-dom';
import { CustomHitsRecipe } from '../Searchpage/Hits';

const RecipesPage = () => {
    const { query } = useSelector(state => state.getQuery);
    return (
        <div className="recipes-page">
            <h3>Recipe categories</h3>
            {query ? <p>For {query}</p> : ''}
            <Index indexName={window.recipeIndex}>
                <Configure
                    enablePersonalization={true}
                    hitsPerPage={20}
                    query={query}
                />
                <CustomHitsRecipe />
            </Index>
        </div>
    );
};

export default RecipesPage;
