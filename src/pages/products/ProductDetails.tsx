import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, StackDivider, Text, useToast, VStack } from '@chakra-ui/react';
import { EmblaOptionsType } from 'embla-carousel';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductImages from './ProductImages';
import './Products.css';
import { ADD_ITEM, useCartContext } from '../../hooks/cart-context/CartContext';

const ItemDetail = () => {
    const toast = useToast();
    const { category, subcategory, name, code } = useParams();
    const [selectedProduct, setSelectedProduct] = useState<any>();
    const [prdImages, setPrdImages] = useState<any>([]);
    const [isMobile, setIsMobile] = useState(false);
    const { cartDispatch } = useCartContext();
    const capitalizeFirstLetters = (string: any) => {
        if (!!string) {
            return string.split(' ').map((word: any) =>
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
        } else {
            return string
        }
    }

    const OPTIONS: EmblaOptionsType = {}

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetch(`${process.env.REACT_APP_API_URL}/product-details/${name}/${code}`)
            .then((response) => response.json())
            .then((data) => {
                setSelectedProduct(data);
                setPrdImages(data.images ?? []);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const userAgent = navigator.userAgent;
        if (/android/i.test(userAgent)) {
            setIsMobile(true);
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addToCart = () => {
        cartDispatch({
            type: ADD_ITEM,
            payload: selectedProduct,
        });
        toast({
            title: 'Successful!',
            description: 'Item added to cart.',
            status: 'success',
            position: 'top',
            duration: 900,
            isClosable: true,
        });
    };

    const onClickInquiry = () => {
        const phoneNumber = process.env.REACT_APP_BUSINESS_CONTACT;
        let message = "Hi, I would like to inquire about this product: ";
        message = message.concat(
            `${selectedProduct.prdName} (*${selectedProduct.prdCode}*)`
        )
        const url = `https://${isMobile ? 'api' : 'web'}.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
            message
        )}&app_absent=0`;
        window.open(url, "_blank");
    };

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
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/products/${category}/${subcategory}`}>{capitalizeFirstLetters(subcategory)}</BreadcrumbLink>
                        </BreadcrumbItem>
                    }

                    {
                        !!code &&
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href={`/products/${category}/${subcategory}/${code}`}>{capitalizeFirstLetters(code)}</BreadcrumbLink>
                        </BreadcrumbItem>
                    }

                </Breadcrumb>
            </Box>
            {
                selectedProduct &&
                <Box className='product-details-block'>
                    <Box className='product-image-block'>
                        <ProductImages slides={prdImages} options={OPTIONS}></ProductImages>
                    </Box>
                    <Box className='product-info-block'>
                        <VStack divider={<StackDivider borderColor='gray.200' />}
                            spacing={4}
                            align='stretch'>
                            <Box>
                                <Text color={'#0c478a'} fontWeight={700} fontSize='3xl'>{selectedProduct.prdName}</Text>
                                <br />
                                {
                                    category && subcategory &&
                                    <Text fontSize='lg'>Product Category: {category} / {subcategory}</Text>
                                }
                                {
                                    selectedProduct.prdCode &&
                                    <Text fontSize='lg'>Code: {selectedProduct.prdCode}</Text>
                                }
                                {
                                    selectedProduct.prdVariation &&
                                    <Text fontSize='lg'>Variation: {selectedProduct.prdVariation}</Text>
                                }
                                {
                                    selectedProduct.prdSize &&
                                    <Text fontSize='lg'>Size: {selectedProduct.prdSize}</Text>
                                }
                                {
                                    selectedProduct.prdColor &&
                                    <Text fontSize='lg'>Color: {selectedProduct.prdColor}</Text>
                                }
                                {
                                    selectedProduct.prdFinish &&
                                    <Text fontSize='lg'>Finish: {selectedProduct.prdFinish}</Text>
                                }
                                {
                                    selectedProduct.thickness &&
                                    <Text fontSize='lg'>Thickness: {selectedProduct.thickness}</Text>
                                }
                                <br />
                                <Text fontSize='xl' color={'#0c478a'} fontWeight={600}>Product Description</Text>
                                {
                                    selectedProduct.prdDesc &&
                                    <Text style={{ textAlign: 'justify' }} fontSize='lg'>{selectedProduct.prdDesc}</Text>
                                }
                                <br />
                            </Box>
                            <Box>
                                <VStack>
                                    <Button onClick={addToCart} className="button-size" style={{ backgroundColor: '#ff6e04', color: 'white', width: '150px' }} variant='solid'>
                                        Add To Cart
                                    </Button>
                                    <Button onClick={onClickInquiry} className="button-size" style={{ backgroundColor: '#ff6e04', color: 'white', width: '150px' }} variant='solid'>
                                        Product Enquiry
                                    </Button>
                                </VStack>
                            </Box>
                        </VStack>
                    </Box>
                </Box>
            }

        </>
    );
};

export default ItemDetail;
