import {
    ArrowBackIcon,
    ArrowForwardIcon
} from "@chakra-ui/icons";
import {
    Box,
    Card,
    CardBody,
    Divider,
    IconButton,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";
import { faCommentAlt, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useEmblaCarousel from "embla-carousel-react";
import {
    Client,
    GetPageMediaRequest,
    GetPageMediaResponse,
    PageOption,
    RequestConfig
} from "instagram-graph-api";
import { useEffect, useState } from "react";
import ReadMore from "../../components/ReadMore";
import "./LandingInstagram.css";

const LandingInstagram = () => {
  const longLivedAccessToken = process.env.REACT_APP_LL_TOKEN!;
  const pageId = process.env.REACT_APP_PAGE_ID!;
  const [limit, setLimit] = useState(
    window.innerWidth >= 992
      ? 4
      : window.innerWidth < 992 && window.innerWidth >= 576
      ? 3
      : window.innerWidth < 576 && window.innerWidth >= 500
      ? 2
      : window.innerWidth < 500
      ? 1
      : 0
  );
  const [mediaResponse, setMediaResponse] = useState<any>();
  const [post, setPost] = useState<any>([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "center",
    loop: false,
    dragFree: false,
  });
  const client: Client = new Client(longLivedAccessToken, pageId);
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
    if (width >= 992) {
      setLimit(4);
    } else if (width < 992 && width >= 576) {
      setLimit(3);
    } else if (width < 576 && width >= 500) {
      setLimit(2);
    } else if (width < 500) {
      setLimit(1);
    }

    setPost([]);
  }, [width]);

  useEffect(() => {
    const pageMediaRequest: GetPageMediaRequest = client
      .newGetPageMediaRequest()
      .withLimit(limit);

    const config: RequestConfig = pageMediaRequest.config();
    // config.params.media_type = MediaType.IMAGE;

    // console.log(config);
    pageMediaRequest.execute().then((response: GetPageMediaResponse) => {
      const data = response.getData();
      //   const imageMedia = data.filter((media) => media.media_type !== "VIDEO");
      //   if (imageMedia.length < limit) {
      //     const lackingNumber = Math.abs(imageMedia.length - limit);
      //     concatData(lackingNumber);
      //   }
      setPost(data);
      setMediaResponse(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  const concatData = (number: number) => {
    const pageMediaRequest: GetPageMediaRequest = client
      .newGetPageMediaRequest()
      .withLimit(number);
    pageMediaRequest.execute().then((response: GetPageMediaResponse) => {
      const dataConcat = response.getData();
      const concatenatedArray = post.concat(dataConcat);
      setPost(concatenatedArray);
    });
  };

  const callIGPaging = (type: any) => {
    if (type === "next") {
      const nextPage: string | undefined = mediaResponse.getPaging().getAfter();
      if (nextPage) {
        const pageMediaRequest: GetPageMediaRequest = client
          .newGetPageMediaRequest()
          .withLimit(limit);
        pageMediaRequest
          .withPaging({ option: PageOption.AFTER, value: nextPage })
          .execute()
          .then((response: GetPageMediaResponse) => {
            const data = response.getData();
            // const imageMedia = data.filter(
            //   (media) => media.media_type !== "VIDEO"
            // );
            // if (imageMedia.length < limit) {
            //   const lackingNumber = Math.abs(imageMedia.length - limit);
            //   concatData(lackingNumber);
            // }
            setPost(data);
            setMediaResponse(response);
          });
      }
    } else if (type === "prev") {
      const prevPage: string | undefined = mediaResponse
        .getPaging()
        .getBefore();
      if (prevPage) {
        const pageMediaRequest: GetPageMediaRequest = client
          .newGetPageMediaRequest()
          .withLimit(limit);
        pageMediaRequest
          .withPaging({ option: PageOption.BEFORE, value: prevPage })
          .execute()
          .then((response: GetPageMediaResponse) => {
            const data = response.getData();
            // const imageMedia = data.filter(
            //   (media) => media.media_type !== "VIDEO"
            // );
            // if (imageMedia.length < limit) {
            //   const lackingNumber = Math.abs(imageMedia.length - limit);
            //   concatData(lackingNumber);
            // }
            setPost(data);
            setMediaResponse(response);
          });
      }
    }
  };

  return (
    <>
      <section className="embla-ig">
        <div className="embla__viewport-ig" ref={emblaRef}>
          <div className="embla__container-ig">
            {post && post.length !== 0
              ? post.map((item: any) => {
                  return (
                    <>
                      {item.media_type !== "VIDEO" ? (
                        <>
                          <div className="embla__slide-ig" key={item.id}>
                            <Card maxW="sm">
                              <CardBody
                                style={{ padding: "0.5rem", height: 300 }}
                              >
                                <Image
                                  onClick={() => window.open(item.permalink)}
                                  src={item.media_url}
                                  alt={item.ig_id}
                                  borderRadius="lg"
                                />
                                <Stack mt="3" spacing="2">
                                  <Box>
                                    <FontAwesomeIcon
                                      icon={faHeart}
                                      style={{ paddingRight: 5 }}
                                    />
                                    {item.like_count}
                                    <FontAwesomeIcon
                                      icon={faCommentAlt}
                                      style={{
                                        paddingRight: 5,
                                        paddingLeft: 8,
                                      }}
                                    />
                                    {item.comments_count}
                                  </Box>
                                  <ReadMore
                                    text={item.caption}
                                    url={item.permalink}
                                    wordLimit={15}
                                  ></ReadMore>
                                </Stack>
                              </CardBody>
                              <Divider />
                            </Card>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="embla__slide-ig" key={item.id}>
                            <Card maxW="sm">
                              <CardBody
                                style={{ padding: "0.5rem", height: 300 }}
                              >
                                {/* <Image
                                  onClick={() => window.open(item.permalink)}
                                  src={item.media_url}
                                  alt={item.ig_id}
                                  borderRadius="lg"
                                /> */}
                                <Box className="placeholder-box">
                                  <Text fontSize={"md"}>
                                    View Reels on Instagram
                                  </Text>
                                </Box>
                                <Stack mt="3" spacing="2">
                                  <ReadMore
                                    text={item.caption}
                                    url={item.permalink}
                                    wordLimit={15}
                                  ></ReadMore>
                                </Stack>
                              </CardBody>
                              <Divider />
                            </Card>
                          </div>
                        </>
                      )}
                    </>
                  );
                })
              : null}
          </div>
        </div>
        <div className="button-container">
          <IconButton
            className="overlay-button"
            aria-label="Prev"
            icon={<ArrowBackIcon />}
            onClick={() => callIGPaging("prev")}
          />
          <IconButton
            className="overlay-button"
            aria-label="Next"
            icon={<ArrowForwardIcon />}
            onClick={() => callIGPaging("next")}
          />
        </div>
      </section>
    </>
  );
};

export default LandingInstagram;
