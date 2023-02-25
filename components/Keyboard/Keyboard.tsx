import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Colors } from "../../utils/Colors";
import { Icon } from "react-native-elements";
import { useTranslation } from "react-i18next";

interface KeyboardI {
  onClick: (action: number | "delete" | "submit") => void;
}

function Keyboard({ onClick }: KeyboardI) {
  const { width } = useAppSelector((s) => s.settings);
  const { t } = useTranslation();
  const keys = [
    0,
    <Icon
      style={{ ...styles.item, width: width / 3.3 }}
      color={Colors.WHITE}
      name="backspace"
    />,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];

  return (
    <>
      <View style={styles.parent}>
        <TouchableOpacity style={styles.parent}></TouchableOpacity>
        {keys.map((e) => (
          <TouchableOpacity
            key={e.toString()}
            onPress={() => onClick(Number.isNaN(+e) ? "delete" : +e)}
          >
            <Text
              style={
                e === 0
                  ? { ...styles.item, width: width / 1.65 }
                  : { ...styles.item, width: width / 3.3 }
              }
            >
              {e}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.parent} onPress={() => onClick("submit")}>
        <Text style={{ ...styles.item, width: width / 1.1 }}>
          {t("play.submit")}
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default Keyboard;

const styles = StyleSheet.create({
  delete: {
    display: "flex",
    alignItems: "flex-end",
  },
  parent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    height: 100,
    textAlign: "center",
    paddingTop: 28,
    color: Colors.WHITE,
    backgroundColor: Colors.REDDARK,
    fontSize: 32,
    fontWeight: "800",
  },
});
