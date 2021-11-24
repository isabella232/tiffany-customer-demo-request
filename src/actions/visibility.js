export const searchVisible = value => dispatch => {
    dispatch({
        type: 'SEARCHVISIBLE',
        payload: value
    });
};
export const federatedSearchVisible = value => dispatch => {
    dispatch({
        type: 'FEDERATEDSEARCH_VISIBLE',
        payload: value
    });
};
export const page = value => dispatch => {
    dispatch({
        type: 'PAGE',
        payload: value
    });
};
// export const catTwo = value => dispatch => {
//     dispatch({
//         type: 'CAT_TWO',
//         payload: value
//     });
// };
// export const catThree = value => dispatch => {
//     dispatch({
//         type: 'CAT_THREE',
//         payload: value
//     });
// };
// export const catFour = value => dispatch => {
//     dispatch({
//         type: 'CAT_FOUR',
//         payload: value
//     });
// };

export const homepage = value => dispatch => {
    dispatch({
        type: 'HOMEPAGE',
        payload: value
    });
};
export const recipesPage = value => dispatch => {
    dispatch({
        type: 'RECIPES_PAGE',
        payload: value
    });
};
