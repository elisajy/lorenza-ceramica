import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Divider,
    VStack,
    Switch,
} from "@chakra-ui/react";
import MainCarousel from "../landing-carousel/MainCarousel";
import { useEffect, useState } from "react";
import ProductSidebar from "../layout/sidebar/Sidebar";
import { Outlet, Route, Routes } from "react-router-dom";
import CategoryPage from "./ProductCategory";
import ItemDetail from "./ProductDetails";

const Products = () => {
    // useEffect(() => {
    //   fetch(`${process.env.REACT_APP_API_URL}/faq`)
    //     .then((response) => response.json())
    //     .then((data) => setFaq(data));
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <>
            <Box className="product-page">
                <ProductSidebar></ProductSidebar>
                {/* replace by product render */}
                <div className="product-main">
                    <Outlet />
                </div>
            </Box>
        </>
    );
};

export default Products;
