import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "./Routes";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import Home from "../screens/Home/Home";
import ResetPassword from "../screens/ResetPassword/ResetPassword";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.ResetPassword}
      screenOptions={{ header: () => null }}
    >
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.SignUp} component={SignUp} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.ResetPassword} component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
