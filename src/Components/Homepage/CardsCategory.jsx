import React from 'react';
import { useDispatch } from 'react-redux';
import { homepage, page } from '../../actions/visibility';

const CardsCategory = () => {
    const dispatch = useDispatch();
    return (
        <div className="category-wrapper">
            <div
                // key={hit.objectID}
                // variants={listItem}
                // initial="hidden"
                // animate="show"
                className="category-list"
                // onClick={() => {
                //     dispatch(productDetail(hit));
                //     dispatch(showModalPDP(true));
                //     dispatch(federatedSearchVisible(false));
                //     dispatch(searchVisible(true));
                // }}
            >
                <div
                    className="image-wrapper"
                    onClick={() => {
                        dispatch(page('Necklace'));
                        dispatch(homepage(false));
                    }}
                >
                    <img
                        src="https://media.tiffany.com/is/image/tiffanydm/QuickLink-646x646-pendants?$tile$&"
                        alt=""
                    />
                </div>
                <div className="infos">
                    <h3>Necklaces & Pendants</h3>
                    {/* <p>{hit.BRAND}</p> */}
                    {/* <p>
                                    {hit.PRICE_INT !== null
                                        ? `$ ${hit.price.shop_1}`
                                        : ''}
                                </p> */}
                </div>
            </div>
            <div
                // key={hit.objectID}
                // variants={listItem}
                // initial="hidden"
                // animate="show"
                className="category-list"
                // onClick={() => {
                //     dispatch(productDetail(hit));
                //     dispatch(showModalPDP(true));
                //     dispatch(federatedSearchVisible(false));
                //     dispatch(searchVisible(true));
                // }}
            >
                <div
                    className="image-wrapper"
                    onClick={() => {
                        dispatch(page('Earrings'));
                        dispatch(homepage(false));
                    }}
                >
                    <img
                        src="https://media.tiffany.com/is/image/tiffanydm/QuickLink-646x646-earrings?$tile$&"
                        alt=""
                    />
                </div>
                <div className="infos">
                    <h3>Earrings</h3>
                    {/* <p>{hit.BRAND}</p> */}

                    {/* <p>
                                    {hit.PRICE_INT !== null
                                        ? `$ ${hit.price.shop_1}`
                                        : ''}
                                </p> */}
                </div>
            </div>
            <div
                // key={hit.objectID}
                // variants={listItem}
                // initial="hidden"
                // animate="show"
                className="category-list"
                // onClick={() => {
                //     dispatch(productDetail(hit));
                //     dispatch(showModalPDP(true));
                //     dispatch(federatedSearchVisible(false));
                //     dispatch(searchVisible(true));
                // }}
            >
                <div
                    className="image-wrapper"
                    onClick={() => {
                        dispatch(page('Ring'));
                        dispatch(homepage(false));
                    }}
                >
                    <img
                        src="https://media.tiffany.com/is/image/tiffanydm/QuickLink-646x646-rings?$tile$&"
                        alt=""
                    />
                </div>
                <div className="infos">
                    <h3>Rings</h3>
                    {/* <p>{hit.BRAND}</p> */}

                    {/* <p>
                                    {hit.PRICE_INT !== null
                                        ? `$ ${hit.price.shop_1}`
                                        : ''}
                                </p> */}
                </div>
            </div>
            <div
                // key={hit.objectID}
                // variants={listItem}
                // initial="hidden"
                // animate="show"
                className="category-list"
                // onClick={() => {
                //     dispatch(productDetail(hit));
                //     dispatch(showModalPDP(true));
                //     dispatch(federatedSearchVisible(false));
                //     dispatch(searchVisible(true));
                // }}
            >
                <div
                    className="image-wrapper"
                    onClick={() => {
                        dispatch(page('Bracelet'));
                        dispatch(homepage(false));
                    }}
                >
                    <img
                        src="https://media.tiffany.com/is/image/tiffanydm/QuickLink-646x646-bracelets?$tile$&"
                        alt=""
                    />
                </div>
                <div className="infos">
                    <h3>Bracelets</h3>
                    {/* <p>{hit.BRAND}</p> */}

                    {/* <p>
                                    {hit.PRICE_INT !== null
                                        ? `$ ${hit.price.shop_1}`
                                        : ''}
                                </p> */}
                </div>
            </div>
        </div>
    );
};

export default CardsCategory;
