import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  align-tems: center;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: none;
`;

interface MarkdownInputProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={handleChange} />
    </InputContainer>
  );
};

export default MarkdownInput;
