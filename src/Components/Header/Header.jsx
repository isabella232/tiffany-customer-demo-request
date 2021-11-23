import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENT IMPORT
import logo from '../../Assets/Images/logo.png';
import CustomSearchBox from '../Searchpage/SearchBox';
import SelectPersona from './Persona';
import ShopChoice from './ShopChoice';
import {
    searchVisible,
    federatedSearchVisible,
    catOne,
    catTwo,
    recipesPage
} from '../../actions/visibility';
import { getQuery } from '../../actions/getQuery';
import { guidedNavigation } from '../../actions/guidedNavigation';

const Header = () => {
    const federatedSearchVisibleSelector = useSelector(
        state => state.visibility.federatedSearchVisible
    );

    const dispatch = useDispatch();
    const homepageSelector = useSelector(state => state.visibility.homepage);
    const catTwoSelector = useSelector(state => state.visibility.catTwo);
    const catOneSelector = useSelector(state => state.visibility.catOne);
    const recipesPageSelector = useSelector(
        state => state.visibility.recipesPage
    );
    const searchVisibleSelector = useSelector(
        state => state.visibility.searchVisible
    );
    const { showModal } = useSelector(state => state.productDetail);

    if (federatedSearchVisibleSelector || showModal) {
        document.body.classList.add('stop-scrolling');
    } else {
        document.body.classList.remove('stop-scrolling');
    }
    return (
        <header className="header">
            <div className="header__up">
                <ul>
                    <li>
                        <ShopChoice />
                        <svg
                            className="shopChoice__icon"
                            viewBox="0 0 38 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 0C8.5 0 0 8.5 0 19C0 38 19 50 19 50C19 50 38 38 38 19C38 8.5 29.5 0 19 0ZM19 26C15.1 26 12 22.9 12 19C12 15.1 15.1 12 19 12C22.9 12 26 15.1 26 19C26 22.9 22.9 26 19 26Z"
                                fill="black"
                            />
                        </svg>
                    </li>
                    <li>
                        <p>Help center</p>
                    </li>
                    <li className="register">Register</li>
                    <li>
                        <SelectPersona />
                        <svg
                            width="20"
                            height="13"
                            viewBox="0 0 20 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="chevron-down"
                        >
                            <path
                                id="Vector"
                                d="M10 8.61406L17.4086 0.486226C17.9619 -0.120799 18.9038 -0.165534 19.5125 0.386306C20.1211 0.938146 20.166 1.87759 19.6127 2.48462L11.102 11.8215C10.5111 12.4698 9.48888 12.4698 8.89796 11.8215L0.387333 2.48462C-0.165974 1.87759 -0.12112 0.938146 0.487519 0.386306C1.09616 -0.165534 2.0381 -0.120799 2.59141 0.486226L10 8.61406Z"
                                fill="black"
                            />
                        </svg>
                    </li>
                    <li>
                        <p>Cart</p>
                        <svg
                            width="21"
                            height="19"
                            viewBox="0 0 21 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.4474 3.39174C20.321 3.22319 20.1314 3.13892 19.9207 3.13892H5.5514L5.0668 0.926636C5.0036 0.610596 4.7297 0.399902 4.41366 0.399902H1.27432C0.895071 0.399902 0.600098 0.694863 0.600098 1.07411C0.600098 1.45336 0.895071 1.74833 1.27432 1.74833H3.88693L6.62594 14.2635C6.68915 14.5796 6.96305 14.7903 7.27909 14.7903H17.9191C18.2984 14.7903 18.5933 14.4953 18.5933 14.1161C18.5933 13.7368 18.2984 13.4418 17.9191 13.4418H7.8269L7.48978 11.9038H18.2562C18.5723 11.9038 18.8462 11.6931 18.9094 11.377L20.5949 3.96062C20.616 3.77099 20.5739 3.5603 20.4474 3.39174Z"
                                fill="black"
                            />
                            <path
                                d="M16.5285 18.7724C17.4129 18.7724 18.1298 18.0554 18.1298 17.1711C18.1298 16.2867 17.4129 15.5698 16.5285 15.5698C15.6442 15.5698 14.9272 16.2867 14.9272 17.1711C14.9272 18.0554 15.6442 18.7724 16.5285 18.7724Z"
                                fill="black"
                            />
                            <path
                                d="M8.71162 18.7724C9.59598 18.7724 10.3129 18.0554 10.3129 17.1711C10.3129 16.2867 9.59598 15.5698 8.71162 15.5698C7.82726 15.5698 7.11035 16.2867 7.11035 17.1711C7.11035 18.0554 7.82726 18.7724 8.71162 18.7724Z"
                                fill="black"
                            />
                        </svg>
                    </li>
                </ul>
            </div>
            <div className="header-wrapper">
                <div
                    className="list-img-wrapper"
                    onClick={() => {
                        dispatch(federatedSearchVisible(false));
                        dispatch(getQuery(''));
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="logo"
                        onClick={() => {
                            dispatch(catOne(false));
                            dispatch(searchVisible(false));
                            dispatch(catTwo(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(guidedNavigation(false));
                            dispatch(getQuery(''));
                            dispatch(recipesPage(false));
                        }}
                    />
                </div>
                <div
                    className="search-wrapper"
                    onClick={e => {
                        if (
                            (homepageSelector ||
                                catOneSelector ||
                                catTwoSelector) &&
                            !recipesPageSelector
                        ) {
                            dispatch(federatedSearchVisible(true));
                        }
                        if (searchVisibleSelector) {
                            dispatch(federatedSearchVisible(false));
                        }
                    }}
                >
                    <CustomSearchBox />
                </div>
            </div>
            <div className="header-down">
                <ul>
                    <li
                        onClick={() => {
                            dispatch(catOne(true));
                            dispatch(searchVisible(false));
                            dispatch(catTwo(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                            dispatch(recipesPage(false));
                        }}
                    >
                        Drinks
                    </li>
                    <li
                        onClick={() => {
                            dispatch(catOne(false));
                            dispatch(searchVisible(false));
                            dispatch(catTwo(true));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                            dispatch(recipesPage(false));
                        }}
                    >
                        Fresh Food & Bakery
                    </li>
                    <li
                        className="design"
                        onClick={() => {
                            dispatch(catOne(false));
                            dispatch(searchVisible(false));
                            dispatch(catTwo(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                            dispatch(recipesPage(false));
                        }}
                    >
                        Offers
                    </li>
                    <li
                        onClick={() => {
                            dispatch(catOne(false));
                            dispatch(searchVisible(false));
                            dispatch(catTwo(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                            dispatch(recipesPage(false));
                        }}
                    >
                        Favourites
                    </li>
                    <li
                        onClick={() => {
                            dispatch(catOne(false));
                            dispatch(searchVisible(false));
                            dispatch(catTwo(false));
                            dispatch(recipesPage(true));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                        }}
                    >
                        Our recipes
                    </li>
                    <li>Delivery Pass</li>
                    <li>RollBack</li>
                    <li>Bonfire Night</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
