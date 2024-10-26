import React, { ReactNode } from 'react'
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Link,
} from '@chakra-ui/react'
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import SidebarContent from './SidebarContent'
import "./Sidebar.css";
import { NavLink } from 'react-router-dom'



const ProductSidebar = () => {
    return (
        <Box className='product-sidebar'>
            {/* <Link
                as={NavLink}
                _activeLink={{
                    color: useColorModeValue('violet.50', 'white'),
                    bgColor: useColorModeValue('violet.5', 'gray.700')
                }}>
                Text
            </Link> */}
            <SidebarContent></SidebarContent>
        </Box>
    )
}

export default ProductSidebar;