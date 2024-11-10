import { Box } from "@chakra-ui/react";
import '../Inspirations.css';

const ShowroomLaunched = () => {
    return (
        <Box maxWidth="8xl" margin="30px 60px" display="flex" flexDirection="column" gap="1.2rem">
            <h3 style={{ fontSize: "22px" }}><strong>We’ve launched our new showroom!</strong></h3>
            <hr></hr>
            <img style={{ maxWidth: "800px", alignSelf: "center" }} src="https://lorenzaceramica.com/wp-content/uploads/2020/05/blog_1-1024x768.png" alt="post-banner"></img>
            <p>From our humble beginnings of being tile contractors, to becoming tiling traders and distributors, we have made ourselves one of the pioneering investors in the tile industry.</p>
            <img src="https://lorenzaceramica.com/wp-content/uploads/2020/05/blog_2.png" alt="post-banner"></img>
            <p>W.K. Ceramic launched our newly renovated showroom, Lorenza Ceramica, to display designer tiles and reached a new milestone. Architects, designers and building contractors came by to Jalan 51A/227 to witness the opening after many months of planning and construction work and also to have some delicious buffet.</p>
            <img style={{ maxWidth: "800px", alignSelf: "center" }} src="https://lorenzaceramica.com/wp-content/uploads/2020/05/blog_3.png" alt="post-banner"></img>
            <p>Klang Valley’s newest tile showroom managed to impress, with a large arrangement of tile collections. Guests were impressed with our 900 x 1800mm selection that couldn’t be helped but standout amongst other selections.</p>
            <p><strong>Dedication and Innovation</strong></p>
            <p>A lot of planning and work has gone into the grand opening of the newly renovated showroom. It was not only a mark of a new milestone, but also the 25<sup>th</sup> year anniversary of our trading experience.</p>
            <p>Our dedication to our clients is how we’ve been able to thrive in this industry. Being able to meet customer expectations, and understanding how our products can fit client needs.</p>
            <p>The brother – sister duo, Mr. Daniel Kuan and Ms. Quiny Kuan, showed incredible innovation in progressing the business to where we are now.</p>
            <img style={{ maxWidth: "800px", alignSelf: "center" }} src="https://lorenzaceramica.com/wp-content/uploads/2020/05/blog_4.png" alt="post-banner"></img>
            <p>The team built will ensure that Lorenza Ceramica will continue to strive to bring the best services for years to come.</p>
            <img style={{ maxWidth: "800px", alignSelf: "center" }} src="https://lorenzaceramica.com/wp-content/uploads/2020/05/blog_5.png" alt="post-banner"></img>
        </Box>
    )
}

export default ShowroomLaunched;