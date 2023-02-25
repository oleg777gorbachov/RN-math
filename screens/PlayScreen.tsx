import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button/Button";
import Game from "../components/Game/Game";
import MainComponent from "../components/MainComponent/MainComponent";
import Modal from "../components/Modal/Modal";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { settingsReducer } from "../redux/reducers/settings";

function PlayScreen() {
  const { isShowGuide, height } = useAppSelector((s) => s.settings);
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useAppDispatch();
  const { setGuideAction } = settingsReducer.actions;
  const { t } = useTranslation();

  const closeAction = () => {
    dispatch(setGuideAction(false));
  };

  const startAction = () => {
    setIsPlaying(true);
  };

  return (
    <MainComponent>
      {isPlaying ? (
        <Game />
      ) : (
        <View style={{ ...styles.center, height: height - 64 - 32 }}>
          <Button text={t("play.start")} onPress={startAction} />
        </View>
      )}

      <Modal onClose={closeAction} state={isShowGuide}>
        <Text style={styles.modaltext}>{t("play.modal")}</Text>
        <Button text={t("play.modalbtn")} onPress={closeAction} />
      </Modal>
    </MainComponent>
  );
}

export default PlayScreen;

const styles = StyleSheet.create({
  modaltext: {
    fontSize: 21,
    marginBottom: 20,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
