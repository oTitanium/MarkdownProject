import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const OutputContainer = styled.div`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
`;

const OutputContent = styled.div`
  max-width: 100%;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <OutputContent>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </OutputContent>
    </OutputContainer>
  );
};

export default MarkdownOutput;
