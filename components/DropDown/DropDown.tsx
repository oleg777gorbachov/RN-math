import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";

interface DropDownI {
  value: any;
  items: ItemType<any>[];
  text: string;
  Effect?: (value: any) => void;
  style?: ViewStyle;
  isMultiple?: boolean;
}

function DropDown({
  items,
  value,
  text,
  Effect,
  style = {},
  isMultiple,
}: DropDownI) {
  const [val, setVal] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(items);

  useEffect(() => {
    if (Effect && val !== value) {
      Effect(val);
    }
  }, [val]);

  return (
    <View style={{ ...styles.select, ...style }}>
      <Text style={styles.text}>{text}</Text>
      <DropDownPicker
        {...(isMultiple ? { multiple: true, mode: "BADGE" } : null)}
        open={isOpen}
        value={val}
        items={list}
        setOpen={setIsOpen}
        setValue={setVal}
        setItems={setList}
      />
    </View>
  );
}

export default DropDown;

const styles = StyleSheet.create({
  select: {
    display: "flex",
    alignItems: "center",
    zIndex: 1,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});
