import "../index.css";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
// components
import { Link } from "react-router-dom";
import { ServiceBox } from "../components/ServiceBox";
import { Numbers } from "../components/Numbers";
import { Welcome } from "../components/Welcome";
// images
import zee from "../../public/images/schip-rood-groot.jpg";

export const Home = () => {
  return (
    <>
      <Box bgColor="#F5F5F5">
        <Box p="70px 0 120px 0">
          <Image
            src={zee}
            objectFit="cover"
            m="0 auto"
            w="100%"
            h={{
              base: "100%",
              sm: "250px",
              md: "300px",
              lg: "350px",
              xl: "25em",
            }}
          />
          <Box
            top={{ md: "-10em" }}
            m="0 auto"
            color="#002d62"
            p={{
              base: "20px 20px 0px 20px",
            }}
            w={{ base: "100%", xl: "80%" }}
          >
            <Heading
              pb="15px"
              fontSize="2.0rem"
              w={{ base: "100%", xl: "80%" }}
            >
              Een passende oplossing voor elk hydraulisch probleem!
            </Heading>
            <Text pb="10px" color="gray" w={{ base: "100%", xl: "60%" }}>
              Kimmann Hydrauliek Service is hét bedrijf voor hydraulische
              storingen. De service kent geen grenzen! Er wordt gewerkt op land
              zee en internationaal.
            </Text>
            <Link to={"/contact"}>
              <Button bgColor="#002d62" color="white" fontWeight="normal">
                Contact
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Numbers />
      <Welcome />
      <ServiceBox />
    </>
  );
};
