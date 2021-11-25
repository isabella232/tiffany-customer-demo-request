import { combineReducers } from "redux";
import selectedStore from "./selectedOption";
import visibility from "./searchvisible";
import getQuery from "./getQuery";
import productDetail from "./productDetail";
import selectShop from "./selectShop";
import guidedNavigationTags from "./guidedNavigation";

const rootReducer = combineReducers({
    selectedStore: selectedStore,
    visibility: visibility,
    getQuery: getQuery,
    productDetail: productDetail,
    selectShop: selectShop,
    guidedNavigationTags : guidedNavigationTags
});

export default rootReducer;
