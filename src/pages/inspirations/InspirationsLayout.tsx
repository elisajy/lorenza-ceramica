import { useEffect, useState } from "react";
import InspirationSidebar from "../layout/sidebar/InspirationSidebar";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";


const InspirationsLayout = () => {
    const { path } = useParams();
    const [data, setData] = useState<any>();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetch(`${process.env.REACT_APP_API_URL}/inspirations/${path?.replace('/', '')}`)
            .then((response) => response.json())
            .then((data) => setData(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetch(`${process.env.REACT_APP_API_URL}/inspirations/${path?.replace('/', '')}`)
            .then((response) => response.json())
            .then((data) => setData(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    return (
        <>
            <Box>
                <div style={{ height: "140px", backgroundColor: "#33557b" }}></div>
                <Box display="flex">
                    <div dangerouslySetInnerHTML={{ __html: data?.content ?? <></> }} className='article-content' style={{
                        margin: "30px 60px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.2rem"
                    }}></div>
                    <InspirationSidebar origin="inspirations"></InspirationSidebar>
                </Box>
            </Box>
        </>
    );
}

export default InspirationsLayout;