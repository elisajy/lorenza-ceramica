import React, { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import './LandingPartners.css'
import AutoScroll from 'embla-carousel-auto-scroll'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const LandingPartners: React.FC<PropType> = (props) => {
    const { slides, options } = props;
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

    const [homePartners, setHomePartners] = useState<any>([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/home-partners`)
            .then((response) => response.json())
            .then((data) => setHomePartners(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className='partners-block'>
                <h1 className='partners-heading'>PROUD PARTNERS</h1>
                <section className="embla-pt">
                    <div className="embla__viewport-pt" ref={emblaRef}>
                        <div className="embla__container-pt">
                            {homePartners.map((index: any) => (
                                <div className={`${index.divClassName ?? ''} embla__slide-pt`} key={index.id}>
                                    <img src={index.itemImageSrc} alt={index.alt} className={`${index.className ?? ''} image-item`} />
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
