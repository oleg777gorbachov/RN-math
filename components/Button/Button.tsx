import { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../utils/Colors";

interface ButtonI {
  text: string;
  children?: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

function Button({ children, onPress, style, text }: ButtonI) {
  return (
    <TouchableOpacity style={{ ...styles.btn, ...style }} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 8,
    backgroundColor: Colors.RED,
    borderRadius: 4,
    color: Colors.WHITE,
    marginBottom: 3,
    marginTop: 3,
  },
  text: {
    fontSize: 26,
    color: Colors.WHITE,
  },
});
