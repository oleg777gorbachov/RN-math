import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import Button from "../Button/Button";

function GoBack() {
  const { height } = useAppSelector((s) => s.settings);
  const { t } = useTranslation();
  const navigate = useNavigation();

  const btnHandler = () => {
    navigate.goBack();
  };

  return (
    <Button
      text={t("back")}
      style={{ ...styles.btn, top: height - 56 }}
      onPress={btnHandler}
    />
  );
}

export default GoBack;

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    left: 4,
    width: "100%",
  },
});
