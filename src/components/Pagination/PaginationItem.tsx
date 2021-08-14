import { Button } from "@chakra-ui/react";
import React from "react";


interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  isCurrent = false,
  number 
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        wdith="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      wdith="4"
      bgColor="gray.700"
      _hover={{
        bgColor: 'gray.500'
      }}
    >
      {number}
    </Button>
  );
}