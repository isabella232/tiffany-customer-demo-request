export const selectStore = value => dispatch => {
    dispatch({
        type: 'SELECT_STORE',
        payload: value
    });
};
