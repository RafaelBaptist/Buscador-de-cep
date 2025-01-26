import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Keyboard,
} from "react-native";
import api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState("");
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  async function buscar() {
    if (cep == "") {
      alert("Digite um cep valido");
      setCep("");
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      console.log(response.data);
      Keyboard.dismiss();
      setCepUser(response.data);
    } catch (error) {
      console.log("ERROR:" + error);
    }
  }

  function limpar() {
    setCep("");
    inputRef.current.focus();
    setCepUser(null);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite seu CEP desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex:74737271"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.botao} onPress={buscar}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#cd3e1d" }]}
          onPress={limpar}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser && (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>
            <Text style={[styles.itemText, { color: "#cd3e1d" }]}>CEP:</Text>{" "}
            {cepUser.cep}
          </Text>
          <Text style={styles.itemText}>
            <Text style={[styles.itemText, { color: "#cd3e1d" }]}>
              Logradouro:
            </Text>{" "}
            {cepUser.logradouro}
          </Text>
          <Text style={styles.itemText}>
            <Text style={[styles.itemText, { color: "#cd3e1d" }]}>Bairro:</Text>{" "}
            {cepUser.bairro}
          </Text>
          2
          <Text style={styles.itemText}>
            <Text style={[styles.itemText, { color: "#cd3e1d" }]}>Cidade:</Text>{" "}
            {cepUser.localidade}
          </Text>
          <Text style={styles.itemText}>
            <Text style={[styles.itemText, { color: "#cd3e1d" }]}>Estado:</Text>{" "}
            {cepUser.uf}
          </Text>
        </View>
      )}
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
  resultado: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  itemText: {
    fontSize: 22,
    textAlign: "center",
  },
});
