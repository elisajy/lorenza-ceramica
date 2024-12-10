import { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import InspirationSidebar from "../layout/sidebar/InspirationSidebar";
import { Box } from "@chakra-ui/react";


const ProjectsLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Box>
                {/* <img src={pageBgDivider} alt="page-bg-divider" /> */}
                <div style={{height: "140px", backgroundColor: "#33557b"}}></div>
                <Box display="flex">
                    <Outlet />
                    <InspirationSidebar origin={searchParams.get('origin')!.toString()}></InspirationSidebar>
                </Box>
            </Box>
        </>
    );
}

export default ProjectsLayout;