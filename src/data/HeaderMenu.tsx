// import { Badge } from 'primereact/badge';

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
    },
    {
        label: 'About Us',
    },
    {
        label: 'Products',
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
        template: itemRenderer
    },
    {
        label: 'Contact',
        template: itemRenderer
    }
];
export { headerMenu };
