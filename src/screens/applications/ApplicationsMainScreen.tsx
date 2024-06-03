import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { FAB, Text } from "react-native-paper";
import { ApplicationsStackParamList } from "../../navigation/stacks/ApplicationsStack";

type Props = NativeStackScreenProps<ApplicationsStackParamList, "Applications">;

const ApplicationsHomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Applications Page</Text>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.push("ApplicationForm")}
      ></FAB>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});

export default ApplicationsHomeScreen;
