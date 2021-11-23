import React from 'react';
import { useSelector } from 'react-redux';

// IMPORT ASSET
import headerBand from '../../Assets/Images/headerBand.png';
import img1 from '../../Assets/Images/img1.png';
import img2 from '../../Assets/Images/img2.png';
import img3 from '../../Assets/Images/img3.png';
import img4 from '../../Assets/Images/img4.png';
import img5 from '../../Assets/Images/img5.png';
import footer from '../../Assets/Images/footer.png';

import { CarouselHome, CarouselLowPrice } from './Carousel';
import CustomCarousel from './CustomCarousel';

const Homepage = () => {
    const { searchVisible, catOne, catTwo, recipesPage } = useSelector(
        state => state.visibility
    );
    const { persona } = useSelector(state => state.selectedPersona);
    return (
        <>
            <div
                className={`homepage-wrapper ${
                    searchVisible || catOne || catTwo || recipesPage
                        ? 'hidden'
                        : 'active'
                }`}
            >
                {/* <div>
                <img src={headerBand} alt="home" />
            </div> */}
                <div>
                    <img src={img1} alt="home" />
                </div>
                <div className="carouselHome">
                    <h2>Our ASDA Products</h2>
                    <CarouselHome />
                </div>
                <div className="carouselHome">
                    <h2>Our Products less than 5£</h2>
                    <CarouselLowPrice />
                </div>
                <div>
                    <img src={img2} alt="home" />
                </div>
                <div>
                    <img src={img3} alt="home" />
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
