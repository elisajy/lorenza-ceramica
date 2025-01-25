import { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./MainCarouselButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./MainCarousel.css";

const MainCarousel = () => {
  const [homeBanners, setHomeBanners] = useState<any>([]);
  const options: EmblaOptionsType | undefined = undefined;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/home-banners`)
      .then((response) => response.json())
      .then((data) => setHomeBanners(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleLinkClick = (link?: string) => {
    // Open the link in a new tab
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
  };

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
          {homeBanners.map((item: any) => (
            <div className="embla__slide" key={item.id}>
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="image-item-main"
                onClick={() => handleLinkClick(item.link)}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCarousel;
