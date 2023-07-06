import React, { useState } from "react";
import Header from "./components/header";
import MarkdownGuide from "./components/markdownGuide";
import MarkdownInput from "./components/markdownInput";
import MarkdownOutput from "./components/markdownOutput";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh; // 100% view height
  width: 100vw;
`;

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState("# Hello World");
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (value: string) => {
    setMarkdown(value);
  };

  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <>
      <Header onToggleGuide={toggleGuide} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </Container>
    </>
  );
};

export default App;
