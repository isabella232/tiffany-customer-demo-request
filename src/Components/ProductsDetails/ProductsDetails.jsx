import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch } from 'react-instantsearch-dom';

// IMPORT COMPONENTS
import { CustomHitsModal } from '../Searchpage/Hits';

// IMPORT ASSETS
import productDetail from '../../Assets/Images/pdp.png';
import { showModalPDP } from '../../actions/productDetail';

const ProductDetails = () => {
    const searchClient = algoliasearch(window.appID, window.key);
    const dispatch = useDispatch();
    const { product, showModal } = useSelector(state => state.productDetail);
    const { shop } = useSelector(state => state.selectShop);

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
                            <img src={product.fullImage} alt="" />
                        </div>
                    </div>

                    <div className="modal-infos">
                        <h3>{product.LocalTitleRetail}</h3>
                        <div className="modal-infos__grame-prod">
                            <p className="modal-infos__grame-prod__gram">
                                {product.LocalName}
                            </p>
                        </div>
                        <div className="line"></div>
                        <p className="modal-infos__grame-prod__id">
                            Product code: {product.master_SKU}
                        </p>
                        <div className="line"></div>
                        <div className="img-container">
                            <img src={productDetail} alt="" />
                        </div>
                        <div className="modal-infos__grame-prod__price__wp">
                            <div className="modal-infos__grame-prod__prices">
                                <p className="modal-infos__grame-prod__prices__price">
                                    {shop && product.price.shop
                                        ? `$ ${product.price.shop}`
                                        : `$ ${product.price.shop_53}`}
                                </p>
                                <p className="modal-infos__grame-prod__prices__price">
                                    Add to bag
                                </p>
                            </div>
                            <div className="modal-infos__grame-prod__wp"></div>
                        </div>

                        <p>{product.LocalDescription}</p>
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
