import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./LandingProducts.css";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, Divider, Text } from "@chakra-ui/react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const NewArrivalsCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      align: "center",
      loop: true,
    },
    [
      Autoplay({
        playOnInit: true,
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );
  return (
    <section className="embla-bs">
      <div className="embla__viewport-bs" ref={emblaRef}>
        <div className="embla__container-bs">
          {slides.map((x: any) => (
            <div
              className="embla__slide-bs"
              key={x.id}
              onClick={() => {
                navigate(`/products/new-arrivals/${x.prdName}/${x.prdCode}`);
              }}
            >
              <Card style={{ cursor: "pointer" }}>
                <CardBody p={1.5}>
                  <div className="figure">
                    <img
                      className="Sirv image-main image-item-prds"
                      src={x.images[0]}
                    />
                    <img
                      className="Sirv image-hover image-item-prds"
                      src={x.mockedImages[0]}
                    />
                  </div>
                </CardBody>
                <Divider />
                <CardFooter justifyContent={"center"} p={1.5}>
                  <Text>{x.prdName}</Text>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsCarousel;
