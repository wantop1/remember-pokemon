import { Link } from "react-router-dom";
import styled from "styled-components";
import { LIGHT_TEXT_COLOR } from "../../../constants/color";
import { CARD_BORDER_COLOR } from "../../../constants/color";
import basicSpinner from '../../../assets/basic-spinner.gif';
import GifProgress from "../GifProgress";

const StyledSearchResult = styled.div`
  align-items: center;
  position: absolute;
  left: 0;
  top: 90%;
  width: inherit;
  padding: 0.5rem;
  max-width: 25rem;
  background: #fff;
  border: none;
  border-radius: 0.375rem;
  z-index: 1000;
  display: ${(props) =>
    props.isFocused && props.value.length > 0 && props.isError !== 404
      ? "block"
      : "none"};
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;

  &:hover {
    background: ${CARD_BORDER_COLOR};
  }
`;

const IdTypography = styled.span`
  color: ${LIGHT_TEXT_COLOR};
  margin: 0 0.5rem;
  font-size: 1rem;
`;

const NameTypography = styled.span`
  font-size: 1rem;
`;

const PokemonImg = styled.img`
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  border: solid 0.5px #d9d9d9;
`;

const SearchResult = ({
  id = "",
  name = "",
  image = "",
  isFocused,
  isTouched,
  isError,
  isLoading,
  reset: resetInputState,
  value,
  closeMenu,
}) => {
  const reset = () => {
    resetInputState();
    closeMenu();
  };
  return (
    <StyledSearchResult
      id={id}
      isFocused={isFocused}
      value={value}
      isTouched={isTouched}
      isError={isError}
    >
      {isLoading ?? true ? <GifProgress width='2rem' src={basicSpinner}/> : (
        <StyledLink to={`/pokemon/${id}`} onClick={reset}>
          <PokemonImg src={image} alt="pokemon-image" />
          <IdTypography>{"#" + id.toString().padStart(3, "0")}</IdTypography>
          <NameTypography>{name}</NameTypography>
        </StyledLink>
      )}
    </StyledSearchResult>
  );
};

export default SearchResult;
