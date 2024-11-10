import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { homeBanner } from '../../helper/HomeBanner';
import { imageDataStructure } from '../../helper/dataInterface';
import BestSellerCarousel from './BestSellerCarousel';
import NewArrivalsCarousel from './NewArrivalsCarousel';
import "./ProductTabs.css";

const ProductTabs = () => {
    const [images, setImages] = useState<imageDataStructure[] | undefined>(undefined);
    const SLIDE_COUNT = 6;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const imageData = homeBanner();
        setImages(imageData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // Handler to update the state with the new window width
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        // Add resize event listener
        window.addEventListener("resize", handleResize);
    
        // Call the handler immediately to set initial width
        handleResize();
    
        // Cleanup by removing the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <>
            <div className='product-tabs'>
                <Tabs align='center' variant='unstyled'>
                    <TabList>
                        <Tab _selected={{ color: '#434589', fontWeight: 700, }} style={{fontSize: (width > 640 ? 16 : width <= 640 ? 14 : 14)}} width={'md'}>BEST SELLING</Tab>
                        <Tab _selected={{ color: '#434589', fontWeight: 700 }} style={{fontSize: (width > 640 ? 16 : width <= 640 ? 14 : 14)}} width={'md'}>NEW ARRIVALS</Tab>
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