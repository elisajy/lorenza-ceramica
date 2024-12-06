import React, { useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./LandingProducts.css";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButton";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const BestSellingCarousel: React.FC<PropType> = (props) => {
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

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla-bs">
      <div className="embla__viewport-bs" ref={emblaRef}>
        <div className="embla__container-bs">
          {slides.map((x: any) => (
            <div
              className="embla__slide-bs"
              key={x.id}
              onClick={() => {
                navigate(`/products/best-selling/${x.prdName}/${x.prdCode}`);
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

      {slides && slides.length !== 0 && (
        <div className="button-container-prd">
          <PrevButton
            className="overlay-button"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />

          <NextButton
            className="overlay-button"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      )}
    </section>
  );
};

export default BestSellingCarousel;
