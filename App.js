import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState("");
  return (
    <SafeAreaView style={StyleSheet.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite seu CEP aqui:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex:74737271"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#cd3e1d" }]}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP:23452342</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: "#6643",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  text: {
    marginTop: 40,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },

  botao: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#728119",
  },
  botaoText: {
    fontSize: 22,
    color: "white",
  },
});
