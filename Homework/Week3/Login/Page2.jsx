import React,{useState} from 'react';
import { Alert, StyleSheet, Text, View, Button, Image, TextInput, SafeAreaView} from 'react-native';
import styles from './style.jsx';

function Page2({ route }) {
    const { name, id } = route.params;
    return (
        <View style={styles.container}>
            <Text>註冊成功</Text>
            <Text>姓名：{name}</Text>
            <Text>學號：{id}</Text>
        </View>
    );
}
export default Page2;