import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h2" size="xl">Contact Us</Heading>
      <Text fontSize="lg">Email: contact@financialtimes.com</Text>
      <Text fontSize="lg">Phone: +1 234 567 890</Text>
      <Text fontSize="lg">Address: 123 Financial St, Business City, BC 12345</Text>
    </VStack>
  </Box>
);

export default Contact;