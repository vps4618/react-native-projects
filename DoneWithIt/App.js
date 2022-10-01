import React from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";

const App = () => {
  return (
    <View style={{ backgroundColor: "lightgrey" }}>
      <View style={styles.containerTwo}>
        <Image source={require("./assets/world.png")} style={styles.image} />
        <Text
          style={{
            textAlign: "center",
            margin: 20,
            textDecorationLine: "underline",
          }}
        >
          Some Title
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={{ textAlign: "justify", margin: 20 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    borderWidth: 5,
    borderColor: "green",
  },
  containerTwo: {
    marginTop: 50,
    borderRadius: 0,
    borderWidth: 5,
    borderColor: "brown",
  },
  image: {
    width: 180,
    height:180,
    marginTop: 50,
    marginLeft: 80,
  },
});

export default App;
