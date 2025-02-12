import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
    label: string;
};

export default function Button({label}:Props) {
    return (
        <View>
            <Pressable onPress={()=> alert("Você clicou aqui.")}>
                <Text>{label}</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection: "row",
    },
    buttonLabel: {
        color: "#FFF",
        fontSize: 16,
    },
})