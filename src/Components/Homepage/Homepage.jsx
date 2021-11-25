import React from 'react';
import { useSelector } from 'react-redux';

// IMPORT ASSET
import img2 from '../../Assets/Images/img2.png';
import img3 from '../../Assets/Images/img3.png';
import img4 from '../../Assets/Images/img4.png';
import img5 from '../../Assets/Images/img5.png';
import img7 from '../../Assets/Images/img7.png';
import footer from '../../Assets/Images/footer.png';

import { CarouselHome, CarouselLowPrice, CarouselEngagement } from './Carousel';
import CustomCarousel from './CustomCarousel';
import CardsCategory from './CardsCategory';

const Homepage = () => {
    const { searchVisible, page } = useSelector(state => state.visibility);
    const { persona } = useSelector(state => state.selectedPersona);
    return (
        <>
            <div
                className={`homepage-wrapper ${
                    searchVisible || page ? 'hidden' : 'active'
                }`}
            >
                {/* <div>
                <img src={headerBand} alt="home" />
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
