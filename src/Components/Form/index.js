import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Alert} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default () => {
    const [height, SetHeight] = useState(null);
    const [weight, SetWeight] = useState(null);
    const [message, SetMessage] = useState("Preencha os valores de peso e altura");
    const [imc, SetIMC] = useState(null);
    const [category, SetCategory] = useState(null);

    const ImcCalculator = () => SetIMC((weight * 10000 / (height * height)).toFixed(2))

    const ValidateValues = () => {
        if(height && weight){
            ImcCalculator();
            SetMessage("Seu IMC é:");
        }
        else{
            SetMessage("Preencha os valores de peso e altura")
            SetIMC(null)
            Vibration.vibrate()
            Alert.alert('Informações Inválidas', 'Preencha os valores de peso e altura')
        }
    }

    useEffect(() => {
        if(imc){
            if(imc < 16){
                SetCategory("Magreza Grau III")
            }
            else if(imc < 16.9){
                SetCategory("Magreza Grau II")
            }
            else if(imc < 18.4){
                SetCategory("Magreza Grau I")
            }
            else if(imc < 24.9){
                SetCategory("Saudável")
            }
            else if(imc < 29.9){
                SetCategory("Pré-obesidade")
            }
            else if(imc < 34.9){
                SetCategory("Obesidade Moderada (Grau I)")
            }
            else if(imc < 39.9){
                SetCategory("Obesidade Severa (Grau II)")
            }
            else{
                SetCategory("Obesidade Mórbida (Grau III)")
            }
        }
        else{
            SetCategory(null)
        }
    }, [imc])

    return(
    <View style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.label}>Altura:</Text>
            <TextInput 
                placeholder="Digite sua altura em cm" 
                keyboardType="numeric"
                onChangeText={SetHeight}
                value={height}
                style={styles.input}
            />
            <Text style={styles.label} >Peso:</Text>
            <TextInput 
                placeholder="Digite seu peso em Kg" 
                keyboardType="numeric"
                onChangeText={SetWeight}
                value={weight}
                style={styles.input}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={()=>ValidateValues()}
            ><Text style={styles.buttonText}>Calcular IMC</Text></TouchableOpacity>
        </View>
        <ResultIMC message={message} result={imc} category={category}/>
    </View>
)}