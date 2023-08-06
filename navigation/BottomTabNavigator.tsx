import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Routes } from "./Routes";
import { tabBarIconActiveColor } from "../constants";
import Feed from "../screens/Feed/Feed";
import Search from "../screens/Search/Search";
import Profile from "../screens/Profile/Profile";

const Tab = createBottomTabNavigator();

interface ITab {
  id: number;
  name: string;
  component: () => JSX.Element;
  icon: unknown;
}

const tabs: ITab[] = [
  {
    id: 1,
    name: Routes.Feed,
    component: Feed,
    icon: faSquareRss,
  },
  {
    id: 2,
    name: Routes.Search,
    component: Search,
    icon: faMagnifyingGlass,
  },
  {
    id: 3,
    name: Routes.Profile,
    component: Profile,
    icon: faUser,
  },
];

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Feed}
      screenOptions={{
        header: () => null,
        tabBarStyle: { backgroundColor: "##4f4f4f" },
      }}
    >
      {tabs.map(({ component, icon, id, name }: ITab) => {
        return (
          <Tab.Screen
            name={name}
            component={component}
            key={id}
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesomeIcon
                  icon={icon}
                  color={focused ? tabBarIconActiveColor : "white"}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
