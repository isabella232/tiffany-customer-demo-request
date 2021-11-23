const initState = {
    shop : null
}

const selectShop  = (state = initState, action) => {
switch(action.type){
    case 'SELECTSHOP':
        return {
            ...state,
            shop: action.payload
        }
        default:
      return { ...state };

    
}
}

export default selectShop