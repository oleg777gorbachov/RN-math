import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import MainComponent from "../components/MainComponent/MainComponent";
import { useAppSelector } from "../hooks/useAppSelector";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { settingsReducer } from "../redux/reducers/settings";
import { Colors } from "../utils/Colors";
import { useKeyboardVisible } from "../hooks/useKeyboard";
import { useTranslation } from "react-i18next";
import Button from "../components/Button/Button";
import { ScreenI } from "../types/ScreenI";
import { Patch } from "../utils/Patches";
import DropDown from "../components/DropDown/DropDown";
import GoBack from "../components/GoBack/GoBack";

const levelItems: ItemType<number>[] = [
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
];

const languageItems: ItemType<string>[] = [
  { label: "UA", value: "ua" },
  { label: "ENG", value: "en" },
];

const operItems: ItemType<string>[] = [
  { label: "+", value: "+" },
  { label: "-", value: "-" },
  { label: "*", value: "*" },
  { label: "/", value: "/" },
];

function SettingsScreen({ navigation }: ScreenI) {
  const { language, level, seconds, operators, height } = useAppSelector(
    (s) => s.settings
  );
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    setSecondAction,
    setLanguageAction,
    setLevelAction,
    setOperatorsAction,
  } = settingsReducer.actions;
  const keyboardvisible = useKeyboardVisible();

  const secHandler = (e: string) => {
    if (!Number.isNaN(+e)) {
      dispatch(setSecondAction(+e));
    }
  };

  useEffect(() => {
    if (!keyboardvisible) {
      if (seconds > 300) {
        dispatch(setSecondAction(300));
      } else if (seconds <= 15) {
        dispatch(setSecondAction(15));
      }
    }
  }, [keyboardvisible]);

  return (
    <MainComponent>
      <DropDown
        items={languageItems}
        text={t("settings.language")}
        value={language}
        style={{ zIndex: 3 }}
        Effect={(e) => {
          dispatch(setLanguageAction(e));
          i18n.changeLanguage(e);
        }}
      />
      <DropDown
        items={levelItems}
        text={t("settings.level")}
        style={{ zIndex: 2 }}
        value={level}
        Effect={(e) => {
          dispatch(setLevelAction(e));
        }}
      />
      <DropDown
        items={operItems}
        isMultiple={true}
        text={t("settings.operators")}
        value={operators}
        Effect={(e) => {
          dispatch(setOperatorsAction(e));
        }}
      />
      <View style={styles.select}>
        <Text style={styles.text}>{t("settings.seconds")}</Text>
        <TextInput
          value={String(seconds)}
          onChangeText={secHandler}
          keyboardType={"numeric"}
          style={styles.input}
        />
      </View>
      <GoBack />
    </MainComponent>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.GRAY,
    borderWidth: 1,
    width: "100%",
    padding: 4,
    textAlign: "center",
  },
  select: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});
