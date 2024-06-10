import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h2" size="xl">About Us</Heading>
      <Text fontSize="lg">
        Financial Times is a leading global business publication, recognized internationally for its authority, integrity, and accuracy.
      </Text>
      <Text fontSize="lg">
        Our mission is to deliver essential news, comment, data, and analysis for the global business community.
      </Text>
    </VStack>
  </Box>
);

export default About;