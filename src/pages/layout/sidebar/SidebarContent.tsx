import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    BoxProps,
    Button,
    Center,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
    FiCompass,
    FiHome,
    FiSettings,
    FiStar,
    FiTrendingUp
} from 'react-icons/fi';
import "./Sidebar.css";
import { productMenu } from '../../../helper/HeaderMenu';
import { NavLink } from 'react-router-dom';

interface SidebarProps extends BoxProps {
    onClose: () => void
}

interface LinkItemProps {
    name: string
    icon: IconType
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
]

const SidebarContent = () => {
    return (
        <Box>

            <Accordion defaultIndex={[0]} allowMultiple>
                {productMenu && productMenu.length !== 0
                    ? productMenu.map((item: any) => {
                        return <AccordionItem>
                            <h1>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        {/* <NavLink to={item.route} style={({ isActive, isPending, isTransitioning }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isPending ? "red" : "black",
                                                viewTransitionName: isTransitioning ? "slide" : "",
                                            };
                                        }}>
                                            <span>{item.label}</span>
                                        </NavLink> */}
                                        <span>{item.label}</span>
                                    </Box>
                                    {
                                        item.prds && item.prds.length !== 0 ?
                                            <AccordionIcon />
                                            :
                                            null
                                    }
                                </AccordionButton>
                            </h1>
                            <AccordionPanel pb={4}>
                                {
                                    item.prds && item.prds.length !== 0 ?
                                        item.prds.map((x: any) => {
                                            return <div>
                                                <NavLink to={x.route} style={({ isActive, isPending, isTransitioning }) => {
                                                    return {
                                                        fontWeight: isActive ? "bold" : "",
                                                        color: isPending ? "red" : "black",
                                                        viewTransitionName: isTransitioning ? "slide" : "",
                                                    };
                                                }}>
                                                    <span>{x.label}</span>
                                                </NavLink>
                                            </div>
                                        }) :
                                        null
                                }
                            </AccordionPanel>
                        </AccordionItem>

                    })
                    : null}
            </Accordion>
        </Box>
    )
}

export default SidebarContent