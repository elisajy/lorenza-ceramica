import {
    Box
} from '@chakra-ui/react'
import "./Sidebar.css"
import SidebarContent from './SidebarContent'



const ProductSidebar = () => {
    return (
        <Box className='product-sidebar'>
            <SidebarContent></SidebarContent>
        </Box>
    )
}

export default ProductSidebar;