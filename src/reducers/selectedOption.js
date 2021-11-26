const initState = {
    store: null,
    guidedNavigation: false
};

const selectedStore = (state = initState, action) => {
    switch (action.type) {
        case 'SELECT_STORE':
            return {
                ...state,
                store: action.payload
            };
        case 'GUIDEDNAVIGATION':
            return {
                ...state,
                guidedNavigation: action.payload
            };
        default:
            return { ...state };
    }
};

export default selectedStore;
