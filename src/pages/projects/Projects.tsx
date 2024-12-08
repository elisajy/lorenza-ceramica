import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import pageBgDivider from "../../assets/images/page-bg-divider.png";
import "./Projects.css";
import ResponsivePagination from "react-responsive-pagination";

const Projects = () => {
  const [data, setData] = useState([]);
  const pageSize = 6;
  const [selectedTab, setSelectedTab] = useState<string>("COMMERCIAL");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalData, setTotalData] = useState([]);
  const totalPages = useMemo(() => Math.ceil(totalData.length / pageSize), [totalData]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData("projects-commercial");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setData(totalData.slice((currentPage - 1) * pageSize, currentPage * pageSize));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const fetchData = (path: string) => {
    fetch(`${process.env.REACT_APP_API_URL}/${path}`)
      .then((response) => response.json())
      .then((data) => {
        setData(
          data.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )
        );
        setTotalData(data);
      });
  };

  const projectList = () => {
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
                  onClick={() => navigate(`/projects/article/${x.path}?origin=${selectedTab}`)}
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
      <Heading className="title" size="lg" alignSelf="center" marginTop="30px">
        <Button
          variant="link"
          className={selectedTab === 'commercial' ? "title" : "unselected"}
          onClick={() => {
            fetchData("projects-commercial");
            setSelectedTab('commercial');
          }}
        >
          COMMERCIAL
        </Button>{" "}
        |{" "}
        <Button
          variant="link"
          className={selectedTab === 'residential' ? "title" : "unselected"}
          onClick={() => {
            fetchData("projects-residential");
            setSelectedTab('residential');
          }}
        >
          RESIDENTIAL
        </Button>
      </Heading>
      <Box maxWidth="8xl" margin="40px 80px">
        {data.length > 0 ? (
          <SimpleGrid className="card-grid" spacing="50px" columns={2}>
            {projectList()}
          </SimpleGrid>
        ) : (
          <Text>No post yet.</Text>
        )}
        <ResponsivePagination
          total={totalPages}
          current={currentPage}
          onPageChange={(page) => handlePageChange(page)}
        />
      </Box>
    </Box>
  );
};

export default Projects;
