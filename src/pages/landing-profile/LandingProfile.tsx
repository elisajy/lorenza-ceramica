import { Divider, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { homeBanner } from '../../helper/HomeBanner';
import { imageDataStructure } from '../../helper/dataInterface';
import "./LandingProfile.css";
import storyThumbnail from '../../assets/mock-media/landing-story/landing-story-thumbnail.png'

const LandingProfile = () => {
    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <div className='profile-story-block'>
                <div className='profile-content'>
                    {/* a block for img */}
                    <div className='image-wrapper'>
                        <img src={storyThumbnail} alt="our-story" />
                    </div>
                    {/* a block for copy */}
                    <div className='content-paragraph'>
                        <h1>OUR STORY</h1>
                        <Divider />
                        <p>Lorenza Ceramica believes in the design that you want that's best suitable to your style. The tile design that you choose is a reflection of your comfort & style. It is our pleasure to help you through the creative process & guide you step by step to get your desired version.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingProfile;