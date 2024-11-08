import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  CardFooter,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import "./Products.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState<any>([]);
  const navigate = useNavigate();
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

  const viewProductDetails = (name: any, code: any) => {
    if (subcategory)
      navigate(`/products/${category}/${subcategory}/${name}/${code}`);
    else navigate(`/products/${category}/${name}/${code}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(
      `${process.env.REACT_APP_API_URL}/products/${subcategory ?? category}`
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box className="category-title">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>

          {!!category && (
            <BreadcrumbItem>
              <BreadcrumbLink>
                {capitalizeFirstLetters(category)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}

          {!!subcategory && (
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href={`/products/${category}/${subcategory}`}>
                {capitalizeFirstLetters(subcategory)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      </Box>
      <Box className="product-items-block">
        <SimpleGrid minChildWidth="300px" spacing="40px">
          {products && products.length !== 0
            ? products.map((x: any) => {
                return (
                  <Card
                    maxW="xs"
                    borderRadius={"lg"}
                    align="center"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      viewProductDetails(
                        x.prdName,
                        x.prdCode !== "-" ? x.prdCode : x.prdColor
                      )
                    }
                  >
                    <CardBody className="product-card">
                      {x.images && x.images.length > 0 ? (
                        <Image
                          src={x.images[0]}
                          alt={x.prdName}
                          borderRadius={"10px 10px 0 0"}
                        />
                      ) : (
                        <Image
                          src={require(`../../assets/images/no-image-available.png`)}
                          alt={x.prdName}
                          borderRadius={"10px 10px 0 0"}
                        />
                      )}
                    </CardBody>
                    <CardFooter style={{ padding: "10px" }}>
                      <Box className="product-card-footer">
                        <Text fontSize="xl">{x.prdName}</Text>
                        <Text fontSize="md">{x.prdCode}</Text>
                      </Box>
                    </CardFooter>
                  </Card>
                );
              })
            : null}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default CategoryPage;
