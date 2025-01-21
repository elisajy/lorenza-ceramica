import {
    Box
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import ProductSidebar from "../layout/sidebar/Sidebar";
import { useEffect } from "react";

const Products = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Box className="product-page">
                <ProductSidebar></ProductSidebar>
                {/* replace by product render */}
                <Box width='100%'>
                    {/* <img src={pageBgDivider} alt="page-bg-divider" /> */}
                    <div style={{height: "140px", backgroundColor: "#33557b"}}></div>
                    <div className="product-main">
                        <Outlet />
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default Products;
