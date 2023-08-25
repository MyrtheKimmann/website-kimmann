import { Box, Text, Heading } from "@chakra-ui/react";
// ui
import { Seperator } from "../ui/Seperator";
// components
import { InfoBox } from "../components/InfoBox";
import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <>
      <Box
        display={{ md: "flex" }}
        justifyContent="center"
        bgColor="white"
        gap="3%"
        p="150px 20px 0 20px"
      >
        <Box>
          <Heading fontSize="1.7rem" pb="10px" color="#002d62">
            Contact
          </Heading>
          <Seperator />

          <Text color="gray" p="10px 0 10px 0" maxWidth="450px">
            Bel voor hydraulische storingen. Voor andere vragen neem gerust
            hieronder contact op. We proberen zo snel mogelijk te reageren!
          </Text>
          <Form />
        </Box>
        <InfoBox />
      </Box>
    </>
  );
};