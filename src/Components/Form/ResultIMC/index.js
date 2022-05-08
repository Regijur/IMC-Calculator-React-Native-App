import React from "react";
import { View, Text } from "react-native";
import styles from "./style"

export default (props) => (
    <View style={styles.container}>
        <Text style={styles.message}>{props.message}</Text>
        {(props.result) ?
            <>
            <Text style={styles.result}>{props.result}</Text>
            <Text style={styles.message}>{props.category}</Text>
            </>
            :
            <></>
        }
    </View>
)