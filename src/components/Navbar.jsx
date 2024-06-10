import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" px={4} py={2}>
    <Flex align="center">
      <Heading as="h1" size="lg">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
          Financial Times
        </Link>
      </Heading>
      <Spacer />
      <Flex>
        <Link as={RouterLink} to="/" px={2} _hover={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2} _hover={{ textDecoration: "none" }}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" px={2} _hover={{ textDecoration: "none" }}>
          Contact
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;