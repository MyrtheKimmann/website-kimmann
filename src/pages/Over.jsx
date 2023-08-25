import { Box, Text, Heading, Image } from "@chakra-ui/react";
// components
import { Values } from "../components/Values";
// images
import aruba from "../../public/images/v-aruba-kort.jpg";
export const Over = () => {
  return (
    <>
      <Box
        display={{ md: "flex" }}
        justifyContent="center"
        p={{ base: "70px 0px 0 0px", md: "70px 0px 0 0px" }}
        verticalAlign="center"
        bgColor="#002d62"
      >
        <Image
          src={aruba}
          w="100%"
          h="auto"
          maxWidth="550px"
          m={{ base: "0 auto", md: "initial" }}
        />
        <Box
          bgColor="#002d62"
          m={{ base: "0 auto", md: "initial" }}
          h="820px"
          color="white"
          p={{ base: "200px 40px 0 40px", lg: "200px 300px 0 100px" }}
        >
          <Heading fontSize="2.0rem" fontWeight="700" w="60%" pb="15px">
            Over Kimmann Hydrauliek Service
          </Heading>
          <Text>
            Hydrauliek Service is een eenmanszaak die gestart is door Hans
            Kimmann. Hij zit nu inmiddels 35 jaar in de hydrauliek. Hij geniet
            nog elke dag van dit werk, het is zijn grote passie om oorzaken te
            vinden van storingen, deze nauwkeurig op te lossen zodat de
            hydraulische installatie weer een lange tijd in goede werking kan
            draaien.
          </Text>
        </Box>
      </Box>
      <Values />
    </>
  );
};
