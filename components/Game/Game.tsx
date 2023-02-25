import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import { MathI } from "../../types/MathI";
import { GenerateMath } from "../../utils/GenerateMath";
import Keyboard from "../Keyboard/Keyboard";
import { Colors } from "../../utils/Colors";
import End from "../End/End";
import { WrongI } from "../../types/WrongI";
import { useTranslation } from "react-i18next";
import React from "react";

function Game() {
  const { level, seconds, operators } = useAppSelector((s) => s.settings);
  const { t } = useTranslation();
  const [math, setMath] = useState<MathI>();
  const [answer, setAnswer] = useState<string>("");

  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [levelNow, setLevelNow] = useState(level);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(seconds);
  const [isRight, setIsRight] = useState<boolean | null>(null);

  const badOnes = useRef<WrongI[]>([]).current;

  const onClickKeyboard = (e: number | "delete" | "submit") => {
    if (e === "submit" && math) {
      if (+answer === math.result) {
        setIsRight(true);
        setPoints((prev) => prev + math.score);
      } else {
        setIsRight(false);
        badOnes.push({
          answer: math.result,
          yourAnswer: +answer,
          equation: math.equation,
        });
      }
      setMath(GenerateMath(levelNow, operators));
      setAnswer("");
    } else if (e === "delete") {
      setAnswer((prev) => prev.slice(0, prev.length - 1));
    } else {
      setAnswer((prev) => prev + e);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsRight(null), 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isRight]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        const formula = Math.round(
          (seconds * +String(levelNow + "0")) / (seconds / 3)
        );
        if (prev < 1) {
          if (points > formula) {
            setLevelNow((prev) => prev + 1);
            setTimer(seconds);
          } else {
            setIsEnd(true);
            clearInterval(interval);
          }
        }
        return prev - 1;
      });
    }, 1000);
    setMath(GenerateMath(levelNow, operators));

    return () => {
      clearInterval(interval);
    };
  }, [points, levelNow, operators]);

  if (isEnd) {
    return (
      <End
        score={points}
        bad={badOnes}
        goBack={() => {
          setIsEnd(false);
          setTimer(seconds);
          setLevelNow(level);
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.info}>
        <Text>
          {t("play.points")} {points}
        </Text>
        <Text>
          {t("play.timer")} {timer}
        </Text>
      </View>
      <View style={styles.state}>
        {isRight === true && (
          <Text style={styles.right}>{t("play.right")}</Text>
        )}
        {isRight === false && <Text style={styles.bad}>{t("play.bad")}</Text>}
      </View>
      <View>
        <Text style={styles.mathText}>{math && math.equation}</Text>
      </View>
      <View>
        <Text style={styles.mathText}>{answer}</Text>
      </View>

      <Keyboard onClick={onClickKeyboard} />
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  mathText: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
  },
  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  right: {
    color: Colors.GREEN,
    fontWeight: "800",
    fontSize: 20,
  },
  bad: {
    color: Colors.REDDARK,
    fontWeight: "800",
    fontSize: 20,
  },
  state: {
    height: 30,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
