import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import pageBgDivider from "../../assets/images/page-bg-divider.png";
import InspirationSidebar from "../layout/sidebar/InspirationSidebar";
import { Box } from "@chakra-ui/react";


const InspirationsLayout = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Box>
                <img src={pageBgDivider} alt="page-bg-divider" />
                <Box display="flex">
                    <Outlet />
                    <InspirationSidebar></InspirationSidebar>
                </Box>
            </Box>
        </>
    );
}

export default InspirationsLayout;