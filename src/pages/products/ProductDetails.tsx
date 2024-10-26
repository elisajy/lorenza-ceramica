import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, StackDivider, Text, VStack } from '@chakra-ui/react';
import { EmblaOptionsType } from 'embla-carousel';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyProducts } from '../../helper/HeaderMenu';
import ProductImages from './ProductImages';
import './Products.css';
import { ADD_ITEM, useCartContext } from '../../hooks/cart-context/CartContext';

const ItemDetail = () => {
    const { category, subcategory, code } = useParams();
    const [selectedProduct, setSelectedProduct] = useState<any>();
    const [prdImages, setPrdImages] = useState<any>([]);
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
        let imageSlides: any[] = [];
        const x = dummyProducts.find((item: any) => {
            if (!!code) {
                if ((item.prdCode).toLowerCase() === code.toLowerCase()) {
                    imageSlides.push(item);
                    return item
                }
            }
        });
        setSelectedProduct(x);
        setPrdImages(imageSlides);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code]);

    const addToCart = () => {
        cartDispatch({
            type: ADD_ITEM,
            payload: selectedProduct,
        });
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
                                    selectedProduct.prdCategory && selectedProduct.prdSubcategory &&
                                    <Text fontSize='lg'>Product Category: {selectedProduct.prdCategory} / {selectedProduct.prdSubcategory}</Text>
                                }
                                {
                                    selectedProduct.prdCode &&
                                    <Text fontSize='lg'>Code: {selectedProduct.prdCode}</Text>
                                }
                                {
                                    selectedProduct.prdVariation &&
                                    <Text fontSize='lg'>Code: {selectedProduct.prdVariation}</Text>
                                }
                                {
                                    selectedProduct.prdSize &&
                                    <Text fontSize='lg'>Size: {selectedProduct.prdSize}</Text>
                                }
                                {
                                    selectedProduct.color &&
                                    <Text fontSize='lg'>Size: {selectedProduct.color}</Text>
                                }
                                {
                                    selectedProduct.finish &&
                                    <Text fontSize='lg'>Size: {selectedProduct.finish}</Text>
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
                                    <Button onClick={addToCart} style={{ backgroundColor: '#ff6e04', color: 'white', width: '150px' }} variant='solid'>
                                        Add To Cart
                                    </Button>
                                    <Button style={{ backgroundColor: '#ff6e04', color: 'white', width: '150px' }} variant='solid'>
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
