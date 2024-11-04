import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import './Products.css';
import { ChevronRightIcon } from "@chakra-ui/icons";
import { dummyProducts } from "../../helper/HeaderMenu";
import { useEffect } from "react";

const CategoryPage = () => {
    const { category, subcategory } = useParams();
    const navigate = useNavigate();
    const capitalizeFirstLetters = (string: any) => {
        if (!!string) {
            return string.split(' ').map((word: any) =>
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
        } else {
            return string
        }
    }
    const viewProductDetails = (code: any) => {
        navigate(`/products/${category}/${subcategory}/${code}`);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Box className="category-title">
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/products'>Products</BreadcrumbLink>
                    </BreadcrumbItem>

                    {
                        !!category &&
                        <BreadcrumbItem>
                            <BreadcrumbLink>{capitalizeFirstLetters(category)}</BreadcrumbLink>
                        </BreadcrumbItem>
                    }

                    {
                        !!subcategory &&
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href={`/products/${category}/${subcategory}`}>{capitalizeFirstLetters(subcategory)}</BreadcrumbLink>
                        </BreadcrumbItem>
                    }

                </Breadcrumb>
            </Box>
            <Box className="product-items-block">
                <SimpleGrid minChildWidth='300px' spacing='40px'>
                    {
                        dummyProducts && dummyProducts.length !== 0 ?
                            dummyProducts.map((x: any) => {
                                if (!!subcategory) {
                                    if ((x.prdSubcategory).toLowerCase() === subcategory?.toLowerCase()) {
                                        return <Card maxW='xs' borderRadius={'lg'} align='center' style={{ cursor: 'pointer' }} onClick={() => viewProductDetails(x.prdCode)}>
                                            <CardBody className="product-card">
                                                <Image
                                                    src={require(`../../assets/mock-media/dummy-products/${x.prdCode}.jpg`)}
                                                    alt={x.prdName}
                                                    borderRadius={'10px 10px 0 0'}
                                                />
                                            </CardBody>
                                            <CardFooter style={{ padding: '10px' }}>
                                                <Box className="product-card-footer">
                                                    <Text fontSize='xl'>{x.prdName}</Text>
                                                    <Text fontSize='md'>{x.prdCode}</Text>
                                                </Box>
                                            </CardFooter>
                                        </Card>
                                    }
                                }

                            })
                            :
                            null
                    }

                </SimpleGrid>
            </Box>
        </>
    );
};

export default CategoryPage;
