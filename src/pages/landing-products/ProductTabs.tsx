import { headerMenu } from '../../helper/HeaderMenu';
import { faCartShopping, faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { homeBanner, itemTemplate } from '../../helper/HomeBanner';
import { imageDataStructure } from '../../helper/dataInterface';
import "./ProductTabs.css";

const ProductTabs = () => {
    const [images, setImages] = useState<imageDataStructure[] | undefined>(undefined);

    useEffect(() => {
        const imageData = homeBanner();
        setImages(imageData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <div className='product-tabs'>
                <div className="card">
                </div>
            </div >
        </>
    );
}

export default ProductTabs;