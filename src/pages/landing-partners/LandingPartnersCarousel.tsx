import { useEffect, useState } from "react";
import "./LandingPartnersCarousel.css";

const LandingPartnersCarousel = () => {
    const [homePartners, setHomePartners] = useState<any>([]);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/home-partners`)
            .then((response) => response.json())
            .then((data) => setHomePartners(data));

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='partners-block'>
            <h1 className='partners-heading'>PROUD PARTNERS</h1>
            <div className="carousel-container">
                <div className="carousel-track">
                    {homePartners.map((item: any) => {
                        return (
                            <div key={item.id} className={`${item.divClassName ?? ''} carousel-card`}>
                                <img src={item.itemImageSrc} alt={item.alt} className={`${item.className ?? ''}`}></img>
                            </div>
                        );
                    })}
                    {width > 640 && homePartners.map((item: any) => {
                        return (
                            <div key={item.id} className={`${item.divClassName ?? ''} carousel-card`}>
                                <img src={item.itemImageSrc} alt={item.alt} className={`${item.className ?? ''}`}></img>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default LandingPartnersCarousel;