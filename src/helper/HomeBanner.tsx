// import { Badge } from 'primereact/badge';
import bannerImage from '../assets/mock-media/homebanner.png';
import "./helper.css";

export const itemTemplate = (item: any) => {
    return <>
        <div className='galleria-image'>
            <img src={item.itemImageSrc} alt={item.alt} className='image-item' />
            {
                item && item.button === true ?
                    null
                    // <Button className='image-button' label={item.buttonLabel} severity="warning" rounded />
                    :
                    null
            }
        </div>
    </>;
};

export const homeBanner = () => {
    return [
        {
            itemImageSrc: bannerImage,
            alt: 'Mock Image 1',
            title: 'Banner 1',
            button: true,
            buttonLabel: 'Go To Product Gallery',
            routing: ''
        },
        {
            itemImageSrc: bannerImage,
            alt: 'Mock Image 2',
            title: 'Banner 2'
        },
        {
            itemImageSrc: bannerImage,
            alt: 'Mock Image 3',
            title: 'Banner 3'
        },
    ];
};