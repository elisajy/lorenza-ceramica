import {
  Box,
  Card,
  StackDivider,
  VStack,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import pageBgDivider from "../../assets/images/page-bg-divider.png";
import "./Inspirations.css";
import ResponsivePagination from "react-responsive-pagination";
import { useEffect, useState } from "react";
import { inspirationData } from "./Inspiration.data";
import { useNavigate } from "react-router-dom";

const Inspirations = () => {
  const pageSize = 4;
  const totalPages = Math.round(inspirationData.length / pageSize);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState(inspirationData);
  const navigate = useNavigate();

  useEffect(() => {
    setData(
      inspirationData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )
    );
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const inspirationList = () => {
    return data.map((x: any) => {
      return (
        <Card
          key={x.id}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="unstyled"
          className="inspiration-card"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "250px" }}
            src={x.thumbnail}
            alt="post"
          />
          <Stack padding="10px">
            <CardBody>
              <Heading className="title" size="md">
                {x.title}
              </Heading>
              <Text py="2">{x.description}</Text>
            </CardBody>
            <CardFooter className="inspiration-card-btn">
              <Button
                variant="link"
                className="title"
                onClick={() => navigate(`/inspirations/${x.path}`)}
              >
                READ MORE
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      );
    });
  };

  return (
    <Box>
      <img src={pageBgDivider} alt="page-bg-divider" />
      <Box maxWidth="8xl" margin="30px 60px">
        <VStack divider={<StackDivider />} spacing="12">
          {inspirationList()}
        </VStack>
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
