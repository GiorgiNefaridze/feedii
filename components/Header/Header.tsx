import { IHeader } from "./Types";

import { Heading } from "./Header.style";

const Header = ({
  text,
  color,
  size,
  weight,
  lineHeight,
}: IHeader): JSX.Element => {
  return (
    <Heading color={color} size={size} weight={weight} lineHeight={lineHeight}>
      {text}
    </Heading>
  );
};

export default Header;
