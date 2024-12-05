import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const InspirationSidebar = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/inspirations`)
      .then((response) => response.json())
      .then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inspirationList = () => {
    return data.map((x: any) => {
      return (
        <Card key={x.id} variant="unstyled" gap="10px" width="280px" background="#FAFAFA" paddingBottom="20px">
          <CardHeader background="#FAFAFA">
            <Text color="gray">{x.title}</Text>
          </CardHeader>
          <Box className="sidebar-card-container">
            <Image
              className="sidebar-card-thumbnail"
              objectFit="cover"
              src={x.thumbnail}
              alt="post"
            />
            <Stack className="sidebar-card-content" padding="10px">
              <CardBody>
                <Text className="sidebar-card-desc" py="2" color="white">
                  {x.description}
                </Text>
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
    <Box className="inspiration-sidebar" background="#FAFAFA" width="500px">
      <Box background="#FAFAFA" display="flex" flexDirection="column" alignItems="center">
        <Heading className="title" fontSize="2xl" padding="20px 0">INSPIRATIONS</Heading>
        {inspirationList()}
      </Box>
    </Box>
  );
};

export default InspirationSidebar;
