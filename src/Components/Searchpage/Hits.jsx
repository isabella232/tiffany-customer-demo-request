import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Highlight, SortBy, Stats, connectHits } from 'react-instantsearch-dom';
import { showModalPDP, productDetail } from '../../actions/productDetail';
import {
    federatedSearchVisible,
    searchVisible
} from '../../actions/visibility';
import ProductDetails from '../ProductsDetails/ProductsDetails';

import { motion, AnimateSharedLayout } from 'framer-motion';

// MAIN SEARCH RESULT PAGE + FEDERATED
const Hits = ({ hits }) => {
    const dispatch = useDispatch();
    const listItem = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2
            }
        }
    };
    return (
        <AnimateSharedLayout>
            <div className="hits-wrapper">
                <ul className="hits-list">
                    {hits.map(hit => (
                        <motion.li
                            key={hit.objectID}
                            variants={listItem}
                            initial="hidden"
                            animate="show"
                            className="hit-list"
                            onClick={() => {
                                dispatch(productDetail(hit));
                                dispatch(showModalPDP(true));
                                dispatch(federatedSearchVisible(false));
                                dispatch(searchVisible(true));
                            }}
                        >
                            <div className="image-wrapper">
                                <img src={hit.IMAGE} alt="" />
                            </div>
                            <div className="weight__wrapper">
                                <svg
                                    viewBox="0 0 35 23"
                                    className="Hit-list__icon"
                                >
                                    <path
                                        id="asda_fav_list_1"
                                        d="M7.02 2C7 2.344 7 2.685 7 3h6c0-.315 0-.656-.02-1H18c1 0 2 .784 2 1.667v17.667C20 22.167 19 23 18 23H2c-1 0-2-.833-2-1.666V3.667C0 2.833 1 2 2 2h5.02zM12 2H8c0-1 1-2 2-2s2 1 2 2zM7 17v2h10v-2H7zm-4-5v2h2v-2H3zm0-5v2h2V7H3zm0 10v2h2v-2H3zm4-5v2h10v-2H7zm0-5v2h10V7H7z"
                                    ></path>
                                    <path
                                        id="asda_fav_list_2"
                                        d="M24 21c-1.818-1.8-10-7.65-10-12.6C14 5.7 15.818 3 19 3c2 0 4 .82 5 3.295C25 3.82 27 3 29 3c3.182 0 5 2.7 5 5.4 0 4.95-8.182 10.8-10 12.6z"
                                    ></path>
                                    <g fill="none">
                                        <use fill="#3d3d3d"></use>
                                        <use
                                            fill="#FFF"
                                            stroke="#3d3d3d"
                                            strokeWidth="1.9"
                                        ></use>
                                    </g>
                                </svg>
                                <p className="weight__text">{hit.SALES_UNIT}</p>
                            </div>
                            <div className="infos">
                                <h3>
                                    <Highlight
                                        hit={hit}
                                        attribute="DISPLAY_NAME"
                                    />
                                </h3>
                                <p>{hit.BRAND}</p>

                                <p>
                                    {hit.PRICE_INT !== null
                                        ? `£ ${hit.PRICE_INT}`
                                        : ''}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </AnimateSharedLayout>
    );
};

// PDP
const HitsModal = ({ hits }) => {
    const dispatch = useDispatch();

    return (
        <div className="hits-wrapper">
            <ul className="hits-list hits-list-modal">
                {hits.map(hit => (
                    <li
                        key={hit.objectID}
                        className="hit-list"
                        onClick={() => {
                            dispatch(productDetail(hit));
                            dispatch(showModalPDP(true));
                            dispatch(federatedSearchVisible(false));
                            dispatch(searchVisible(true));
                        }}
                    >
                        <div className="image-wrapper">
                            <img src={hit.IMAGE} alt="" />
                        </div>
                        <p>{hit.SALES_UNIT}</p>
                        <div className="infos">
                            <h3>
                                <Highlight hit={hit} attribute="DISPLAY_NAME" />
                            </h3>
                            <p>{hit.BRAND}</p>
                            <p>
                                {hit.PRICE_INT !== null
                                    ? `£ ${hit.PRICE_INT}`
                                    : ''}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ModalProduct = () => {
    const dispatch = useDispatch();
    const { showModal } = useSelector(state => state.productDetail);
    return (
        <div>
            {showModal ? (
                <div
                    className="modal-bg"
                    onClick={e => {
                        if (e.target === e.currentTarget) {
                            dispatch(showModalPDP(false));
                        }
                    }}
                >
                    <motion.div className="modal-wrapper fadeModal">
                        <ProductDetails />
                    </motion.div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

const HitsRecipe = ({ hits }) => {
    const { query } = useSelector(state => state.getQuery);
    if (hits) {
        return (
            <div className="recipes-list">
                <ul className="">
                    {hits.map(hit => (
                        <li
                            key={hit.objectID}
                            className=""
                            onClick={() => {
                                window.open(`${hit.url}`, '_blank');
                            }}
                        >
                            <div className="img-container">
                                <img src={hit.recipe_image} alt="" />
                            </div>
                            <p>{hit.SALES_UNIT}</p>
                            <div className="infos">
                                <h3>
                                    <Highlight
                                        hit={hit}
                                        attribute="recipe_title"
                                    />
                                </h3>
                                {hit.recipe_descriptioni.length < 100 ? (
                                    <p>{hit.recipe_descriptioni}</p>
                                ) : (
                                    <p>
                                        {hit.recipe_descriptioni.substring(
                                            0,
                                            100
                                        )}
                                        ...
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return <h1>Je n'ai pas de Hits {query}</h1>;
    }
};

const CustomHits = connectHits(Hits);
const CustomHitsModal = connectHits(HitsModal);
const CustomHitsRecipe = connectHits(HitsRecipe);

export { CustomHits, CustomHitsModal, ModalProduct, CustomHitsRecipe };
