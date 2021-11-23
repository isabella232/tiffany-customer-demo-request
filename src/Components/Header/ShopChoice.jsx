import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connectMenu } from 'react-instantsearch-dom';
import { selectShop } from '../../actions/selectShop';

const MenuSelect = ({ items, currentRefinement, refine }) => {
const dispatch = useDispatch();
return(
  <select
    value={currentRefinement || ''}
    onChange={
        (event) => {
            refine(event.currentTarget.value)
            dispatch(selectShop(event.currentTarget.value))
        }}
    className="shopSelection"
  >
    <option value="">Shop by location</option>
    {items.map(item => (
      <option
        key={item.label}
        value={item.isRefined ? currentRefinement : item.value}
      >
        {item.label}
      </option>
    ))}
  </select>
)};

const ShopDropdown = connectMenu(MenuSelect);

const ShopChoice = () => {
    return ( <ShopDropdown attribute="shop_availability"/> );
}
 
export default ShopChoice;