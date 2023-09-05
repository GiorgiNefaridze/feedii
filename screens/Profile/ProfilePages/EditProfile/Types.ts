import { NavigationProp } from "@react-navigation/native";

export interface INavigation {
  navigation: NavigationProp<any>;
}

export interface IProps {
  width: number;
}

export interface IForm {
  firstName: string;
  lastName: string;
  secret: string;
}
