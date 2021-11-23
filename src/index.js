import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//REACT REDUX CONFIF
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/indexReducer';
import { Provider } from 'react-redux';

// DEV TOOL
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//CREATE STORE +IMPORT ALL REDUCER IN ONE
const store = createStore(
    rootReducer,
    composeEnchancer(applyMiddleware(thunk))
);

//CHANGE ME IF USING NEW INDEX
window.appID = 'T28VFYO9RS';
window.key = 'd51558b9d3daea110f05e8c1a7b65253';
window.index = 'Asda_v3';
window.recipeIndex = 'Asda_recipes';

//SORTBY
window.index_asc = 'Asda_v2_price_asc';
window.index_desc = 'Asda_v2_price_desc';

// QUERY SUGG
window.indexSugg = 'Asda_v2_query_suggestions';

// DESCRIPTION ABOUT HOW THE FOLLOWING VARIABLES ARE USED
// Please ensure you set your attributes in the following parts of the dashboard first:
// Facets, Facet Display, and any visual editor rules to change the facets
// If you don't see facet display, ask the internal dashboard team to make sure you have the favet ordering feature enabled

// ADD ATTRIBUTES FOR REFINEMENT LISTS TO THE ARRAY, IF NONE LEAVE ARRAY EMPTY
window.refinementListAttributes = ['BRAND', 'SKU_SIZE'];

// ADD ATTRIBUTE FOR PRICE, IF NONE LEAVE AS EMPTY STRING
window.priceAttribute = 'PRICE_INT';

// ADD ATTRIBUTE FOR HIERARCHY, IF NONE LEAVE AS EMPTY STRING
window.hierarchicalCategoriesAttribute = [
    'categories.lvl0',
    'categories.lvl1',
    'categories.lvl2',
    'categories.lvl3'
];

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
