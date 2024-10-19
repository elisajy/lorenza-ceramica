import MainCarousel from '../landing-carousel/MainCarousel';
import ProductTabs from '../landing-products/ProductTabs';
import { EmblaOptionsType } from 'embla-carousel'
import LandingProfile from '../landing-profile/LandingProfile';
import LandingPartners from '../landing-partners/LandingPartners';

const Landing = () => {
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <>
            <MainCarousel slides={SLIDES} />
            <ProductTabs />
            <LandingProfile />
            <LandingPartners slides={SLIDES} />
        </>
    );
}

export default Landing;