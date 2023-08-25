import { Box, Heading, Text } from "@chakra-ui/react";
import "../index.css";
// icons
import { MdArrowOutward } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";
import { GiMagnifyingGlass } from "react-icons/gi";

// ui
import { Seperator } from "../ui/Seperator";

export const ServiceBox = () => {
  return (
    <>
      <Heading textAlign="center" pb="10px" color="#002d62" fontSize="1.7rem">
        Diensten
      </Heading>
      <Seperator margin="0 auto" />

      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        gap="10px"
        justifyContent="center"
        bgColor="white"
        p="40px 25px 0 25px"
      >
        <Box
          p="40px"
          textAlign="center"
          w="300px"
          color="#002d62"
          bgColor="#F5F5F5"
        >
          <VscTools className="service-icon" />
          <Heading as="h4" size="sm" pt="20px">
            Storingen verhelpen
          </Heading>
          <Text color="gray" pt="10px">
            Gaat vaak samen met het achterhalen van de oorzaak die dieper ligt,
            hiermee kan vaak een systeem beter en meer betrouwbaar worden
            gemaakt.
          </Text>
        </Box>

        <Box p="40px" textAlign="center" w="300px" bgColor="#F5F5F5">
          <MdArrowOutward className="service-icon" />
          <Heading as="h4" size="sm" pt="20px">
            Optimaliseren
          </Heading>
          <Text color="gray" pt="10px">
            Systemen die al wat langer draaien met verouderde technieken kunnen
            vaak vrij simpel worden aangepast waardoor een hoger rendement
            haalbaar is. De kosten voor de aanpassingen zijn vaak snel
            terugverdient.
          </Text>
        </Box>

        <Box p="40px" textAlign="center" w="300px" bgColor="#F5F5F5">
          <GiMagnifyingGlass className="service-icon" />
          <Heading as="h4" size="sm" pt="20px">
            Onderhoud & inspectie
          </Heading>
          <Text color="gray" pt="10px">
            Bij adequaat onderhoud kan vaak stilstand worden voorkomen.
            Inspectie ter plaatse zal.
          </Text>
        </Box>

        <Box p="40px" textAlign="center" w="300px" bgColor="#F5F5F5">
          <TbNotes className="service-icon" />
          <Heading as="h4" size="sm" pt="20px">
            Testen
          </Heading>
          <Text color="gray" pt="10px">
            Het testen van systemen wordt uitgevoerd met speciale
            meetgereedschappen, waarmee systeemcondities zichtbaar worden
            gemaakt
          </Text>
        </Box>
      </Box>
    </>
  );
};
