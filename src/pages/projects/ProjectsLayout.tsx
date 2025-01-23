import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import InspirationSidebar from "../layout/sidebar/InspirationSidebar";
import { Box } from "@chakra-ui/react";
import { ADJUST_HEIGHT, useArticleContext } from "../../hooks/article-context/ArticleContext";


const ProjectsLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { path } = useParams();
    const [data, setData] = useState<any>();
    const { articleDispatch } = useArticleContext();
    const contentRef = useRef<any>(null);

    useEffect(() => {
        initialization();
        return () => {
            window.removeEventListener("resize", adjustHeight); // Cleanup event listener
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        initialization();
        return () => {
            window.removeEventListener("resize", adjustHeight); // Cleanup event listener
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    useEffect(() => {
        adjustHeight();
        window.addEventListener("resize", adjustHeight); // Update height on resize
        return () => {
            window.removeEventListener("resize", adjustHeight); // Cleanup event listener
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, contentRef.current?.offsetHeight]);

    const initialization = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetch(`${process.env.REACT_APP_API_URL}/projects-${searchParams.get('origin')!.toString()}/${path?.replace('/', '')}`)
            .then((response) => response.json())
            .then((data) => setData(data));

        adjustHeight();
        window.addEventListener("resize", adjustHeight); // Update height on resize
    }

    const adjustHeight = () => {
        // Calculate the height of the content div and set the side bar div's height
        if (contentRef.current) {
            articleDispatch({
                type: ADJUST_HEIGHT,
                payload: contentRef.current.offsetHeight,
            });
        }
    }

    return (
        <>
            <Box>
                <Box display="flex">
                    <div dangerouslySetInnerHTML={{ __html: data?.content ?? <></> }}
                        className='article-content'
                        ref={contentRef}
                        style={{
                            margin: "30px 60px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.2rem",
                            flex: 2,
                        }}></div>
                    <InspirationSidebar origin={searchParams.get('origin')!.toString()}></InspirationSidebar>
                </Box>
            </Box>
        </>
    );
}

export default ProjectsLayout;