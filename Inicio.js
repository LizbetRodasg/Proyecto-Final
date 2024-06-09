import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";


export default function Inicio({ onStart }) {
  // URL de la imagen que deseas usar como fondo
  const backgroundImageUrl = "https://imgur.com/uSsGjbC.jpg";

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onStart}>
          <Text style={styles.buttonText}>Jugar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%', // Ajusta el ancho del contenedor
        height: '100%', // Ajusta la altura del contenedor
        justifyContent: "center",
        alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 350,
    left: 100, // Mueve el botón hacia la derecha
    width: 200,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FAE904',
    paddingVertical: 13,
    paddingHorizontal: 60,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
