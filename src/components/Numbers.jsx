import { Box, Text } from "@chakra-ui/react";

export const Numbers = () => {
  return (
    <>
      <Box
        bgColor="#002d62"
        color="white"
        display="flex"
        flexWrap="wrap"
        flexDirection={{ base: "column", sm: "row" }}
        gap="40px"
        justifyContent="center"
        textAlign="center"
        p="40px 0 40px 0"
      >
        <Box>
          <Text fontSize="2.0rem" fontWeight="700">
            35+
          </Text>
          jaar ervaring
        </Box>

        <Box>
          <Text fontSize="2.0rem" fontWeight="700">
            8
          </Text>
          vaste klanten
        </Box>

        <Box>
          <Text fontSize="2.0rem" fontWeight="700">
            2.5K
          </Text>
          storingen verholpen
        </Box>
      </Box>
    </>
  );
};
