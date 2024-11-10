import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";

// Utility function to limit the number of words in a string
const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

interface ReadMoreProps {
  text: string;
  wordLimit: number;
  url: any;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, wordLimit, url }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncated text when collapsed
  const truncatedText = truncateText(text, wordLimit);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 120
      }}
    >
      {/* Display either the truncated text or the full text */}
      <Text textAlign={"justify"}>{isExpanded ? text : truncatedText}</Text>

      {/* Button to toggle between expanded/collapsed */}
      <Button
        variant="link"
        colorScheme="blue"
        onClick={() => window.open(url)}
      >
        View on Instagram
      </Button>
    </Box>
  );
};

export default ReadMore;
