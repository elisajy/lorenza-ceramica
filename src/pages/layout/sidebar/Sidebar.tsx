import {
    Box
} from '@chakra-ui/react'
import "./Sidebar.css"
import SidebarContent from './SidebarContent'



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