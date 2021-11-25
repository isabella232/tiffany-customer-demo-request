const initState = {
    searchVisible: null,
    federatedSearchVisible: false,
    page: null,
    homepage: true,
    recipesPage: false,
    getShowModal: false
};

const visibility = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCHVISIBLE':
            return {
                ...state,
                searchVisible: action.payload
            };
        case 'FEDERATEDSEARCH_VISIBLE':
            return {
                ...state,
                federatedSearchVisible: action.payload
            };
        case 'PAGE':
            return {
                ...state,
                page: action.payload
            };
        case 'HOMEPAGE':
            return {
                ...state,
                homepage: action.payload
            };
        case 'RECIPES_PAGE':
            return {
                ...state,
                recipesPage: action.payload
            };
        case 'SHOW_MODAL':
            return {
                ...state,
                getShowModal: action.payload
            };
        default:
            return { ...state };
    }
};

export default visibility;
