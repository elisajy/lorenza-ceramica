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

// const productMenu = [
//     {
//         id: 99,
//         label: 'Tiles',
//         route: '/products/tiles',
//         prds: [
//             {
//                 label: 'Porcelain',
//                 route: '/products/tiles/porcelain'
//             },
//             {
//                 label: 'Stone Mosaics',
//                 route: '/products/tiles/stone-mosaics'
//             },
//             {
//                 label: 'Glass Mosaics',
//                 route: '/products/tiles/glass-mosaics'
//             },
//             {
//                 label: 'Natural Mosaics',
//                 route: '/products/tiles/natual-mosaics'
//             },
//             {
//                 label: 'Terazzo',
//                 route: '/products/tiles/terazzo'
//             },
//             {
//                 label: 'Terracotta',
//                 route: '/products/tiles/terracotta'
//             },
//             {
//                 label: 'Subway Tiles',
//                 route: '/products/tiles/subway-tiles'
//             },
//         ]
//     },
//     {
//         id: 1,
//         label: 'Room',
//         route: '/products/room',
//         prds: [
//             {
//                 label: 'Living',
//                 route: '/products/room/living'
//             },
//         ]
//     },
//     {
//         id: 2,
//         label: 'New Arrivals',
//         route: '/products/new-arrivals',
//     },
//     {
//         id: 3,
//         label: 'Size',
//         route: '/products/size'
//     },
//     {
//         id: 4,
//         label: 'Color',
//         route: '/products/color'
//     },
//     {
//         id: 5,
//         label: 'Sanitary Ware',
//         route: '/products/sanitary-ware'
//     },
//     {
//         id: 6,
//         label: 'Panelling',
//         route: '/products/panelling'
//     },
//     {
//         id: 7,
//         label: 'Sale',
//         route: '/products/sale'
//     },
// ]

const productMenu = [
    {
        id: 99,
        label: 'Mosaic Tiles',
        route: '/products/mosaic-tiles',
        prds: [
            {
                label: 'Porcelain',
                route: '/products/mosaic-tiles/porcelain'
            },
            {
                label: 'Ceramic',
                route: '/products/mosaic-tiles/ceramic'
            }
        ]
    },
    {
        id: 100,
        label: 'Panelling',
        route: '/products/panelling',
        prds: [
            {
                label: 'PU-Stone',
                route: '/products/panelling/pu-stone'
            }
        ]
    }
]

const socialMenu = [
    {
        id: 1,
        href: '#facebook',
        ariaLabel: 'Facebook',
        icon: <FaFacebookSquare />,
        size: 'lg',
        variant: 'unstyled',
        fontSize: '28px',
        url: 'https://www.facebook.com/wk.lorenza'
    },
    {
        id: 2,
        href: '#instagram',
        ariaLabel: 'Instagram',
        icon: <FaInstagramSquare />,
        size: 'lg',
        variant: 'unstyled',
        fontSize: '28px',
        url: 'https://www.instagram.com/lorenza.ceramica'
    },
    {
        id: 3,
        href: '#shoppingcart',
        ariaLabel: 'ShoppingCart',
        icon: <FaShoppingCart />,
        size: 'lg',
        variant: 'unstyled',
        fontSize: '28px',
    },
]

