import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Financial Times</Heading>
        <Text fontSize="xl">Your source for the latest financial news and analysis.</Text>
        <Box p={4} borderWidth={1} borderRadius="lg" width="100%" textAlign="center">
          <Text>Stay informed with our in-depth articles and expert opinions.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;