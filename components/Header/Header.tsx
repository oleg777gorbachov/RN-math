import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { Colors } from "../../utils/Colors";

function Header() {
  const { t } = useTranslation();

  return (
    <>
      <StatusBar />
      <View style={styles.header}>
        <Text style={styles.headerText}>{t("header.title")}</Text>
      </View>
    </>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.RED,
    height: "100%",
    maxHeight: 64,
    marginTop: 30,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "800",
    color: Colors.WHITE,
  },
});
