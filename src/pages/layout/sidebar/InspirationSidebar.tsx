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
import { useArticleContext } from "../../../hooks/article-context/ArticleContext";

interface Props {
  // inspirations | commercial | residential
  origin: string
}

const InspirationSidebar = ({ origin }: Props) => {
  const { articleState } = useArticleContext();
  const [data, setData] = useState([]);
  const [height, setHeight] = useState(articleState.height || 2252);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${origin === 'inspirations' ? origin : `projects-${origin}`}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { 
    setHeight(articleState.height); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleState.height]);

  const inspirationList = () => {
    return data.map((x: any) => {
      return (
        <Card key={x.id} variant="unstyled" gap="10px" width="280px" background="#FAFAFA" paddingBottom="20px">
          <CardHeader background="#FAFAFA">
            <Text color="gray">{x.title}</Text>
          </CardHeader>
          <Box className="sidebar-card-container">
            <Image
              // className="sidebar-card-thumbnail"
              objectFit="cover"
              src={x.thumbnail}
              alt="post"
              onClick={() => navigate(`/${origin === 'inspirations' ? origin : 'projects'}/${x.path?.replace('/', '')}${origin === 'inspirations' ? '' : `?origin=${origin}`}`)}
            />
            <Stack className="sidebar-card-content" padding="10px">
              <CardBody
                onClick={() => navigate(`/${origin === 'inspirations' ? origin : 'projects'}/${x.path?.replace('/', '')}${origin === 'inspirations' ? '' : `?origin=${origin}`}`)}
              >
                <Text className="sidebar-card-desc" py="2" color="white">
                  {x.description}
                </Text>
              </CardBody>
              <CardFooter alignSelf="flex-end">
                <Button
                  variant="link"
                  color="white"
                  onClick={() => navigate(`/${origin === 'inspirations' ? origin : 'projects'}/${x.path?.replace('/', '')}${origin === 'inspirations' ? '' : `?origin=${origin}`}`)}
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
      <Box background="#FAFAFA" display="flex" flexDirection="column" alignItems="center" padding="0 40px" overflowY="auto" height={`${height}px`}>
        <Heading className="title" fontSize="2xl" padding="30px 0">{origin.toUpperCase()}</Heading>
        {inspirationList()}
      </Box>
    </Box>
  );
};

export default InspirationSidebar;
