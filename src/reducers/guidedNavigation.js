const initState = {
    guidedNavigation: false
};


const guidedNavigationTags = (state = initState, action) => {
    switch (action.type) {
        case 'GUIDEDNAVIGATION':
            return {
                ...state,
                guidedNavigation: action.payload
            };
        default:
            return { ...state };
    }
};

export default guidedNavigationTags