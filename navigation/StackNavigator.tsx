import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "./Routes";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import Home from "../screens/Home/Home";
import ResetPassword from "../screens/ResetPassword/ResetPassword";
import DetailedPost from "../components/DetailedPost/DetailedPost";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{ header: () => null }}
    >
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.SignUp} component={SignUp} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.ResetPassword} component={ResetPassword} />
      <Stack.Screen name={Routes.DetailedPost} component={DetailedPost} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
