import { useState } from "react";
import { Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import Header from "../../components/Header/Header";
import { IOption } from "./Types";

import { ProfileOption } from "./Profile.style";

const Option = ({ icon, content, handleClick }: IOption): JSX.Element => {
  const [isTouched, setIsTouched] = useState<boolean>(false);

  return (
    <Pressable onPress={handleClick}>
      <ProfileOption
        touched={isTouched}
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}
      >
        <FontAwesomeIcon icon={icon} color="white" />
        <Header color="white" size={2} text={content} />
      </ProfileOption>
    </Pressable>
  );
};

export default Option;
