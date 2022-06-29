import styled from "styled-components";
import { COLORS } from "utils/variables";
import SearchIcon from "assets/img/search.png";

export const SearchInput = styled.input`
  background: ${COLORS.gray};
  height: 50px;
  width: 230px;
  padding-left: 48px;
  padding-right: 48px;
  border: none;
  outline: none;
  border-radius: 12px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #fff;
  background-image: url(${SearchIcon});
  background-size: 20px;
  background-position: 15px center;
  background-repeat: no-repeat;

  &::placeholder {
    color: #797979;
  }
`;