const dummyProducts = [
    {
        id: 1,
        prdName: 'Archistra',
        prdCategory: 'Panelling',
        prdSubcategory: 'PU-Stone',
        prdDesc: 'A pure snow white with a flawless finish, exuding a crisp and clean look — It is perfect for gallery walls, bathroom spaces, and modern kitchens where a fresh, pristine atmosphere is essential. Perfect for design concepts like Modern Classic, Scandinavian, or Luxe Minimalism',
        prdSize: '60 x 120cm',
        prdCode: 'ACH-4003',
        thickness: '1-3cm'
    },
    {
        id: 2,
        prdName: 'Archistra',
        prdCategory: 'Panelling',
        prdSubcategory: 'PU-Stone',
        prdDesc: 'A light sand beige with warm undertones, offering a soft, inviting appeal — Perfect for living room accent wall, outdoor patios, and dining areas where a relaxed, neutral vibe is desired. Seamlessly fitting for design concepts like Mediterranean, Modern Farmhouse, or Boho Chic',
        prdSize: '60 x 120cm',
        prdCode: 'ACH-4004',
        thickness: '1-3cm'
    },
    {
        id: 3,
        prdName: 'Brick Veneer',
        prdCategory: 'Panelling',
        prdSubcategory: 'PU-Stone',
        prdDesc: 'A warm Autumn Clay hue with an organic, rustic texture, inspired by the rich tones of well-worn brick — Perfect for accent walls in living rooms, cozy patios, and exterior façades where a welcoming, earthy feel is desired. Seamlessly fitting for design concepts such as Rustic Chic, Urban Loft, or Craftsman design',
        prdSize: '6.4 x 21.7cm',
        prdCode: 'AR-3001-GM-01',
        thickness: '5-6mm'
    },
    {
        id: 4,
        prdName: 'Kastone Edge',
        prdCategory: 'Panelling',
        prdSubcategory: 'PU-Stone',
        prdDesc: 'A crisp white hue with sharp, linear textures, adding depth and clean lines — It is Ideal for feature walls in kitchens, modern bathroom accents, and exterior façades where a fresh, pure look is essential. Perfectly suited for design concepts such as Scandinavian, Modern Minimalist, or Monochromatic design',
        prdSize: '40 x 8.4cm',
        prdCode: 'EG-302',
        thickness: '2.3cm'
    },
    {
        id: 5,
        prdName: 'Stone Veneer',
        prdCategory: 'Panelling',
        prdSubcategory: 'PU-Stone',
        prdDesc: 'A glowing Sunset Emberstone with a light orange hue, capturing the radiance of the setting sun — Ideal for kitchen backsplashes, sun-drenched patios, or garden walls, adding warmth and energy to any space. Complements Bohemian, Mediterranean, or Eclectic design concepts',
        prdSize: '5 x 19cm',
        prdCode: 'DS-101',
        thickness: '8mm'
    },
    {
        id: 6,
        prdName: 'Stone Veneer',
        prdCategory: 'Panelling',
        prdSubcategory: 'PU-Stone',
        prdDesc: 'A delicate Lavender Mist grey with light purple undertones, adding a soft touch of color — It is Ideal for bedroom feature walls, quiet reading corners, or outdoor lounge areas, where a serene yet unique hue is desired. Perfect for Modern Cottage, Romantic, or Eclectic design concepts',
        prdSize: '12 x 60cm',
        prdCode: 'WS-3005',
        thickness: '1-2cm'
    },
    {
        id: 7,
        prdName: 'Lampang Tiles',
        prdCategory: 'Mosaic Tiles',
        prdSubcategory: 'Ceramic',
        prdSubcategory2: 'Intense Series',
        prdVariation: 'V4',
        prdDesc: 'Inspired by the pure elegance of natural pearls, Pearl White tiles exude a soft and timeless beauty, offering a bright and clean ambiance — Perfect for enhancing the refined luxury of swimming pools, spa areas, and modern bathrooms. Seamlessly fitting for design concepts such as Minimalist, Contemporary, and Coastal Interior.',
        prdSize: '48 x 48mm',
        prdCode: 'XFB48003',
        thickness: '5mm',
        color: 'Pearl White',
        finish: 'Polished'
    },
    {
        id: 8,
        prdName: 'Lampang Tiles',
        prdCategory: 'Mosaic Tiles',
        prdSubcategory: 'Ceramic',
        prdSubcategory2: 'Gentle Series',
        prdVariation: 'V4',
        prdDesc: 'Inspired by the peaceful, reflective tones of a quiet lake, Lake Blue tiles bring a sense of calm and soothing charm to any space, offering a cool and serene ambiance — Perfect for creating a relaxing environment in swimming pools, wellness centers, and water features. Seamlessly fitting for design concepts such as Contemporary, Minimalist, and Scandinavian Interior.',
        prdSize: '48 x 48mm',
        prdCode: 'FA48614',
        color: 'Lake Blue',
        finish: 'Polished'
    },
    {
        id: 9,
        prdName: 'Lampang Tiles',
        prdCategory: 'Mosaic Tiles',
        prdSubcategory: 'Ceramic',
        prdSubcategory2: 'Intense Series',
        prdVariation: 'V4',
        prdDesc: 'Inspired by the gentle hues of fresh leaves, Light Green tiles exude a soft and soothing charm, offering a natural and refreshing vibe — Perfect for infusing swimming pools, garden water features, and outdoor spaces with a calm, nature-inspired look. Seamlessly fitting for design concepts such as Scandinavian, Zen, and Organic Interior.',
        prdSize: '48 x 48mm',
        prdCode: 'XFB48034',
        color: 'Light Green',
        finish: 'Polished'
    },
    {
        id: 10,
        prdName: 'Casa Tiles',
        prdCategory: 'Mosaic Tiles',
        prdSubcategory: 'Porcelain',
        prdVariation: 'V4',
        prdDesc: 'A rich blend of deep ocean blue and vibrant teal, accented with warm yellow and orange flourishes, offers a lively yet soothing atmosphere, perfect for creating a tranquil focal point — Best suited for feature walls, bathroom floors, or kitchen backsplashes, it adds a vibrant yet calming feel, ideal for brightening and energizing spaces. Seamlessly fitting into Mediterranean or Moroccan design styles.',
        prdSize: '98 x 98mm',
        prdCode: 'FT-IT-TF1210',
        finish: 'Polished'
    },
    {
        id: 11,
        prdName: 'Casa Tiles',
        prdCategory: 'Mosaic Tiles',
        prdSubcategory: 'Porcelain',
        prdVariation: 'V4',
        prdDesc: 'A bold fusion of vivid red, deep green, and black, enhanced with intricate floral patterns, offers a powerful and energizing visual impact — Recommended for entryways, kitchens, or living room feature walls, it brings a lively, bold character to any area, turning it into a conversation piece. Perfectly suited for Spanish or Middle Eastern design styles.',
        prdSize: '48 x 48mm',
        prdCode: 'FT-IT-TF1217',
        finish: 'Polished'
    },
    {
        id: 12,
        prdName: 'Casa Tiles',
        prdCategory: 'Mosaic Tiles',
        prdSubcategory: 'Porcelain',
        prdVariation: 'V4',
        prdDesc: 'A cheerful blend of sunny yellow and calming blue, framed by delicate floral motifs, offers warmth and comfort, making the space feel light and uplifting — Ideal for bathroom walls, kitchen backsplashes, or small accent areas, it brings a sunny, optimistic feel to any room, softening the ambiance with a playful touch. Perfect for Mediterranean or Rustic design styles.',
        prdSize: '98 x 98mm',
        prdCode: 'FT-IT-TF1219',
        finish: 'Polished'
    },

]

export { headerMenu, socialMenu, productMenu, dummyProducts };
