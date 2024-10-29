import { Box, Container } from "@chakra-ui/react";
import aboutUsTitle from "../../assets/images/about-us-title.png";
import aboutUsDivider from "../../assets/images/about-us-divider.png";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="25px"
            fontSize="large"
        >
            <img src={aboutUsTitle} alt="about-us" />
            <p className="about-us-content">
                <strong className="bold-text">Lorenza Ceramica</strong> is a local brand
                developed by{" "}
                <strong className="bold-text">W.K. Ceramic Distributor Sdn Bhd</strong>.
                We are one of the top tiles distributor and supplier in the tiles
                industry. We have distributor agents all across Malaysia as well as we
                supply directly to these corporate customers.
            </p>
            <p className="about-us-content">
                W.K. has been{" "}
                <strong className="bold-text">established since 1992</strong>, solely as
                a wholesale tiles supplier focusing on providing tiles for the
                under-construction projects. But we have slowly branched out to cater
                for distributorship to smaller tiles shop outside of Klang Valley.
            </p>
            <p className="about-us-content">
                <strong className="bold-text">Our past project</strong> ranges from the
                under-construction projects to individual residential project as well as
                commercial projects. Hence, you do not need to worry about the
                inadequate supply of tiles or a delay in delivery from the agreed date.
            </p>
            <img src={aboutUsDivider} alt="about-us-divider" />
            <h1 className="about-us-title">WHY US?</h1>
            <p className="about-us-content">
                As a tiles’ supplier and wholesaler, our prices are reasonably cheap.
                This is because our{" "}
                <strong className="bold-text">
                    ceramic, porcelain and mosaic tiles‘
                </strong>{" "}
                price, are direct order from the factory. Hence you get the best quality
                at the right price. We do cater to many markets with many different
                levels of quality, such a high-end and exclusive, to the middle class
                and economical, as well as clearance and odd lots. It all depends on
                individual customer preference for the design and cost budget that they
                have.
            </p>
            <p className="about-us-content" style={{ marginBottom: '5rem' }}>
                In addition to that, we also cater to{" "}
                <strong className="bold-text">
                    distributors from outside Klang Valley
                </strong>
                , who would like to sell our tiles at the respective states, such as
                Johor, Melaka, Seremban, Perak, Penang, Pahang and Kelantan. Many under
                construction residential and commercial project also enquire from us due
                to our brand name and our stocks availability.
            </p>
        </Box>
    );
};

export default AboutUs;
