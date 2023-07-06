import React from "react";
import styled from "styled-components";

const GuideContainer = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const MarkdownGuide: React.FC = () => {
  return (
    <GuideContainer>
      <h2>Markdown Cheat Sheet</h2>
      <ul>
        <li>
          <code># H1</code>
        </li>
        <li>
          <code>## H2</code>
        </li>
        <li>
          <code>### H3</code>
        </li>
        <li>
          <code>**Bold Text**</code>
        </li>
        <li>
          <code>*Italic Text*</code>
        </li>
        <li>
          <code>[Link](https://example.com)</code>
        </li>
        <li>
          <code>- List Item</code>
        </li>
        <li>
          <code>`Code Block`</code>
        </li>
      </ul>
    </GuideContainer>
  );
};

export default MarkdownGuide;
