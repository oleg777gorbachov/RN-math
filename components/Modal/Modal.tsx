import { ReactNode } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Colors } from "../../utils/Colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ModalI {
  children: ReactNode;
  state: boolean;
  onClose: () => void;
}

function Modal({ children, onClose, state }: ModalI) {
  const { height, width } = useAppSelector((s) => s.settings);
  const animation = useAnimatedStyle(() => {
    return {
      opacity: state
        ? withTiming(1, {
            duration: 300,
          })
        : withTiming(0, {
            duration: 300,
          }),
    };
  });

  return (
    <View style={{ ...styles.modal, padding: 0 }}>
      <Animated.View style={animation}>
        <Pressable
          onPress={onClose}
          style={
            state
              ? { ...styles.modal, height: height, width }
              : {
                  ...styles.modal,
                  height,
                  width,
                }
          }
          pointerEvents={state ? "auto" : "none"}
        >
          <Pressable
            style={styles.content}
            onPress={(e) => e.stopPropagation()}
          >
            {children}
          </Pressable>
        </Pressable>
      </Animated.View>
    </View>
  );
}

export default Modal;

const styles = StyleSheet.create({
  modal: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 4,
  },
});
