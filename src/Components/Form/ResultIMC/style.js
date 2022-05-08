import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center',
        backgroundColor: '#333',
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    message:{
        fontSize: 20,
        color: '#fff',
        paddingVertical: 8,
    },
    result:{
        fontSize: 30,
        color: '#fff'
    }
});

export default styles;