import {
  Drawer,
  DrawerBody,
  Flex,
  Spacer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// ui
import { NavList } from "../ui/NavList";
// icons
import { CgMenuRightAlt } from "react-icons/cg";
// images
import logo from "../../public/images/logo.png";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <Flex
        zIndex="5"
        position="fixed"
        p="10px 0 10px 10px"
        minWidth="max-content"
        alignItems="center"
        bgColor="white"
        top="0"
        w="100%"
        pr="25px"
        overflow="none"
      >
        <Link to={`/`}>
          <Image src={logo} alt="logo" w="100%" h="auto" maxWidth="200px" />
        </Link>

        <Spacer />

        {isLargerThan800 ? (
          <NavList display={"flex"} padding={"15px"} />
        ) : (
          <>
            <CgMenuRightAlt className="menu-icon" onClick={onOpen} />

            <Drawer
              size="xs"
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton color="navy" />

                <DrawerBody
                  display="inline-block"
                  p="50px 0 0 30px"
                  bgColor="#F5F5F5"
                  fontWeight="600"
                  fontSize="18px"
                >
                  <NavList
                    display={"initial"}
                    onClose={onClose}
                    padding={"15px"}
                  />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Flex>
    </>
  );
};
