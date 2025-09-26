import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, } from "react-native"; //Zona de importação de bibliotecas

export default function Home(){ //Componente principal
    const [name, setName] = useState(''); //useState é um controlador de estado que retorna um array, onde a primeira posição retorna o name, eqt setName é uma função anonima que tem a capacidade de alterar o name; podemos usar com arrays e objetos; entre os colchetes é uma atribuição desconstruída
    const [tel, setTel] = useState('');
    const [age, setAge] = useState('');
    const [hobbie, setHobbie] = useState('');
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    return ( //retorno do componente
        <View style={styles.body}> 
        <TextInput placeholder="Digite seu nome" onChangeText={setName}/>
        <TextInput placeholder="Digite seu número de telefone" onChangeText={setTel}/>  
        <TextInput placeholder="Digite sua idade" onChangeText={setAge}/>
        <TextInput placeholder="Digite seu hobbie" onChangeText={setHobbie}/>

        <TextInput placeholder="Digite sua altura" onChangeText={(altura) => setAltura(parseFloat(altura))} keyboardType="numeric"/>
        <TextInput placeholder="Digite seu peso" onChangeText={(peso) => setPeso(parseFloat(peso))} keyboardType="numeric"/>
        <Text onPress={() => setImc(peso / (altura * altura))} style={{backgroundColor: 'red', color: 'white', textAlign: 'center', marginTop: 10, marginBottom: 10, padding: 5}}>Calcular IMC</Text>
        <Text>Seu IMC é: {imc.toFixed(2)}</Text>

            <Text style={styles.title}> Meu primeiro aplicativo</Text>
            <Text> Olá, {name}! <br/>
            Seu telefone é {tel}. <br/>
            Você tem {age} anos. <br/>
            Seu hobbie é {hobbie}.
            Seu peso é {peso}kg e sua altura é {altura}m.
            Seu IMC é {imc.toFixed(2)}.
            </Text>
            
        </View> //parte obrigatória do componente; corpo do componente
    );
}

const styles = StyleSheet.create({ //estilização do componente
    body: {
        backgroundColor: "yellow",
        padding: "auto"
    },
    title: {
        color: "blue",
        fontSize: 20,
        
    }
});