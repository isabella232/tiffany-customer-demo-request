import React from 'react';
import { useDispatch } from 'react-redux';
import { connectMenu } from 'react-instantsearch-dom';
import { selectShop } from '../../actions/selectShop';

const MenuSelect = ({ items, currentRefinement, refine }) => {
    const dispatch = useDispatch();
    return (
        <div className="shop-search">
            <input
                list="brow"
                type="search"
                onChange={e => {
                    refine(e.currentTarget.value);
                    dispatch(selectShop(e.currentTarget.value.split('//')[0]));
                }}
                placeholder="Shop by location"
            />
            <datalist id="brow">
                {items.map(item => (
                    <option
                        key={item.label}
                        value={
                            item.isRefined
                                ? currentRefinement
                                : splitFuntion(item.value)
                        }
                    >
                        {/* {splitFuntion(item.label)} */}
                    </option>
                ))}
            </datalist>
        </div>
    );
};

const ShopDropdown = connectMenu(MenuSelect);

const ShopChoice = () => {
    return (
        <ShopDropdown
            attribute="storeNameShopNumberV2"
            limit={150}
            sortBy="label:asc"
            searchable={true}
        />
    );
};

const splitFuntion = string => {
    const words = string.split('//');
    return words[1];
};

export default ShopChoice;
