import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/imageViewer";

const PlaceHolderImage = require("@/assets/images/background-imagem.jpg")

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer imgSource={PlaceHolderImage}/>
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
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
});