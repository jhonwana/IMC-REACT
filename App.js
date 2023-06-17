// Importar los módulos necesarios de React y React Native
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// Importar los estilos desde un archivo externo
import styles from "./styles";

// Definir el componente principal de la aplicación
export default function App() {
  // Declarar y configurar los estados utilizando el hook useState
  const [altura, setAltura] = useState(""); // Estado para almacenar la altura
  const [peso, setPeso] = useState(""); // Estado para almacenar el peso
  const [imc, setIMC] = useState(""); // Estado para almacenar el resultado del IMC
  const [resultadoTexto, setResultadoTexto] = useState(""); // Estado para almacenar el texto del resultado
  const [pesoIdeal, setPesoIdeal] = useState(""); // Estado para almacenar el peso ideal
  const [mostrarResultado, setMostrarResultado] = useState(false); // Estado para controlar la visibilidad del resultado

  // Función para calcular el IMC y establecer los estados correspondientes
  const calcularIMC = () => {
    // Convertir la altura de cm a m
    const alturaM = parseFloat(altura) / 100;

    // Calcular el IMC
    const imcResultado = (parseFloat(peso) / (alturaM * alturaM)).toFixed(1);

    // Establecer el estado del IMC
    setIMC(`Su índice de masa corporal es ${imcResultado}`);

    // Variables para almacenar el texto del resultado y el peso ideal
    let textoResultado = "";
    let pesoIdealCalculado = 0;

    // Determinar la categoría del IMC y calcular el peso ideal
    if (imcResultado < 18.5) {
      // Desnutrición
      pesoIdealCalculado = (22 * alturaM * alturaM).toFixed(1);
      const diferenciaPeso = (pesoIdealCalculado - parseFloat(peso)).toFixed(1);
      textoResultado = `Desnutrición. Debe aumentar ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    } else if (imcResultado >= 18.5 && imcResultado <= 24.9) {
      // Peso normal
      pesoIdealCalculado = (alturaM * alturaM * 22).toFixed(1);
      const diferenciaPeso = (pesoIdealCalculado - parseFloat(peso)).toFixed(1);
      textoResultado = `Peso normal. Debe ${
        diferenciaPeso >= 0 ? "ganar" : "perder"
      } ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    } else if (imcResultado >= 25 && imcResultado <= 26.9) {
      // Sobrepeso
      pesoIdealCalculado = (alturaM * alturaM * 22).toFixed(1);
      const diferenciaPeso = (parseFloat(peso) - pesoIdealCalculado).toFixed(1);
      textoResultado = `Sobrepeso. Debe bajar ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    } else if (imcResultado >= 27 && imcResultado <= 29.9) {
      // Obesidad grado 1
      pesoIdealCalculado = (alturaM * alturaM * 22).toFixed(1);
      const diferenciaPeso = (parseFloat(peso) - pesoIdealCalculado).toFixed(1);
      textoResultado = `Obesidad grado 1. Debe bajar ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    } else if (imcResultado >= 30 && imcResultado <= 39.9) {
      // Obesidad grado 2
      pesoIdealCalculado = (alturaM * alturaM * 22).toFixed(1);
      const diferenciaPeso = (parseFloat(peso) - pesoIdealCalculado).toFixed(1);
      textoResultado = `Obesidad grado 2. Debe bajar ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    } else if (imcResultado > 40) {
      // Obesidad grado 3
      pesoIdealCalculado = (alturaM * alturaM * 22).toFixed(1);
      const diferenciaPeso = (parseFloat(peso) - pesoIdealCalculado).toFixed(1);
      textoResultado = `Obesidad grado 3. Debe bajar ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    }

    // Establecer los estados correspondientes
    setPesoIdeal(`Su peso ideal es ${pesoIdealCalculado} kg`);
    setResultadoTexto(textoResultado);
    setMostrarResultado(true);
  };

  // Función para reiniciar los estados
  const reiniciar = () => {
    setAltura("");
    setPeso("");
    setIMC("");
    setResultadoTexto("");
    setPesoIdeal("");
    setMostrarResultado(false);
  };

  // Función para manejar el cambio en el campo de altura
  const manejarCambioAltura = (texto) => {
    // Eliminar cualquier carácter que no sea un número
    const valorNumerico = texto.replace(/[^0-9]/g, "");
    // Establecer el estado de la altura
    setAltura(valorNumerico);
  };

  // Función para manejar el cambio en el campo de peso
  const manejarCambioPeso = (texto) => {
    // Eliminar cualquier carácter que no sea un número
    const valorNumerico = texto.replace(/[^0-9]/g, "");
    // Establecer el estado del peso
    setPeso(valorNumerico);
  };

  // Renderizar la interfaz de usuario
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Calculadora de IMC</Text>
        <View style={styles.inputArea}>
          <Text style={styles.label}>Altura (cm)</Text>
          <TextInput
            style={styles.input}
            value={altura}
            onChangeText={manejarCambioAltura}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.label}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            value={peso}
            onChangeText={manejarCambioPeso}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={calcularIMC}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={reiniciar}>
            <Text style={styles.buttonText}>Restablecer</Text>
          </TouchableOpacity>
        </View>
        {mostrarResultado && (
          <View style={styles.resultArea}>
            <Text style={styles.resultLabel}>Resultado</Text>
            <Text style={styles.resultText}>{imc}</Text>
            <Text style={styles.resultText}>{resultadoTexto}</Text>
            <Text style={styles.resultText}>{pesoIdeal}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
