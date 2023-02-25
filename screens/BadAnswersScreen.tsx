import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, FlatList, View } from "react-native";
import GoBack from "../components/GoBack/GoBack";
import MainComponent from "../components/MainComponent/MainComponent";
import { useAppSelector } from "../hooks/useAppSelector";
import { Colors } from "../utils/Colors";

function BadAnswersScreen() {
  const { bad } = useAppSelector((s) => s.stats);
  const { t } = useTranslation();

  return (
    <MainComponent>
      {bad.length === 0 ? (
        <Text>{t("stats.empty")}</Text>
      ) : (
        <FlatList
          data={bad}
          style={styles.list}
          renderItem={(e) => (
            <View key={e.index} style={styles.equation}>
              <Text>
                {t("stats.answer")}{" "}
                <Text style={styles.right}>{e.item.answer}</Text>
              </Text>
              <Text style={styles.answer}>{e.item.equation}</Text>
              <Text>
                {t("stats.yourAns")}{" "}
                <Text style={styles.bad}>{e.item.yourAnswer}</Text>
              </Text>
            </View>
          )}
        />
      )}
      <GoBack />
    </MainComponent>
  );
}

export default BadAnswersScreen;

const styles = StyleSheet.create({
  answer: {
    marginLeft: 20,
    marginRight: 20,
  },
  right: {
    color: Colors.GREEN,
    fontSize: 16,
    fontWeight: "800",
  },
  bad: {
    color: Colors.RED,
    fontSize: 16,
    fontWeight: "800",
  },
  equation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  list: {
    marginBottom: 150,
  },
});
