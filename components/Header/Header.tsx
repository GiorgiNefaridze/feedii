import { IHeader } from "./Types";

import { Heading } from "./Header.style";

const Header = ({ text, color, size, weight }: IHeader): JSX.Element => {
  return (
    <Heading color={color} size={size} weight={weight}>
      {text}
    </Heading>
  );
};

export default Header;
