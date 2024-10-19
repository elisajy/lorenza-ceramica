import { headerMenu } from '../../helper/HeaderMenu';
import { faCartShopping, faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { homeBanner, itemTemplate } from '../../helper/HomeBanner';
import { imageDataStructure } from '../../helper/dataInterface';
import "./ProductTabs.css";
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import BestSellerCarousel from './BestSellerCarousel';
import NewArrivalsCarousel from './NewArrivalsCarousel';

const ProductTabs = () => {
    const [images, setImages] = useState<imageDataStructure[] | undefined>(undefined);
    const SLIDE_COUNT = 6;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

    useEffect(() => {
        const imageData = homeBanner();
        setImages(imageData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <div className='product-tabs'>
                <Tabs align='center' variant='unstyled'>
                    <TabList>
                        <Tab _selected={{ color: '#434589', fontWeight: 700 }} width={'md'}>BEST SELLING</Tab>
                        <Tab _selected={{ color: '#434589', fontWeight: 700 }} width={'md'}>NEW ARRIVALS</Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='1px' bg='blue.500' borderRadius='1px' />
                    <TabPanels>
                        <TabPanel>
                            <BestSellerCarousel slides={SLIDES}></BestSellerCarousel>
                        </TabPanel>
                        <TabPanel>
                            <NewArrivalsCarousel slides={SLIDES}></NewArrivalsCarousel>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div >
        </>
    );
}

export default ProductTabs;