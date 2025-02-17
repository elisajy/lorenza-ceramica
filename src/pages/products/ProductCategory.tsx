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
import { useEffect, useMemo, useState, useTransition } from "react";
import ResponsivePagination from "react-responsive-pagination";

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState<any>([]);
  const [isPending, startTransition] = useTransition();
  const [categories, setCategories] = useState<any>([]);
  const pageSize = window.innerWidth >= 1270 ? 15 : 14;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalData, setTotalData] = useState([]);
  const totalPages = useMemo(() => Math.ceil(totalData.length / pageSize), [totalData]);
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
    startTransition(() => {
      setProducts(null);
      setCurrentPage(1);
    });

    filterProducts();

    fetch(`${process.env.REACT_APP_API_URL}/productsSideNavs`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, [startTransition, category, subcategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const filterProducts = () => {
    const current = 1;
    fetch(
      `${process.env.REACT_APP_API_URL}/products/${subcategory ?? category}`
    )
      .then((response) => response.json())
      .then((data) => {
        startTransition(() => {
          setTotalData(data);
          setProducts(
            data.slice(
              (current - 1) * pageSize,
              current * pageSize
            )
          );
        });
      });
  };

  useEffect(() => {
    setProducts(
      totalData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const formatUrl = () => {
    if (!!subcategory) {
      const sideNav = categories.find(
        (x: any) => x.route === `/products/${category}`
      );
      if (sideNav)
        return sideNav.prds.length > 0
          ? sideNav.prds[0].route
          : `/products/${category}/${subcategory}`;
    }
    return `/products/${category}`;
  };

  return (
    <>
      <Box className="category-title">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/products/tiles/all-products">
              Products
            </BreadcrumbLink>
          </BreadcrumbItem>

          {!!category && (
            <BreadcrumbItem>
              <BreadcrumbLink href={formatUrl()}>
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
      {!isPending && (
        <Box className="product-items-block">
          <SimpleGrid className="products-grid" spacing="40px">
            {products && products.length !== 0 ? (
              products.map((x: any) => {
                return (
                  <Card
                    className="product-card-body "
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
                      <div className="prd-images">
                        {x.images && x.images.length > 0 ? (
                          <Image
                            className="prd-image-main image-item-prds2"
                            src={x.images[0]}
                            alt={x.prdName}
                            borderRadius={"10px 10px 0 0"}
                            padding="10px"
                            fallbackSrc='https://via.placeholder.com/150'
                          />
                        ) : (
                          <Image
                            className="prd-image-main image-item-prds2"
                            src={require(`../../assets/images/no-image-available.png`)}
                            alt={x.prdName}
                            borderRadius={"10px 10px 0 0"}
                            padding="10px"
                            fallbackSrc='https://via.placeholder.com/150'
                          />
                        )}
                        {x.mockedImages && x.mockedImages.length > 0 ? (
                          <Image
                            className="prd-image-hover image-item-prds2"
                            src={x.mockedImages[0]}
                            alt={x.prdName}
                            borderRadius={"10px 10px 0 0"}
                            padding="10px"
                            fallbackSrc='https://via.placeholder.com/150'
                          />
                        ) : null}
                      </div>
                    </CardBody>
                    <CardFooter style={{ padding: "10px" }}>
                      <Box className="product-card-footer">
                        <Text fontSize="md">{x.prdName}</Text>
                        <Text fontSize="sm">{x.prdSize}</Text>
                        <Text fontSize="sm">{x.prdCode}</Text>
                      </Box>
                    </CardFooter>
                  </Card>
                );
              })
            ) : (
              <div>No product yet.</div>
            )}
          </SimpleGrid>
          <ResponsivePagination
            total={totalPages}
            current={currentPage}
            onPageChange={(page) => handlePageChange(page)}
          />
        </Box>
      )}
    </>
  );
};

export default CategoryPage;
