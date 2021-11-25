import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// IMPORT ASSET
import img2 from '../../Assets/Images/img2.png';
import img3 from '../../Assets/Images/img3.png';
import img4 from '../../Assets/Images/img4.png';
import img5 from '../../Assets/Images/img5.png';
import img7 from '../../Assets/Images/img7.png';
import footer from '../../Assets/Images/footer.png';

// Import actions
import { showModal } from '../../actions/visibility';

import { CarouselHome, CarouselEngagement } from './Carousel';
import CardsCategory from './CardsCategory';
import CustomSearchBox from '../Searchpage/SearchBox';

const Homepage = () => {
    const dispatch = useDispatch();
    const { searchVisible, page, getShowModal } = useSelector(
        state => state.visibility
    );
    // Use State to search modal
    // const [searchModal, setSearchModal] = useState(false);
    // const { persona } = useSelector(state => state.selectedPersona);
    return (
        <>
            <div
                className={`homepage-wrapper ${
                    searchVisible || page ? 'hidden' : 'active'
                }`}
            >
                {/* <div
                    className={`${
                        getShowModal
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
                                    dispatch(showModal(false));
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
                </div> */}
                <div>
                    <img src={img2} alt="home" />
                </div>
                <div className="carouselHome">
                    <h2>Most-wanted Gifts</h2>
                    <CarouselHome />
                </div>
                <div>
                    <img src={img3} alt="home" />
                </div>
                <div className="carouselHome">
                    <h2>Love & Engagement</h2>
                    <CarouselEngagement />
                </div>
                <div>
                    <img src={img7} alt="home" />
                </div>
                <div className="carouselHome">
                    <h2>Shop by Category</h2>
                    <CardsCategory />
                </div>
                <div>
                    <img src={img4} alt="home" />
                </div>
                <div>
                    <img src={img5} alt="home" />
                </div>
            </div>
            <div className="footer">
                <img src={footer} alt="home" />
            </div>
        </>
    );
};

export default Homepage;
