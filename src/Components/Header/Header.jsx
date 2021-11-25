import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENT IMPORT
import logo from '../../Assets/Images/logo.png';
import CustomSearchBox from '../Searchpage/SearchBox';
import SelectStore from './SelectStore';
import ShopChoice from './ShopChoice';
import {
    searchVisible,
    federatedSearchVisible,
    page,
    recipesPage
} from '../../actions/visibility';
import { getQuery } from '../../actions/getQuery';
import { guidedNavigation } from '../../actions/guidedNavigation';

// Import Assets
import headerRight from '../../Assets/Images/header-right.png';

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

    // Use State to search modal
    const [searchModal, setSearchModal] = useState(false);

    if (federatedSearchVisibleSelector || showModal) {
        document.body.classList.add('stop-scrolling');
    } else {
        document.body.classList.remove('stop-scrolling');
    }
    return (
        <header className="header">
            <div className="header__up">
                <ul>
                    <li></li>
                    <li
                        onClick={() => {
                            setSearchModal(true);
                        }}
                    >
                        <svg
                            width="25"
                            height="29"
                            viewBox="0 0 10 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.36655 8.96593L6.26905 5.86859C6.2714 5.86515 6.27249 5.8614 6.27452 5.85796C6.68265 5.32421 6.92827 4.65999 6.92827 3.93765C6.92827 2.18953 5.50593 0.767181 3.75796 0.767181C2.00999 0.767181 0.587646 2.18937 0.587646 3.93765C0.587646 5.68577 2.00999 7.10796 3.75796 7.10796C4.66702 7.10796 5.48593 6.72109 6.06452 6.10593L9.14577 9.18687C9.17624 9.21734 9.21624 9.23265 9.25624 9.23265C9.29624 9.23265 9.33624 9.21734 9.36671 9.18687C9.42765 9.12593 9.42765 9.02702 9.36655 8.96593ZM3.75796 6.79546C2.18218 6.79546 0.900147 5.51343 0.900147 3.93765C0.900147 2.36187 2.18218 1.07968 3.75796 1.07968C5.33374 1.07968 6.61577 2.36171 6.61577 3.93765C6.61577 5.51343 5.33374 6.79546 3.75796 6.79546Z"
                                fill="black"
                            />
                        </svg>
                    </li>
                    <ul className="header__up-right">
                        <li>
                            <svg
                                width="19"
                                height="21"
                                viewBox="0 0 8 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_617_7)">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M6.82385 1.03193C5.26287 -0.343977 2.73715 -0.343977 1.17618 1.03193C-0.266937 2.30396 -0.398951 4.33374 0.873597 5.74384L3.76318 8.94573C3.82161 9.01051 3.90844 9.048 4.00001 9.048C4.09158 9.048 4.17841 9.01051 4.23687 8.94573L7.12644 5.74384C8.39896 4.33374 8.26696 2.30396 6.82385 1.03193ZM1.60217 1.44004C2.92505 0.273987 5.07496 0.273987 6.39785 1.44004C7.60992 2.50839 7.71776 4.20268 6.65275 5.38285L4.00001 8.32232L1.34729 5.38285C0.282258 4.20268 0.39012 2.50839 1.60217 1.44004ZM3.07693 3.393C3.07693 2.92451 3.49022 2.54475 4.00001 2.54475C4.50982 2.54475 4.92309 2.92451 4.92309 3.393C4.92309 3.86149 4.50982 4.24125 4.00001 4.24125C3.49022 4.24125 3.07693 3.86149 3.07693 3.393ZM4.00001 1.97925C3.15035 1.97925 2.46155 2.61221 2.46155 3.393C2.46155 4.17379 3.15035 4.80675 4.00001 4.80675C4.84967 4.80675 5.53847 4.17379 5.53847 3.393C5.53847 2.61221 4.84967 1.97925 4.00001 1.97925Z"
                                        fill="black"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_617_7">
                                        <rect
                                            width="8"
                                            height="11.31"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <ShopChoice />
                        </li>
                    </ul>
                    {/* <li>
                        <SelectStore />
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
                    </li> */}
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
                            dispatch(page(null));
                            dispatch(searchVisible(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(guidedNavigation(false));
                            dispatch(getQuery(''));
                            dispatch(recipesPage(false));
                        }}
                    />
                </div>
                <div className="header-right">
                    <img src={headerRight} alt="home" />
                </div>
            </div>
            <div className="header-wrapper">
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
                    {/* <CustomSearchBox /> */}
                </div>
            </div>
            <div className="header-down">
                <ul>
                    <li
                        onClick={() => {
                            dispatch(page('Jewelery'));
                            dispatch(searchVisible(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                            dispatch(recipesPage(false));
                        }}
                    >
                        Jewelery
                    </li>
                    <li
                        onClick={() => {
                            dispatch(page('Love & Engagement'));
                            dispatch(searchVisible(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                            dispatch(recipesPage(false));
                        }}
                    >
                        Love & Engagement
                    </li>
                    <li
                        className="design"
                        onClick={() => {
                            dispatch(page('Watches'));
                            dispatch(searchVisible(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                            dispatch(recipesPage(false));
                        }}
                    >
                        Watches
                    </li>
                    <li
                        onClick={() => {
                            dispatch(page('Home & Accessories'));
                            dispatch(searchVisible(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                            dispatch(recipesPage(false));
                        }}
                    >
                        Home & Accessories
                    </li>
                    <li
                        onClick={() => {
                            dispatch(page('Fragrance'));
                            dispatch(searchVisible(false));
                            dispatch(recipesPage(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                        }}
                    >
                        Fragrance
                    </li>
                    <li
                        onClick={() => {
                            dispatch(page('Men’s Jewelry'));
                            dispatch(searchVisible(false));
                            dispatch(recipesPage(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                        }}
                    >
                        Men’s
                    </li>
                    <li
                        onClick={() => {
                            dispatch(page('Gifts'));
                            dispatch(searchVisible(false));
                            dispatch(recipesPage(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                        }}
                    >
                        Gifts
                    </li>
                    <li
                        onClick={() => {
                            dispatch(page('New Designs'));
                            dispatch(searchVisible(false));
                            dispatch(recipesPage(false));
                            dispatch(federatedSearchVisible(false));
                            dispatch(getQuery(''));
                        }}
                    >
                        What's New
                    </li>
                </ul>
            </div>
            <div
                className={`${
                    searchModal
                        ? 'search-box-container-show'
                        : 'search-box-container-hide'
                }`}
            >
                <div className="search-box-container">
                    <div className="search-box-container__searchBox">
                        <CustomSearchBox />
                    </div>
                    <div className="search-box-container__cross-infos">
                        <p
                            onClick={() => {
                                setSearchModal(false);
                            }}
                        >
                            X
                        </p>
                    </div>
                </div>
                <div className="container__infos">
                    <div className="container__infos__text">
                        <h3>Discover</h3>
                        <p>Jewellery</p>
                        <p>Gifts</p>
                        <p>Store Locator</p>
                    </div>
                    <div className="container__infos__text">
                        <h3>Need Help?</h3>
                        <p>Contact Client Care</p>
                        <p>Call 800 843 3269</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
