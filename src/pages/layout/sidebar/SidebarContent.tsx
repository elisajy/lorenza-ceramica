import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Text
} from '@chakra-ui/react';
import "./Sidebar.css";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';


const SidebarContent = () => {
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/productsSideNavs`)
            .then((response) => response.json())
            .then((data) => setCategories(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box>

            <Accordion defaultIndex={[0]} allowMultiple>
                {categories && categories.length !== 0
                    ? categories.map((item: any) => {
                        return <AccordionItem>
                            <h1>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        {item.prds && item.prds.length === 0
                                            ? <NavLink to={item.route} style={({ isActive, isPending, isTransitioning }) => {
                                                return {
                                                    fontWeight: isActive ? "bold" : "",
                                                    color: isPending ? "red" : "black",
                                                    viewTransitionName: isTransitioning ? "slide" : "",
                                                };
                                            }}>
                                                <Text fontSize={'xl'} fontWeight={600} color={'#0c478a'}>{item.label}</Text>
                                            </NavLink>
                                            : <Text fontSize={'xl'} fontWeight={600} color={'#0c478a'}>{item.label}</Text>}
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
                                                    <Text fontSize={'lg'} color={'#143e6e'}>{x.label}</Text>
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