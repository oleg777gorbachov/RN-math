import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import Button from "../components/Button/Button";
import MainComponent from "../components/MainComponent/MainComponent";
import { ScreenI } from "../types/ScreenI";
import { Patch } from "../utils/Patches";
import { Icon } from "react-native-elements";
import { Colors } from "../utils/Colors";
import { ButtonsI } from "../types/ButtonsI";

function HomeScreen({ navigation }: ScreenI) {
  const { t } = useTranslation();

  const buttons: ButtonsI[] = [
    {
      label: t("home.play"),
      icon: "play-circle-outline",
      path: Patch.PLAY,
    },
    {
      label: t("home.info"),
      icon: "info",
      path: Patch.INFO,
    },
    {
      label: t("home.support"),
      icon: "payments",
      path: Patch.SUPPORT,
    },
    {
      label: t("home.settings"),
      icon: "settings",
      path: Patch.SETTINGS,
    },
    {
      label: t("home.stats"),
      icon: "analytics",
      path: Patch.STATS,
    },
  ];

  return (
    <MainComponent>
      {buttons.map((e) => (
        <Button
          key={e.path}
          style={styles.btn}
          text={e.label}
          onPress={() => navigation.navigate(e.path)}
        >
          <Icon name={e.icon} color={Colors.WHITE} />
        </Button>
      ))}
    </MainComponent>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
