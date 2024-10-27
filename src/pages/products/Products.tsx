import {
    Box
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import ProductSidebar from "../layout/sidebar/Sidebar";
import pageBgDivider from "../../assets/images/page-bg-divider.png";

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
                <Box>
                    <img src={pageBgDivider} alt="page-bg-divider" />
                    <div className="product-main">
                        <Outlet />
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default Products;
