import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch } from 'react-instantsearch-dom';

// IMPORT COMPONENTS
import { CustomHitsModal } from '../Searchpage/Hits';

// IMPORT ASSETS
import quality from '../../Assets/Images/quality.png';
import energy from '../../Assets/Images/energy.png';
import add from '../../Assets/Images/add.png';
import { showModalPDP } from '../../actions/productDetail';

const ProductDetails = () => {
    const searchClient = algoliasearch(window.appID, window.key);
    const dispatch = useDispatch();
    const { product, showModal } = useSelector(state => state.productDetail);


    if (product) {
        return (
            <div className="modal-inner-wrapper">
                <p
                    className="close-modal"
                    onClick={() => {
                        dispatch(showModalPDP(false));
                    }}
                >
                    X
                </p>
                <div className="modal-detail">
                    <div className="product-side">
                        <div className="modal-images">
                            <img src={product.IMAGE} alt="" />
                        </div>
                    </div>
                    
                        <div className="modal-infos">
                            <h3>{product.DISPLAY_NAME}</h3>
                            <div className="modal-infos__grame-prod">
                                <p className="modal-infos__grame-prod__gram">
                                {product.SALES_UNIT}
                                </p>
                                <p className="modal-infos__grame-prod__id">
                                    Product code: {product.PRODUCT_ID}
                                </p>
                            </div>
                            <div className="line"></div>
                            <div className="modal-infos__grame-prod__price__wp">
                                <div className="modal-infos__grame-prod__prices">
                                    <p className="modal-infos__grame-prod__prices__price">
                                        {product.PRICE_INT !== null
                                            ? `£ ${product.PRICE_INT}`
                                            : ''}
                                    </p>
                                </div>
                                <div className="modal-infos__grame-prod__wp">
                                    <img
                                        className="modal-infos__grame-prod__img"
                                        src={quality}
                                        alt=""
                                    />
                                </div>
                            </div>
                               
                            <div className="modal-infos__grame-prod__prices__buttons">
                                <button className="modal-infos__grame-prod__prices__buttons__green">
                                    Add
                                </button>
                                <button className="modal-infos__grame-prod__prices__buttons__white">
                                    <svg
                                        className="icon"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_518:2)">
                                            <path
                                                d="M9.99999 3.43506L9.10374 2.51381C6.99999 0.351311 3.14249 1.09756 1.74999 3.81631C1.09624 5.09506 0.948741 6.94131 2.14249 9.29756C3.29249 11.5663 5.68499 14.2838 9.99999 17.2438C14.315 14.2838 16.7062 11.5663 17.8575 9.29756C19.0512 6.94006 18.905 5.09506 18.25 3.81631C16.8575 1.09756 13 0.350061 10.8962 2.51256L9.99999 3.43506ZM9.99999 18.7501C-9.16626 6.08506 4.09874 -3.79994 9.77999 1.42881C9.85499 1.49756 9.92874 1.56881 9.99999 1.64256C10.0705 1.56888 10.1439 1.49799 10.22 1.43006C15.9 -3.80244 29.1662 6.08381 9.99999 18.7501Z"
                                                fill="#67A643"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_518:2">
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Favourite
                                </button>
                                <button className="modal-infos__grame-prod__prices__buttons__white">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.33337 4.44446H13.3334V5.55557H8.33337V4.44446Z"
                                            fill="#67A643"
                                        />
                                        <path
                                            d="M8.33337 6.66663H13.3334V7.77774H8.33337V6.66663Z"
                                            fill="#67A643"
                                        />
                                        <path
                                            d="M8.33337 8.88892H13.3334V10H8.33337V8.88892Z"
                                            fill="#67A643"
                                        />
                                        <path
                                            d="M8.33337 11.1111H13.3334V12.2222H8.33337V11.1111Z"
                                            fill="#67A643"
                                        />
                                        <path
                                            d="M8.33337 13.3334H13.3334V14.4445H8.33337V13.3334Z"
                                            fill="#67A643"
                                        />
                                        <path
                                            d="M6.11108 4.44446H7.2222V5.55557H6.11108V4.44446Z"
                                            fill="#67A643"
                                        />
                                        <path
                                            d="M6.11108 6.66663H7.2222V7.77774H6.11108V6.66663Z"
                                            fill="#67A643"
                                        />
                                        <path
                                            d="M6.11108 8.88892H7.2222V10H6.11108V8.88892Z"
                                            fill="#67A643"
                                        />
                                        <path
                                            d="M6.11108 11.1111H7.2222V12.2222H6.11108V11.1111Z"
                                            fill="#67A643"
                                        />
                                        <path
                                            d="M6.11108 13.3334H7.2222V14.4445H6.11108V13.3334Z"
                                            fill="#67A643"
                                        />
                                        <path
                                            d="M15.5556 1.11108H4.44449C4.1498 1.11108 3.86718 1.22815 3.65881 1.43652C3.45044 1.64489 3.33337 1.92751 3.33337 2.2222V17.7778C3.33337 18.0724 3.45044 18.3551 3.65881 18.5634C3.86718 18.7718 4.1498 18.8889 4.44449 18.8889H15.5556C15.8503 18.8889 16.1329 18.7718 16.3413 18.5634C16.5496 18.3551 16.6667 18.0724 16.6667 17.7778V2.2222C16.6667 1.92751 16.5496 1.64489 16.3413 1.43652C16.1329 1.22815 15.8503 1.11108 15.5556 1.11108ZM15.5556 17.7778H4.44449V2.2222H15.5556V17.7778Z"
                                            fill="#67A643"
                                        />
                                    </svg>
                                    Add to list
                                </button>
                            </div>
                            
                            <div className="line"></div>
                            <img src={energy} alt="" />
                            <div className="line"></div>
                        </div>
                 
                </div>
                <div className="recommand-side">
                    <div>
                        <h3>Recommendations</h3>
                    </div>
                    <div className="modal-hits">
                        <Configure hitsPerPage={8} />
                        <CustomHitsModal />
                    </div>
                    <div>
                        <h3>Bought together</h3>
                    </div>
                    <div className="modal-hits">
                        <InstantSearch
                            indexName={window.index_asc}
                            searchClient={searchClient}
                        >
                            <Configure hitsPerPage={8} />
                            <CustomHitsModal />
                        </InstantSearch>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProductDetails;
