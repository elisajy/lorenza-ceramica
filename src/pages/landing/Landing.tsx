import MainCarousel from '../landing-carousel/MainCarousel';
import ProductTabs from '../landing-products/ProductTabs';
import { EmblaOptionsType } from 'embla-carousel'
import LandingProfile from '../landing-profile/LandingProfile';
import LandingPartners from '../landing-partners/LandingPartners';
import { useEffect } from 'react';
import LandingInstagram from '../landing-instagram/LandingInstagram';

const Landing = () => {
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <MainCarousel slides={SLIDES} />
            <ProductTabs />
            <LandingProfile />
            <LandingInstagram />
            <LandingPartners slides={SLIDES} />
        </>
    );
}

export default Landing;