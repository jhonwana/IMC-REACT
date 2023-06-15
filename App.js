import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState("");
  const [resultadoTexto, setResultadoTexto] = useState("");
  const [pesoIdeal, setPesoIdeal] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const calcularIMC = () => {
    const alturaM = parseFloat(altura) / 100;
    const imcResultado = (parseFloat(peso) / (alturaM * alturaM)).toFixed(1);
    setIMC(`Su índice de masa corporal es ${imcResultado}`);

    let textoResultado = "";
    let pesoIdealCalculado = 0;

    if (imcResultado < 18.5) {
      pesoIdealCalculado = (22 * alturaM * alturaM).toFixed(1);
      const diferenciaPeso = (pesoIdealCalculado - parseFloat(peso)).toFixed(1);
      textoResultado = `Desnutrición. Debe aumentar ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    } else if (imcResultado >= 18.5 && imcResultado <= 24.9) {
      pesoIdealCalculado = (alturaM * alturaM * 22).toFixed(1);
      const diferenciaPeso = (pesoIdealCalculado - parseFloat(peso)).toFixed(1);
      textoResultado = `Peso normal. Debe ${
        diferenciaPeso >= 0 ? "ganar" : "perder"
      } ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    } else if (imcResultado >= 25 && imcResultado <= 26.9) {
      pesoIdealCalculado = (alturaM * alturaM * 22).toFixed(1);
      const diferenciaPeso = (parseFloat(peso) - pesoIdealCalculado).toFixed(1);
      textoResultado = `Sobrepeso. Debe bajar ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    } else if (imcResultado >= 27 && imcResultado <= 29.9) {
      pesoIdealCalculado = (alturaM * alturaM * 22).toFixed(1);
      const diferenciaPeso = (parseFloat(peso) - pesoIdealCalculado).toFixed(1);
      textoResultado = `Obesidad grado 1. Debe bajar ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    } else if (imcResultado >= 30 && imcResultado <= 39.9) {
      pesoIdealCalculado = (alturaM * alturaM * 22).toFixed(1);
      const diferenciaPeso = (parseFloat(peso) - pesoIdealCalculado).toFixed(1);
      textoResultado = `Obesidad grado 2. Debe bajar ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    } else if (imcResultado > 40) {
      pesoIdealCalculado = (alturaM * alturaM * 22).toFixed(1);
      const diferenciaPeso = (parseFloat(peso) - pesoIdealCalculado).toFixed(1);
      textoResultado = `Obesidad grado 3. Debe bajar ${Math.abs(diferenciaPeso)} kg para alcanzar su peso ideal.`;
    }

    setPesoIdeal(`Su peso ideal es ${pesoIdealCalculado} kg`);
    setResultadoTexto(textoResultado);
    setMostrarResultado(true);
  };

  const reiniciar = () => {
    setAltura("");
    setPeso("");
    setIMC("");
    setResultadoTexto("");
    setPesoIdeal("");
    setMostrarResultado(false);
  };

  const manejarCambioAltura = (texto) => {
    const valorNumerico = texto.replace(/[^0-9]/g, "");
    setAltura(valorNumerico);
  };

  const manejarCambioPeso = (texto) => {
    const valorNumerico = texto.replace(/[^0-9]/g, "");
    setPeso(valorNumerico);
  };

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
