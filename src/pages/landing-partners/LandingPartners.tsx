import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './LandingPartners.css'
import AutoScroll from 'embla-carousel-auto-scroll'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const LandingPartners: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({
        slidesToScroll: 1,
        align: "center",
        loop: true,
    },
        [
            AutoScroll({
                playOnInit: true,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ])
    return (
        <>
            <div className='partners-block'>
                <h1 className='partners-heading'>PROUD PARTNERS</h1>
                <section className="embla-pt">
                    <div className="embla__viewport-pt" ref={emblaRef}>
                        <div className="embla__container-pt">
                            {slides.map((index) => (
                                <div className="embla__slide-pt" key={index}>
                                    <div className="embla__slide__number-pt">{index + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LandingPartners
