import { Box, Text, Image, Heading } from "@chakra-ui/react";
import { projects } from "../utils/data";
// ui
import { Seperator } from "../ui/Seperator";

export const Projecten = () => {
  return (
    <>
      <Box p="150px 20px 20px 20px" bgColor="#002d62">
        <Box m="0 auto" w="50%" textAlign="center" color="white">
          <Heading fontSize="1.7rem" pb="10px">
            Projecten
          </Heading>
          <Seperator margin={"0 auto"} />
          <Text p="10px 0 80px 0">
            Dit zijn projecten die Hans recent heeft afgesloten
          </Text>
        </Box>

        {projects.map((project) => (
          <Box
            key={project.id}
            m="0 auto"
            bgColor="#F5F5F5"
            w={{ base: "100%", lg: "50%" }}
            mb="100px"
          >
            <Box display={{ md: "flex" }} justifyContent="center" gap="5%">
              <Image
                src={project.image}
                m={{ base: "0 auto", md: "initial" }}
                objectFit="cover"
                w="100%"
                h="auto"
                maxWidth="300px"
              />
              <Box
                m={{ base: "0 auto", lg: "initial" }}
                w={{ base: "100%", lg: "70%" }}
                p="20px"
              >
                <Text color="#002d62" fontSize="2.5rem">
                  {project.number}
                </Text>
                <Text fontWeight="700">{project.title}</Text>
                <Text color="gray">{project.text}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
