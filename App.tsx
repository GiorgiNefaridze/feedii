import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContextProvider } from "./context/authContext";
import StackNavigator from "./navigation/StackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <StackNavigator />
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
