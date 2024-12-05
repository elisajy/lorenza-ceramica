import {
  Box,
  Card,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  SimpleGrid,
  CardHeader,
} from "@chakra-ui/react";
import pageBgDivider from "../../assets/images/page-bg-divider.png";
import "./Inspirations.css";
import ResponsivePagination from "react-responsive-pagination";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { inspirationData } from "./Inspiration.data";

const Inspirations = () => {
  const [data, setData] = useState(inspirationData);
  const pageSize = 6;
  const totalPages = Math.ceil(inspirationData.length / pageSize);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/inspirations`)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    setData(
      inspirationData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const inspirationList = () => {
    return data.map((x: any) => {
      return (
        <Card
          key={x.id}
          variant="unstyled"
          gap="10px"
        >
          <CardHeader>
            <Heading className="title" size="md">
              {x.title}
            </Heading>
          </CardHeader>
          <Box className="card-container">
            <Image
              className="card-thumbnail"
              objectFit="cover"
              src={x.thumbnail}
              alt="post"
            />
            <Stack className="card-content" padding="10px">
              <CardBody>
                <Text className="card-desc" fontSize={{ sm:"12px", md: "14px", lg: "16px" }} py="2" color="white">{x.description}</Text>
              </CardBody>
              <CardFooter alignSelf="flex-end">
                <Button
                  variant="link"
                  color="white"
                  onClick={() => navigate(`/inspirations/article/${x.path}`)}
                >
                  READ MORE
                </Button>
              </CardFooter>
            </Stack>
          </Box>
        </Card>
      );
    });
  };

  return (
    <Box display="flex" flexDirection="column">
      <img src={pageBgDivider} alt="page-bg-divider" />
      <Heading className="title" size="lg" alignSelf="center" marginTop="30px">INSPIRATION</Heading>
      <Box maxWidth="8xl" margin="40px 80px">
        <SimpleGrid className="card-grid" spacing="50px" columns={2}>
          {inspirationList()}
        </SimpleGrid>
        <ResponsivePagination
          total={totalPages}
          current={currentPage}
          onPageChange={(page) => handlePageChange(page)}
        />
      </Box>
    </Box>
  );
};

export default Inspirations;
