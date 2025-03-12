import { useEffect, useRef, useState } from "react";
import InspirationSidebar from "../layout/sidebar/InspirationSidebar";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ADJUST_HEIGHT, useArticleContext } from "../../hooks/article-context/ArticleContext";
import './Inspirations.css';
import "quill/dist/quill.snow.css";


// 🔹 Custom Hook: Tracks div height changes using ResizeObserver
export const useResizeObserver = (callback: any) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (callback) callback(entry.contentRect.height);
            }
        });

        observer.observe(ref.current);

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, [callback]);

    return ref;
};

const InspirationsLayout = () => {
    const { path } = useParams();
    const [data, setData] = useState<any>();
    const { articleDispatch } = useArticleContext();
    const contentRef = useResizeObserver((newHeight: any) => {
        articleDispatch({
            type: ADJUST_HEIGHT,
            payload: newHeight * 1.05,
        });
    });

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
        fetch(`${process.env.REACT_APP_API_URL}/inspirations/${path?.replace('/', '')}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }

    return (
        <>
            <Box>
                <Box display="flex">
                    <div dangerouslySetInnerHTML={{ __html: data?.content ?? <></> }}
                        ref={contentRef}
                        className='article-content ql-editor'
                        style={{
                            margin: "30px 60px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.2rem",
                        }}></div>
                    <InspirationSidebar origin="inspirations"></InspirationSidebar>
                </Box>
            </Box>
        </>
    );
}

export default InspirationsLayout;