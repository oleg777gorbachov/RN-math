import { ReactNode, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { settingsReducer } from "../../redux/reducers/settings";
import { Colors } from "../../utils/Colors";
import Header from "../Header/Header";

interface MainComponentI {
  children: ReactNode;
}

function MainComponent({ children }: MainComponentI) {
  const dispatch = useAppDispatch();
  const { setSizeAction } = settingsReducer.actions;

  useEffect(() => {
    const ScreenHeight = Dimensions.get("window").height - 64 - 32;
    const ScreenWidth = Dimensions.get("window").width;
    dispatch(
      setSizeAction({
        width: ScreenWidth,
        height: ScreenHeight,
      })
    );
  }, []);

  return (
    <>
      <Header />
      <View style={styles.main}>{children}</View>
    </>
  );
}

export default MainComponent;

const styles = StyleSheet.create({
  main: {
    padding: 4,
    backgroundColor: Colors.WHITE,
  },
});
