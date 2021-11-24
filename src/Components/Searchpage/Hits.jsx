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
                                <img src={hit.fullImage} alt="" />
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
                                    <Highlight hit={hit} attribute="Title" />
                                </h3>
                                <p>{hit.BRAND}</p>

                                {/* <p>
                                    {hit.PRICE_INT !== null
                                        ? `$ ${hit.price.shop_1}`
                                        : ''}
                                </p> */}
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
                            <img src={hit.fullImage} alt="" />
                        </div>
                        <p>{hit.SALES_UNIT}</p>
                        <div className="infos">
                            <h3>
                                <Highlight hit={hit} attribute="Title" />
                            </h3>
                            {/* <p>{hit.BRAND}</p> */}
                            {/* <p>
                                {hit.price !== undefined
                                    ? `$ ${hit.price.shop_1}`
                                    : ''}
                            </p> */}
                            <div className="infos__card-svg">
                                <svg
                                    width="20"
                                    height="25"
                                    viewBox="0 0 20 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.0001 17.7083C9.97272 17.7084 9.94562 17.703 9.92034 17.6925C9.89506 17.682 9.8721 17.6667 9.85277 17.6473L3.07631 10.8708C2.15096 9.94569 1.62515 8.69466 1.61171 7.38624C1.59828 6.07781 2.0983 4.81625 3.00446 3.8723C3.91062 2.92835 5.15071 2.37724 6.45859 2.33724C7.76648 2.29724 9.03793 2.77153 10.0001 3.65833C10.9493 2.78373 12.2 2.31008 13.4904 2.33646C14.7809 2.36285 16.0112 2.88723 16.9239 3.7999V3.7999C17.8615 4.73758 18.3883 6.00935 18.3883 7.33543C18.3883 8.66151 17.8615 9.93328 16.9239 10.871L10.1474 17.6473C10.1281 17.6667 10.1051 17.682 10.0798 17.6925C10.0545 17.703 10.0274 17.7084 10.0001 17.7083V17.7083ZM6.61186 2.75208C5.70537 2.7521 4.81925 3.02091 4.06554 3.52452C3.31183 4.02814 2.72439 4.74394 2.37748 5.58142C2.03058 6.4189 1.93981 7.34043 2.11664 8.2295C2.29347 9.11856 2.72996 9.93523 3.37092 10.5762L10.0001 17.2054L16.6293 10.5762C17.4888 9.71665 17.9717 8.55086 17.9717 7.33529C17.9717 6.11972 17.4888 4.95394 16.6293 4.0944V4.0944C16.2036 3.66879 15.6984 3.33119 15.1423 3.10085C14.5862 2.87052 13.9902 2.75197 13.3883 2.75197C12.7865 2.75197 12.1905 2.87052 11.6344 3.10085C11.0783 3.33119 10.573 3.66879 10.1474 4.0944C10.1084 4.13347 10.0554 4.15541 10.0001 4.15541C9.94487 4.15541 9.89188 4.13347 9.85281 4.0944C9.42819 3.66747 8.9231 3.32901 8.36679 3.0986C7.81048 2.86819 7.21399 2.75041 6.61186 2.75208V2.75208ZM13.1251 9.58333C13.1251 9.52808 13.1031 9.47509 13.0641 9.43602C13.025 9.39695 12.972 9.375 12.9168 9.375H7.08342C7.02816 9.375 6.97517 9.39695 6.9361 9.43602C6.89703 9.47509 6.87509 9.52808 6.87509 9.58333C6.87509 9.63859 6.89703 9.69158 6.9361 9.73065C6.97517 9.76972 7.02816 9.79167 7.08342 9.79167H12.9168C12.972 9.79167 13.025 9.76972 13.0641 9.73065C13.1031 9.69158 13.1251 9.63859 13.1251 9.58333ZM10.2084 12.5V6.66667C10.2084 6.61141 10.1865 6.55842 10.1474 6.51935C10.1083 6.48028 10.0553 6.45833 10.0001 6.45833C9.94483 6.45833 9.89184 6.48028 9.85277 6.51935C9.8137 6.55842 9.79175 6.61141 9.79175 6.66667V12.5C9.79175 12.5553 9.8137 12.6082 9.85277 12.6473C9.89184 12.6864 9.94483 12.7083 10.0001 12.7083C10.0553 12.7083 10.1083 12.6864 10.1474 12.6473C10.1865 12.6082 10.2084 12.5553 10.2084 12.5V12.5Z"
                                        fill="black"
                                        fill-opacity="0.43"
                                    />
                                </svg>
                            </div>
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
