import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { Thumb } from "./ProductImagesThumb";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const ProductImages: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="product-images">
      <div className="pi-viewport" ref={emblaMainRef}>
        <div className="pi-container">
          {slides && slides.length > 0 ? (
            slides.map((x: any, i: number) => (
              <div className="pi-slide" key={i}>
                <img src={x} alt={String(i)} className="image-border image-item-pi" />
              </div>
            ))
          ) : (
            <div className="pi-slide">
              {/* <div className="pi-slidenum">{index + 1}</div> */}
              <img
                src={require(`../../assets/images/no-image-available.png`)}
                className="image-border"
              />
            </div>
          )}
        </div>
      </div>

      <div className="pi-thumbs">
        <div className="pi-thumbs-viewport" ref={emblaThumbsRef}>
          <div className="pi-thumbs-container">
            {slides && slides.length > 0 ? (
              slides.map((x: any, i: number) => (
                <Thumb
                  key={i}
                  onClick={() => onThumbClick(i)}
                  selected={x === selectedIndex}
                  index={x}
                />
              ))
            ) : (
              <Thumb
                key={0}
                onClick={() => onThumbClick(0)}
                selected={0 === selectedIndex}
                index={require(`../../assets/images/no-image-available.png`)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
