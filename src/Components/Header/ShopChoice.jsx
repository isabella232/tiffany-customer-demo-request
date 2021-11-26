import React from 'react';
import { useDispatch } from 'react-redux';
import { connectMenu } from 'react-instantsearch-dom';
import { selectShop } from '../../actions/selectShop';

const MenuSelect = ({ items, currentRefinement, refine }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <input
                list="brow"
                onChange={e => {
                    refine(e.currentTarget.value);
                    dispatch(selectShop(e.currentTarget.value));
                }}
            />
            <datalist id="brow">
                <option value="Shop by location" />
                {items.map(item => (
                    <option
                        key={item.label}
                        value={item.isRefined ? currentRefinement : item.value}
                    >
                        {item.label}
                    </option>
                ))}
            </datalist>
        </div>
    );
};

const ShopDropdown = connectMenu(MenuSelect);

const ShopChoice = () => {
    return (
        <ShopDropdown attribute="storeName" limit={150} sortBy="label:asc" />
    );
};

export default ShopChoice;

{
    /* <select
value={currentRefinement || ''}
onChange={event => {
    refine(event.currentTarget.value);
    dispatch(selectShop(event.currentTarget.value));
}}
className="shopSelection"
>
<input list="shops" name="shopsName" />
<datalist id="shops">
    <option value="">Shop by location</option>
    {items.map(item => (
        <option
            key={item.label}
            value={item.isRefined ? currentRefinement : item.value}
        >
            {item.label}
        </option>
    ))}
</datalist>
</select> */
}
