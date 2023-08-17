import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContextProvider } from "./context/authContext";
import { PostContextProvider } from "./context/postContext";
import StackNavigator from "./navigation/StackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <PostContextProvider>
          <StackNavigator />
        </PostContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
