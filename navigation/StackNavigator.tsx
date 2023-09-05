import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "./Routes";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import Home from "../screens/Home/Home";
import ResetPassword from "../screens/ResetPassword/ResetPassword";
import DetailedPost from "../components/DetailedPost/DetailedPost";
import EditProfile from "../screens/Profile/ProfilePages/EditProfile/EditProfile";
import SavePosts from "../screens/Profile/ProfilePages/SavePosts/SavePosts";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Feed}
      screenOptions={{ header: () => null }}
    >
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.SignUp} component={SignUp} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.ResetPassword} component={ResetPassword} />
      <Stack.Screen name={Routes.DetailedPost} component={DetailedPost} />
      <Stack.Screen name={Routes.editProfile} component={EditProfile} />
      <Stack.Screen name={Routes.savePosts} component={SavePosts} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
