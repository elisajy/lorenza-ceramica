import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import InspirationSidebar from "../layout/sidebar/InspirationSidebar";
import { Box } from "@chakra-ui/react";
import { ADJUST_HEIGHT, useArticleContext } from "../../hooks/article-context/ArticleContext";
import './Projects.css';
import "quill/dist/quill.snow.css";
import { useResizeObserver } from "../inspirations/InspirationsLayout";

const ProjectsLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { path } = useParams();
    const [data, setData] = useState<any>();
    const [width, setWidth] = useState(window.innerWidth);
    const { articleDispatch } = useArticleContext();
    const contentRef = useResizeObserver((newHeight: any) => {
        articleDispatch({
            type: ADJUST_HEIGHT,
            payload: newHeight * 1.05,
        });
    });;

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

    useEffect(() => {
        initialization();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        initialization();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    const initialization = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetch(`${process.env.REACT_APP_API_URL}/projects-${searchParams.get('origin')!.toString()}/${path?.replace('/', '')}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }

    return (
        <>
            <Box>
                {width >= 992 && (<Box display="flex">
                    <div dangerouslySetInnerHTML={{ __html: data?.content ?? <></> }}
                        ref={contentRef}
                        className='article-content ql-editor'
                        style={{
                            margin: "30px 60px",
                            display: "flex",
                            flexDirection: "column",
                        }}></div>
                    <InspirationSidebar origin="inspirations"></InspirationSidebar>
                </Box>)}
                {width < 992 && (
                    <div dangerouslySetInnerHTML={{ __html: data?.content ?? <></> }}
                        ref={contentRef}
                        className='article-content ql-editor'
                        style={{
                            margin: "30px 10px",
                            display: "flex",
                            flexDirection: "column",
                        }}></div>
                )}
            </Box>
        </>
    );
}

export default ProjectsLayout;