import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Jose Neto</Text>
          <Text color="gray.300" fontSize="small">
            josenetopr5@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Jose Neto" src="https://github.com/1TATO.png" />
    </Flex>
  );
}