import { Text, View } from "react-native";

export default function Page() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
        <Text style={{ fontSize: 22 }}>Hello World</Text>
    </View>
  );
}