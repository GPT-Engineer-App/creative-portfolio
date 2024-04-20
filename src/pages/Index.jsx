import { Box, Flex, Text, Heading, Image, Link, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaBehance, FaDribbble, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Flex direction="column" align="center" maxW="1200px" m="auto">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1598387746216-506f6bd47aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxVSSUyRlVYJTIwZGVzaWduZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTM2MzcyNzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="UI/UX Designer" mb={4} />
        <Heading as="h1" size="xl" mb={2}>
          Atul Raj
        </Heading>
        <Text fontSize="lg" color="gray.500">
          UI/UX Designer
        </Text>
        <HStack spacing={4} mt={4}>
          <Link href="https://linkedin.com/in/janedoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          </Link>
          <Link href="https://dribbble.com/janedoe" isExternal>
            <IconButton aria-label="Dribbble" icon={<FaDribbble />} />
          </Link>
          <Link href="https://behance.net/janedoe" isExternal>
            <IconButton aria-label="Behance" icon={<FaBehance />} />
          </Link>
          <Link href="https://github.com/janedoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} />
          </Link>
        </HStack>
        <VStack spacing={8} mt={10} align="start">
          <Box>
            <Heading as="h2" size="lg">
              About Me
            </Heading>
            <Text mt={2}>Enthusiastic and versatile professional with a strong background in UI/UX design and front-end development. Proficient in delivering user-centered design solutions and building responsive web applications. Adept at collaborating within cross-functional teams to create seamless user experiences.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Projects
            </Heading>
            <VStack spacing={4} mt={2}>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Project One</Heading>
                <Text mt={4}>A redesign of an e-commerce platform to improve user experience and increase sales.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Project Two</Heading>
                <Text mt={4}>A mobile app designed to help users manage their daily tasks more efficiently.</Text>
                <Link href="https://example.com/project-two" isExternal>
                  View Project
                </Link>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Project Three</Heading>
                <Text mt={4}>A social media dashboard to track all your metrics in one place.</Text>
                <Link href="https://example.com/project-three" isExternal>
                  View Project
                </Link>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Project Four</Heading>
                <Text mt={4}>An interactive learning platform for children.</Text>
                <Link href="https://example.com/project-four" isExternal>
                  View Project
                </Link>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
