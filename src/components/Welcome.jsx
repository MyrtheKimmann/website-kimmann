import { Box, Heading, Text, Image } from "@chakra-ui/react";
// images
import bus from "../../public/images/kimmann-bus.jpg";

export const Welcome = () => {
  return (
    <>
      <Box
        display={{ md: "flex" }}
        bgColor="white"
        gap="3%"
        p="80px 20px 80px 20px"
        justifyContent="center"
        m="0 auto"
      >
        <Image
          src={bus}
          objectFit="cover"
          w="100%"
          h="auto"
          maxWidth="480px"
          m={{ base: "0 auto", md: "initial" }}
        />
        <Box w={{ base: "100%", xl: "30%" }} alignSelf="center">
          <Heading
            fontSize="1.7rem"
            color="#002d62"
            p="15px 0 10px 0"
            m="0 auto"
          >
            Welkom op de website van Kimmann Hydrauliek Service!
          </Heading>

          <Text color="gray" m="0 auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            perferendis atque veniam velit esse consectetur odio quam molestias
            maiores magnam porro iusto tempora enim similique, fugit eum modi
            numquam incidunt?
          </Text>
        </Box>
      </Box>
    </>
  );
};
