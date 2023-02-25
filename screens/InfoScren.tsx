import MainComponent from "../components/MainComponent/MainComponent";
import { StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { ScreenI } from "../types/ScreenI";
import { Patch } from "../utils/Patches";
import GoBack from "../components/GoBack/GoBack";

function InfoScren({ navigation }: ScreenI) {
  const { t } = useTranslation();

  return (
    <MainComponent>
      <Text style={styles.text}>{t("info.text")}</Text>
      <GoBack />
    </MainComponent>
  );
}

export default InfoScren;

const styles = StyleSheet.create({
  text: {
    fontWeight: "700",
    fontSize: 14,
    height: "87%",
  },
  btn: {
    position: "absolute",
    width: "100%",
    left: 4,
    bottom: 12,
  },
});
