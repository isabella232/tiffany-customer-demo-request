export const selectShop = (value) => (dispatch) => {
    dispatch({
        type: 'SELECTSHOP',
        payload : value
    })
}