export const guidedNavigation = value => dispatch => {
    dispatch({
        type: 'GUIDEDNAVIGATION',
        payload: value
    });
};
