import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet } from "react-native";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { statsReducer } from "../../redux/reducers/statsReducer";
import { WrongI } from "../../types/WrongI";
import { Colors } from "../../utils/Colors";
import Button from "../Button/Button";

interface EndI {
  score: number;
  bad: WrongI[];
  goBack: () => void;
}

function End({ score, bad, goBack }: EndI) {
  const { height } = useAppSelector((s) => s.settings);
  const { bestScore } = useAppSelector((s) => s.stats);

  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { addBadAction, setBestScore } = statsReducer.actions;

  const press = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (score > bestScore) {
      dispatch(setBestScore(score));
    }
    dispatch(addBadAction(bad));
  }, []);

  return (
    <View style={{ ...styles.container, height }}>
      <Text style={styles.title}>{t("end.ends")}</Text>
      <Text style={styles.title}>
        {t("end.score")} <Text style={styles.score}>{score}</Text>
      </Text>
      <Text style={styles.title}>
        {t("end.best")}{" "}
        <Text style={styles.score}>
          {score > bestScore ? score : bestScore}
        </Text>
      </Text>
      <View>
        <Button text={t("back")} onPress={press} />
        <Button
          text={t("end.again")}
          onPress={goBack}
          style={{ backgroundColor: Colors.GREEN }}
        />
      </View>
    </View>
  );
}

export default End;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
  },
  score: {
    color: Colors.RED,
  },
});
