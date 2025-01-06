import { Box, Text } from "@chakra-ui/react";
import aboutUsDivider from "../../assets/images/about-us-divider.png";
import "./AboutUs.css";
import { useEffect, useState } from "react";

const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState<string[]>([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/about-us`)
          .then((response) => response.json())
          .then((data) => setAboutUs(data.map((x: any) => x.content)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="25px"
            fontSize="large"
        >
            <div className="page-content" style={{
                backgroundColor: "#33557b",
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "3rem"
            }}>
                <h1 className="page-title">ABOUT <strong>LORENZA CERAMICA</strong></h1>
            </div>
            <Text fontSize={{ base: 'md', lg: 'lg' }} width='80%' dangerouslySetInnerHTML={{ __html: aboutUs[0] }}>
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} width='80%' dangerouslySetInnerHTML={{ __html: aboutUs[1] }}>
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} width='80%' dangerouslySetInnerHTML={{ __html: aboutUs[2] }}>
            </Text>
            <img src={aboutUsDivider} alt="about-us-divider" />
            <h1 className="about-us-title">WHY US?</h1>
            <Text fontSize={{ base: 'md', lg: 'lg' }} width='80%' dangerouslySetInnerHTML={{ __html: aboutUs[3] }}>
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} width='80%' dangerouslySetInnerHTML={{ __html: aboutUs[4] }} marginBottom='5rem'>
            </Text>
        </Box>
    );
};

export default AboutUs;
