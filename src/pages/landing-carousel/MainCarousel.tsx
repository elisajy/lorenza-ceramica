import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./MainCarouselButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./MainCarousel.css";
import { homeBanner } from "../../helper/HomeBanner";
import { imageDataStructure } from "../../helper/dataInterface";
import homeBannerImg from "../../assets/mock-media/homebanner.png";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};
const MainCarousel: React.FC<PropType> = (props) => {
  const [images, setImages] = useState<imageDataStructure[] | undefined>(
    undefined
  );

  useEffect(() => {
    const imageData = homeBanner();
    setImages(imageData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="embla">
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              {/* <div className="embla__slide__number">{index + 1}</div> */}
              <img src={homeBannerImg} className="image-item-main" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCarousel;
