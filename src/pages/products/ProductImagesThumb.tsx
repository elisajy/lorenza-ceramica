import {
    Image
} from "@chakra-ui/react";
import React from 'react';
type PropType = {
    selected: boolean
    index: any
    onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
    const { selected, index, onClick } = props

    return (
        <div
            className={'pi-thumbs-slide'.concat(
                selected ? ' pi-thumbs-slide--selected' : ''
            )}
        >
            <button
                onClick={onClick}
                type="button"
                className="pi-thumbs-slide-number"
            >
                <Image
                    src={index}
                    alt='product-image'
                    borderRadius='none'
                />
            </button>
        </div>
    )
}
