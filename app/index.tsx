import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/Button";

const PlaceHolderImage = require("@/assets/images/background-imagem.jpg")

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageViewer imgSource={PlaceHolderImage} />
      </View>
      <View>
        <Button label="Chosse a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },


});