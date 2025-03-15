import { Box, Text } from "@chakra-ui/react";
import "./AboutUs.css";
import "quill/dist/quill.snow.css";
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
            <Text className="ql-editor"fontSize={{ base: 'md', lg: 'lg' }} width='80%' dangerouslySetInnerHTML={{ __html: aboutUs[0] }} marginTop='5rem'>
            </Text>
            <Text className="ql-editor"fontSize={{ base: 'md', lg: 'lg' }} width='80%' dangerouslySetInnerHTML={{ __html: aboutUs[1] }}>
            </Text>
            <Text className="ql-editor"fontSize={{ base: 'md', lg: 'lg' }} width='80%' dangerouslySetInnerHTML={{ __html: aboutUs[2] }}>
            </Text>
            <img src={aboutUs[5]} alt="about-us-divider" />
            <h1 className="about-us-title">WHY US?</h1>
            <Text className="ql-editor"fontSize={{ base: 'md', lg: 'lg' }} width='80%' dangerouslySetInnerHTML={{ __html: aboutUs[3] }}>
            </Text>
            <Text className="ql-editor"fontSize={{ base: 'md', lg: 'lg' }} width='80%' dangerouslySetInnerHTML={{ __html: aboutUs[4] }} marginBottom='5rem'>
            </Text>
        </Box>
    );
};

export default AboutUs;
