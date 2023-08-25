import { Box, UnorderedList, ListItem, Heading, Text } from "@chakra-ui/react";

export const Values = () => {
  return (
    <>
      <Box
        display={{ md: "flex" }}
        justifyContent="center"
        bgColor="white"
        gap="3%"
        p="80px 10px 0 10px"
      >
        <Box
          w={{ base: "100%", md: "30%" }}
          // m={{ base: "0 auto", md: "initial" }}
          pb="5%"
        >
          <Heading fontSize="1.7rem" fontWeight="700" pb="15px" color="#002d62">
            Kernwaarden van de service
          </Heading>
          <UnorderedList>
            <ListItem>Vakkundigheid</ListItem>
            <ListItem>Flexibiliteit</ListItem>
            <ListItem>Kwaliteit</ListItem>
            <ListItem>Loyaliteit</ListItem>
            <ListItem>Meedenkend</ListItem>
            <ListItem>Ontzorgend</ListItem>
          </UnorderedList>
        </Box>
        <Box
          w={{ base: "100%", md: "30%" }}
          // m={{ base: "0 auto", md: "initial" }}
        >
          <Heading fontSize="1.7rem" fontWeight="700" pb="15px" color="#002d62">
            Werkwijze
          </Heading>
          <Text color="gray">
            Wanneer er in een hydraulisch systeem een probleem voordoet, zal
            Hans eerst vooronderzoek doen, er zal overleg plaatsvinden over het
            probleem. Wanneer het een kleine storing betreft zal er een snelle
            oplossing mogelijk zijn. Wanneer de storing ingewikkelder ligt zal
            er in samenspraak met het betreffende bedrijf een plan van aanpak
            gemaakt worden, alles in zeer goed overleg.
          </Text>
        </Box>
      </Box>
    </>
  );
};
