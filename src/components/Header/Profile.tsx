import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box marginRight="4" textAlign="right">
        <Text>Jose Neto</Text>
        <Text
          color="gray.300"
          fontSize="small">josenetopr5@gmail.com</Text
        >
      </Box>

      <Avatar size="md" name="Jose Neto" src="https://github.com/1TATO.png" />
    </Flex>
  );
}