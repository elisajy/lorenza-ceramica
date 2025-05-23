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
import "./Inspirations.css";
import ResponsivePagination from "react-responsive-pagination";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Inspirations = () => {
  const [data, setData] = useState([]);
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalData, setTotalData] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const totalPages = useMemo(() => Math.ceil(totalData.length / pageSize), [totalData]);
  const navigate = useNavigate();

  useEffect(() => {
    // Handler to update the state with the new window width
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Call the handler immediately to set initial width
    handleResize();

    // Cleanup by removing the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/inspirations`)
      .then((response) => response.json())
      .then((data) => {
        setTotalData(data);
        setData(
          data.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setData(
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

  const inspirationList = () => {
    return data.map((x: any) => {
      return (
        <Card
          key={x.id}
          variant="unstyled"
          gap="10px"
          className="card-box"
        >
          <CardHeader display="flex" justifyContent="start">
            <Heading className="title card-title" size="md">
              {x.title}
            </Heading>
          </CardHeader>
          <Box className="card-container">
            <Image
              // className="card-thumbnail"
              objectFit="cover"
              src={x.thumbnail}
              alt="post"
              onClick={() => navigate(`/inspirations/${x.path}`)}
            />
            <Stack className="card-content" padding="10px">
              <CardBody
                onClick={() => navigate(`/inspirations/${x.path}`)}
              >
                <Text className="card-desc" fontSize={{ sm:"12px", md: "14px", lg: "16px" }} py="2" color="white">{x.description}</Text>
              </CardBody>
              <CardFooter alignSelf="flex-end">
                <Button
                  variant="link"
                  color="white"
                  onClick={() => navigate(`/inspirations/${x.path}`)}
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
      <Heading className="title" size="lg" alignSelf="center" marginTop="30px">INSPIRATION</Heading>
      <Box maxWidth="8xl" margin={width < 992 ? "40px 10px" : "40px 80px"} alignSelf="center">
        <SimpleGrid className="card-grid" rowGap="50px" columnGap="80px" columns={2}>
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
