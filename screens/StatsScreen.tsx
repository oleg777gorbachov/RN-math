import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button/Button";
import GoBack from "../components/GoBack/GoBack";
import MainComponent from "../components/MainComponent/MainComponent";
import Modal from "../components/Modal/Modal";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { statsReducer } from "../redux/reducers/statsReducer";
import { ScreenI } from "../types/ScreenI";
import { Colors } from "../utils/Colors";
import { Patch } from "../utils/Patches";

function StatsScreen({ navigation }: ScreenI) {
  const { bestScore, bad } = useAppSelector((s) => s.stats);

  const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { clearAction } = statsReducer.actions;

  const btnHandler = () => {
    navigation.navigate(Patch.BADANSWERS);
  };

  const modalHanlder = () => {
    setModal((prev) => !prev);
  };

  const clear = () => {
    dispatch(clearAction());
    setModal(false);
  };

  return (
    <MainComponent>
      <Text style={styles.text}>{t("stats.title")}</Text>
      <View>
        <Button text={t("stats.bad")} onPress={btnHandler} />
      </View>
      <View>
        <Button
          text={t("stats.clear")}
          style={{ backgroundColor: Colors.REDDARK }}
          onPress={modalHanlder}
        />
      </View>
      <View>
        <Text style={styles.text}>
          {t("stats.best")} <Text style={styles.score}>{bestScore}</Text>
        </Text>
      </View>
      <Modal onClose={modalHanlder} state={modal}>
        <Text>{t("stats.clearsure")}</Text>
        <View style={styles.div}>
          <Button
            text={t("stats.clear")}
            style={{ backgroundColor: Colors.GREEN }}
            onPress={clear}
          />
          <Button
            text={t("stats.no")}
            onPress={modalHanlder}
            style={{ paddingHorizontal: 20 }}
          />
        </View>
      </Modal>
      <GoBack />
    </MainComponent>
  );
}

export default StatsScreen;

const styles = StyleSheet.create({
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "800",
  },
  score: {
    color: Colors.RED,
    fontWeight: "800",
    fontSize: 18,
  },
});
