import {
  Image
} from "@chakra-ui/react";
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';
import { Thumb } from './ProductImagesThumb';
type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const ProductImages: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="product-images">
      <div className="pi-viewport" ref={emblaMainRef}>
        <div className="pi-container">
          {slides.map((x: any) => (
            <div className="pi-slide" key={x.id}>
              {/* <div className="pi-slidenum">{index + 1}</div> */}
              <img src={require(`../../assets/mock-media/dummy-products/${x.prdCode}.jpg`)}
                className='image-item' />
            </div>
          ))}
        </div>
      </div>

      <div className="pi-thumbs">
        <div className="pi-thumbs-viewport" ref={emblaThumbsRef}>
          <div className="pi-thumbs-container">
            {slides.map((x:any) => (
              <Thumb
                key={x.id}
                onClick={() => onThumbClick(x)}
                selected={x === selectedIndex}
                index={x}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductImages
