import { IHeader } from "./Types";

import { Heading } from "./Header.style";

const Header = ({
  text,
  color,
  size,
  weight,
  lineHeight,
  isContent,
}: IHeader): JSX.Element => {
  const content =
    !isContent && text?.length > 110 ? text.slice(0, 110) + "..." : text;
  return (
    <Heading color={color} size={size} weight={weight} lineHeight={lineHeight}>
      {content}
    </Heading>
  );
};

export default Header;
