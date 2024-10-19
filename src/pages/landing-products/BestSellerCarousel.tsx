import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import './LandingProducts.css'
import { bestSellerSlides } from '../../helper/SlidesData'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const BestSellingCarousel: React.FC<PropType> = (props) => {
    const { slides } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({
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
        ])
    return (
        <section className="embla-bs">
            <div className="embla__viewport-bs" ref={emblaRef}>
                <div className="embla__container-bs">
                    {bestSellerSlides().map((index: any) => (
                        <div className="embla__slide-bs" key={index.id}>
                            <img src={index.itemImageSrc} className='image-item' />
                            {/* <div className="embla__slide__number-bs">{index + 1}</div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BestSellingCarousel
