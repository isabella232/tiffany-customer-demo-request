const initState = {
    persona: null,
    guidedNavigation: false
};

const selectedPersona = (state = initState, action) => {
    switch (action.type) {
        case 'SELECTPERSONA':
            return {
                ...state,
                persona: action.payload
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

export default selectedPersona;
