import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 40,
  },
  header: {
    height: 30,
    justifyContent: "center",
  },
  inputs: {
    flex: 1,
    justifyContent: "center",
    rowGap: 25,
  },
  remember: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5,
    paddingBottom: 30,
  },
});

export default styles;
