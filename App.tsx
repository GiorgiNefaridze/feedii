import { View } from "react-native";

import Header from "./components/Header/Header";

const App = () => {
  return (
    <View>
      <Header color="black" size={1} text="Random text" weight="bold" />
    </View>
  );
};

export default App;
