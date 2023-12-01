import { FC } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../models/IProduct";

import './catalogue.product.css';

const CatalogueProductCard: FC = () => {
    return <Link to='/'>
        <div className="product-card">
            <div className="product-card-image-block">
                <div className="product-card-favorite">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0069 22L2.67077 12.7878C-2.40323 7.26048 5.05554 -3.35197 12.0069 5.2338C18.9583 -3.35197 26.3832 7.29733 21.3431 12.7878L12.0069 22Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="product-card-details">
                <div>
                    <div className="product-card-brand">
                        <Link to=''>brand</Link>
                    </div>
                    <div className="product-card-name">
                        <Link to=''>name</Link>
                    </div>
                </div>
                <div className="product-card-price">
                    от price BYN
                </div>
            </div>
        </div>
    </Link>
}

export default CatalogueProductCard;