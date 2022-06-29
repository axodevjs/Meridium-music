import React, { FC } from "react";
import * as S from "./Styled";

interface InputProps {
  value: string;
  setValue(value: string): void;
  placeholder: string;
}

const SearchInput: FC<InputProps> = ({ value, setValue, placeholder }) => {
  return (
    <S.SearchInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
