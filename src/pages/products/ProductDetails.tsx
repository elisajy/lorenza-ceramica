import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  StackDivider,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { EmblaOptionsType } from "embla-carousel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "./ProductImages";
import "./Products.css";
import { useCartContext } from "../../hooks/cart-context/CartContext";

const ItemDetail = () => {
  const toast = useToast();
  const { category, subcategory, name, code } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<any>();
  const [prdImages, setPrdImages] = useState<any>([]);
  const [mockImages, setMockImages] = useState<any>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [categories, setCategories] = useState<any>([]);
  const { addItem }: any = useCartContext();
  const capitalizeFirstLetters = (string: any) => {
    if (!!string) {
      return string
        .split(" ")
        .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else {
      return string;
    }
  };

  const OPTIONS: EmblaOptionsType = {};

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(`${process.env.REACT_APP_API_URL}/product-details/${name}/${code}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedProduct(data);
        setPrdImages(data.images ?? []);
        setMockImages(data.mockedImages ?? []);
      });

    fetch(`${process.env.REACT_APP_API_URL}/productsSideNavs`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
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
    // cartDispatch({
    //   type: ADD_ITEM,
    //   payload: selectedProduct,
    // });
    addItem(selectedProduct);
    toast({
      title: "Successful!",
      description: "Item added to cart.",
      status: "success",
      position: "top",
      duration: 900,
      isClosable: true,
    });
  };

  const onClickInquiry = () => {
    const phoneNumber = process.env.REACT_APP_BUSINESS_CONTACT;
    let message = "Hi, I would like to inquire about this product: ";
    message = message.concat(
      `${selectedProduct.prdName} (*${selectedProduct.prdCode}*)`
    );
    const url = `https://${
      isMobile ? "api" : "web"
    }.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}&app_absent=0`;
    window.open(url, "_blank");
  };

  const formatUrl = () => {
    if (!!subcategory) {
      const sideNav = categories.find((x: any) => x.route === `/products/${category}`);
      if (sideNav) return sideNav.prds.length > 0 ? sideNav.prds[0].route : `/products/${category}/${subcategory}`;
    }
    return `/products/${category}`;
  }

  return (
    <>
      <Box className="category-title">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem fontSize={13}>
            <BreadcrumbLink href="/products/tiles/all-products">Products</BreadcrumbLink>
          </BreadcrumbItem>

          {!!category && (
            <BreadcrumbItem fontSize={13}>
              <BreadcrumbLink href={formatUrl()}>
                {capitalizeFirstLetters(category)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}

          {!!subcategory && (
            <BreadcrumbItem fontSize={13}>
              <BreadcrumbLink href={`/products/${category}/${subcategory}`}>
                {capitalizeFirstLetters(subcategory)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}

          {!!code && (
            <BreadcrumbItem fontSize={13} isCurrentPage>
              <BreadcrumbLink
                href={`/products/${category}/${subcategory}/${code}`}
              >
                {capitalizeFirstLetters(code)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      </Box>
      {selectedProduct && (
        <>
          <Box className="product-details-block">
            <Box className="product-image-block">
              <ProductImages
                slides={prdImages}
                options={OPTIONS}
              ></ProductImages>
            </Box>
            <Box className="product-info-block">
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
              >
                <Box>
                  <Text color={"#0c478a"} fontWeight={700} fontSize="3xl">
                    {selectedProduct.prdName}
                  </Text>
                  <br />
                  {category && subcategory && (
                    <Text fontSize="lg">
                      Product Category: {category} / {subcategory}
                    </Text>
                  )}
                  {selectedProduct.prdCode && (
                    <Text fontSize="lg">Code: {selectedProduct.prdCode}</Text>
                  )}
                  {selectedProduct.prdVariation && (
                    <Text fontSize="lg">
                      Variation: {selectedProduct.prdVariation}
                    </Text>
                  )}
                  {selectedProduct.prdSize && (
                    <Text fontSize="lg">Size: {selectedProduct.prdSize}</Text>
                  )}
                  {selectedProduct.prdColor && (
                    <Text fontSize="lg">Color: {selectedProduct.prdColor}</Text>
                  )}
                  {selectedProduct.prdFinish && (
                    <Text fontSize="lg">
                      Finish: {selectedProduct.prdFinish}
                    </Text>
                  )}
                  {selectedProduct.thickness && (
                    <Text fontSize="lg">
                      Thickness: {selectedProduct.thickness}
                    </Text>
                  )}
                  <br />
                  <Text fontSize="xl" color={"#0c478a"} fontWeight={600}>
                    Product Description
                  </Text>
                  {selectedProduct.prdDesc && (
                    <Text style={{ textAlign: "left" }} fontSize="lg">
                      {selectedProduct.prdDesc}
                    </Text>
                  )}
                  <br />
                  <Text style={{ textAlign: "left" }} fontSize="lg">
                    * Images use are for illustration purposes
                  </Text>
                  <br />
                </Box>
                <Box>
                  <VStack>
                    <Button
                      onClick={addToCart}
                      className="button-size"
                      style={{
                        backgroundColor: "#ff6e04",
                        color: "white",
                        width: "150px",
                      }}
                      variant="solid"
                    >
                      Add To List
                    </Button>
                    <Button
                      onClick={onClickInquiry}
                      className="button-size"
                      style={{
                        backgroundColor: "#ff6e04",
                        color: "white",
                        width: "150px",
                      }}
                      variant="solid"
                    >
                      Product Enquiry
                    </Button>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Box>
          <Divider />
          {mockImages && mockImages.length > 0 && (
            <Box className="product-image-block" display="flex" flexDirection="column" alignItems="center">
              <Text
                color={"#0c478a"}
                fontWeight={700}
                fontSize="3xl"
              >
                Product Details
              </Text>
              <br />
              <>
                {mockImages && mockImages.length > 0
                  ? mockImages.map((x: any, i: number) => (
                      <>
                        <div
                          style={{
                            marginBottom: 30,
                            paddingLeft: 40,
                            paddingRight: 40,
                          }}
                        >
                          <img src={x} alt={String(i)} />
                        </div>
                      </>
                    ))
                  : null}
              </>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default ItemDetail;
