import createStackNavigator from "../src/navigation/create-stack-navigator";
import ReportScreen from "../src/screens/Report";
import { ReportStackParams } from "../src/navigation/types";
import { navigatorScreenOptions } from "../src/navigation/navigator-screen-options";

const ReportStack = createStackNavigator<ReportStackParams>();

export default function ProfileNavigator() {
  return (
    <ReportStack.Navigator screenOptions={navigatorScreenOptions}>
      <ReportStack.Screen
        name="profile"
        component={ReportScreen}
        options={{ title: "Profile", headerTitle: "Profile" }}
      />
    </ReportStack.Navigator>
  );
}
