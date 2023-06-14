import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState("");
  const [text, setText] = useState("");
  const [pei, setPEI] = useState("");

  const calculate = () => {
    const alturaCm = parseFloat(altura) / 100;
    const imcResult = (parseFloat(peso) / alturaCm ** 2).toFixed(1);
    const peiResult = Math.abs(alturaCm * 100 - 105);

    setIMC(`Su índice de masa corporal se encuentra en ${imcResult}`);
    setPEI(`Su peso ideal es ${peiResult >= 0 ? peiResult : 0}`);

    if (imcResult < 18.5) {
      setText("Desnutrición");
    } else if (imcResult >= 18.5 && imcResult <= 24.9) {
      setText("Normal");
    } else if (imcResult >= 25 && imcResult <= 26.9) {
      setText("Sobrepeso");
    } else if (imcResult >= 27 && imcResult <= 29.9) {
      setText("Obesidad grado 1");
    } else if (imcResult >= 30 && imcResult <= 39.9) {
      setText("Obesidad grado 2");
    } else if (imcResult > 40) {
      setText("Obesidad grado 3");
    }
  };

  const reset = () => {
    setAltura("");
    setPeso("");
    setIMC("");
    setText("");
    setPEI("");
  };

  const handleAlturaChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setAltura(numericValue);
  };

  const handlePesoChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setPeso(numericValue);
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
            onChangeText={handleAlturaChange}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.label}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            value={peso}
            onChangeText={handlePesoChange}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={calculate}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={reset}>
            <Text style={styles.buttonText}>Restablecer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultArea}>
          <Text style={styles.resultLabel}>Índice de masa corporal</Text>
          <Text style={styles.resultText}>{imc}</Text>
          <Text style={styles.resultText}>{text}</Text>
          <Text style={styles.resultText}>{pei}</Text>
        </View>
      </View>
    </View>
  );
}
