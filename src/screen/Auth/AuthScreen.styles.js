import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 200,
    height: 250,
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject, // Esto establece la imagen de fondo para que ocupe todo el espacio
    resizeMode: 'cover', // Ajusta la imagen de fondo según el tamaño del contenedor
    justifyContent: 'center', // Alinea el contenido en el centro verticalmente
  },
});

