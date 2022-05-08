import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    label:{
        fontSize: 20,
        margin: 5,
    },
    button:{
        backgroundColor: '#ee0823',
        borderRadius: 50,
        margin: 5,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        color: '#fff',
        padding: 10,
        fontSize: 25,
        fontWeight: "bold",
    },  
    input:{
        backgroundColor: '#eee',
        margin: 5,
        padding: 10,
        borderRadius: 15,
    }
})

export default styles;