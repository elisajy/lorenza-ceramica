import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import ResponsivePagination from "react-responsive-pagination";

const Projects = () => {
  const [data, setData] = useState([]);
  const pageSize = 6;
  const [selectedTab, setSelectedTab] = useState<string>("commercial");
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
              onClick={() => navigate(`/projects/${x.path}?origin=${selectedTab}`)}
            />
            <Stack className="card-content" padding="10px">
              <CardBody
                onClick={() => navigate(`/projects/${x.path}?origin=${selectedTab}`)}
              >
                <Text className="card-desc" fontSize={{ sm:"12px", md: "14px", lg: "16px" }} py="2" color="white">{x.description}</Text>
              </CardBody>
              <CardFooter alignSelf="flex-end">
                <Button
                  variant="link"
                  color="white"
                  onClick={() => navigate(`/projects/${x.path}?origin=${selectedTab}`)}
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
      <Box maxWidth="8xl" margin={width < 992 ? "40px 10px" : "40px 80px"} alignSelf="center">
        {data.length > 0 ? (
          <SimpleGrid className="card-grid" rowGap="50px" columnGap="80px"  columns={2}>
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
