import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import pageBgDivider from "../../assets/images/page-bg-divider.png";
import "../inspirations/Inspirations.css";
import ResponsivePagination from "react-responsive-pagination";

const Projects = () => {
  const [data, setData] = useState([]);
  const pageSize = 6;
  const totalPages = useMemo(() => Math.ceil(data.length / pageSize), [data]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData("projects-commercial");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setData(data.slice((currentPage - 1) * pageSize, currentPage * pageSize));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const fetchData = (path: string) => {
    fetch(`${process.env.REACT_APP_API_URL}/${path}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  return (
    <Box display="flex" flexDirection="column">
      <img src={pageBgDivider} alt="page-bg-divider" />
      <Heading className="title" size="lg" alignSelf="center" marginTop="30px">
        <Button
          variant="link"
          className="title"
          onClick={() => fetchData("projects-commercial")}
        >
          COMMERCIAL
        </Button>{" "}
        |{" "}
        <Button
          variant="link"
          className="title"
          onClick={() => fetchData("projects-residential")}
        >
          RESIDENTIAL
        </Button>
      </Heading>
      <Box maxWidth="8xl" margin="40px 80px">
        {data.length > 0 ? (
          <SimpleGrid className="card-grid" spacing="50px" columns={2}>
            {}
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
