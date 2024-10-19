// import { Badge } from 'primereact/badge';

import { FaFacebookSquare, FaInstagramSquare, FaShoppingCart } from "react-icons/fa";

const itemRenderer = (item: any) => (
    <a className="flex align-items-center p-menuitem-link">
        <span className={item.icon} />
        <span className="mx-2">{item.label}</span>
        {/* {item.badge && <Badge className="ml-auto" value={item.badge} />} */}
        {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
    </a>
);

const headerMenu = [
    {
        label: 'Home',
        fontSize: 'xl',
        variant: 'ghost',
        type: 'button'
    },
    {
        label: 'About Us',
        fontSize: 'xl',
        variant: 'ghost',
        type: 'button'
    },
    {
        label: 'Products',
        fontSize: 'xl',
        variant: 'ghost',
        type: 'button',
        items: [
            {
                label: 'Tiles',
                template: itemRenderer,
                items: [
                    {
                        label: 'Porcelain',
                        template: itemRenderer
                    },
                    {
                        label: 'Stone Mosaics',
                        template: itemRenderer
                    },
                    {
                        label: 'Glass Mosaics',
                        template: itemRenderer
                    },
                    {
                        label: 'Natural Mosaics',
                        template: itemRenderer
                    },
                    {
                        label: 'Terazzo',
                        template: itemRenderer
                    },
                    {
                        label: 'Terracotta',
                        template: itemRenderer
                    },
                    {
                        label: 'Subway Tiles',
                        template: itemRenderer
                    },
                ]
            },
            {
                label: 'Room',
                template: itemRenderer
            },
            {
                label: 'New Arrivals',
                template: itemRenderer
            },
            // {
            //   separator: true
            // },
            {
                label: 'Size',
                template: itemRenderer
            },
            {
                label: 'Color',
                template: itemRenderer
            },
            {
                label: 'Sanitary Ware',
                template: itemRenderer
            },
            {
                label: 'Panelling',
                template: itemRenderer
            },
            {
                label: 'Sale',
                template: itemRenderer
            },
        ]
    },
    {
        label: 'Inspiration',
        fontSize: 'xl',
        variant: 'ghost',
        type: 'button',
        template: itemRenderer
    },
    {
        label: 'Contact',
        fontSize: 'xl',
        variant: 'ghost',
        type: 'button',
        template: itemRenderer
    }
];

const productMenu = [
    {
        id: 99,
        label: 'Tiles',
        prds: [
            {
                label: 'Porcelain',
            },
            {
                label: 'Stone Mosaics',
            },
            {
                label: 'Glass Mosaics',
            },
            {
                label: 'Natural Mosaics',
            },
            {
                label: 'Terazzo',
            },
            {
                label: 'Terracotta',
            },
            {
                label: 'Subway Tiles',
            },
        ]
    },
    {
        id: 1,
        label: 'Room',
    },
    {
        id: 2,
        label: 'New Arrivals',
    },
    {
        id: 3,
        label: 'Size',
    },
    {
        id: 4,
        label: 'Color',
    },
    {
        id: 5,
        label: 'Sanitary Ware',
    },
    {
        id: 6,
        label: 'Panelling',
    },
    {
        id: 7,
        label: 'Sale',
    },
]

const socialMenu = [
    {
        id: 1,
        href: '#facebook',
        ariaLabel: 'Facebook',
        icon: <FaFacebookSquare />,
        size: 'lg',
        variant: 'unstyled',
        fontSize: '30px'
    },
    {
        id: 2,
        href: '#instagram',
        ariaLabel: 'Instagram',
        icon: <FaInstagramSquare />,
        size: 'lg',
        variant: 'unstyled',
        fontSize: '30px'
    },
    {
        id: 3,
        href: '#shoppingcart',
        ariaLabel: 'ShoppingCart',
        icon: <FaShoppingCart />,
        size: 'lg',
        variant: 'unstyled',
        fontSize: '30px'
    },
]
export { headerMenu, socialMenu, productMenu };
