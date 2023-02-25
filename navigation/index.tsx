import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BadAnswersScreen from "../screens/BadAnswersScreen";
import HomeScreen from "../screens/HomeScreen";
import InfoScren from "../screens/InfoScren";
import PlayScreen from "../screens/PlayScreen";
import SettingsScreen from "../screens/SettingsScreen";
import StatsScreen from "../screens/StatsScreen";
import SupportScreen from "../screens/SupportScreen";
import { Patch } from "../utils/Patches";

const Stack = createNativeStackNavigator();

function NavContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Patch.HOME} component={HomeScreen} />
        <Stack.Screen name={Patch.PLAY} component={PlayScreen} />
        <Stack.Screen name={Patch.INFO} component={InfoScren} />
        <Stack.Screen name={Patch.SUPPORT} component={SupportScreen} />
        <Stack.Screen name={Patch.SETTINGS} component={SettingsScreen} />
        <Stack.Screen name={Patch.STATS} component={StatsScreen} />
        <Stack.Screen name={Patch.BADANSWERS} component={BadAnswersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;
