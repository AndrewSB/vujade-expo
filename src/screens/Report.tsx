import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function ReportScreen() {
  var [scrollOffset, setScrollOffset] = useState(0);

  return (
    <View style={{ display: "flex" }}>
      <View
        style={{
          backgroundColor: "red",
          position: "absolute",
          flex: 1,
        }}
      >
        <SafeAreaView>
          <View style={{ height: 100 }} />
          <Text style={{ textAlign: "center" }}>{scrollOffset}</Text>
        </SafeAreaView>
      </View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(e) => setScrollOffset(e.nativeEvent.contentOffset.y)}
      >
        <Text>one</Text>
        <View style={{ height: "80%" }} />
        <Text>two</Text>
      </ScrollView>
    </View>
  );
}
