import MainComponent from "../components/MainComponent/MainComponent";
import { Alert, Linking, Text } from "react-native";
import { useTranslation } from "react-i18next";
import Button from "../components/Button/Button";
import { useCallback } from "react";
import { Patch } from "../utils/Patches";
import GoBack from "../components/GoBack/GoBack";

function SupportScreen() {
  const { t } = useTranslation();

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(Patch.SUPPORTLINK);

    if (supported) {
      await Linking.openURL(Patch.SUPPORTLINK);
    } else {
      Alert.alert(`Don't know how to open this URL: ${Patch.SUPPORTLINK}`);
    }
  }, []);

  return (
    <MainComponent>
      <Text>{t("support.text")}</Text>
      <Button text={t("support.btn")} onPress={handlePress} />
      <GoBack />
    </MainComponent>
  );
}

export default SupportScreen;
