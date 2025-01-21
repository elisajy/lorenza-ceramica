import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import BestSellerCarousel from './BestSellerCarousel';
import NewArrivalsCarousel from './NewArrivalsCarousel';
import "./ProductTabs.css";

const ProductTabs = () => {
    const [newArrivals, setNewArrivals] = useState([]);
    const [bestSelling, setBestSelling] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_API_URL}/productsByTagName/New Arrivals`
        )
            .then((response) => response.json())
            .then((data) => setNewArrivals(data));

        fetch(
            `${process.env.REACT_APP_API_URL}/productsByTagName/Best Selling`
        )
            .then((response) => response.json())
            .then((data) => setBestSelling(data));
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
                        <Tab _selected={{ color: '#434589', fontWeight: 700, }} style={{ fontSize: (width > 640 ? 16 : width <= 640 ? 14 : 14) }} width={'md'}>BEST SELLING</Tab>
                        <Tab _selected={{ color: '#434589', fontWeight: 700 }} style={{ fontSize: (width > 640 ? 16 : width <= 640 ? 14 : 14) }} width={'md'}>NEW ARRIVALS</Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='1px' bg='blue.500' borderRadius='1px' />
                    <TabPanels>
                        <TabPanel backgroundColor={'#f8f8f8'}>
                            <BestSellerCarousel slides={bestSelling}></BestSellerCarousel>
                        </TabPanel>
                        <TabPanel backgroundColor={'#f8f8f8'}>
                            <NewArrivalsCarousel slides={newArrivals}></NewArrivalsCarousel>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div >
        </>
    );
}

export default ProductTabs;