import React,{useState} from 'react';
import { Alert, StyleSheet, Text, View, Button, Image, TextInput, SafeAreaView} from 'react-native';
import styles from './style.jsx';

function Page1({ navigation }) {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const handleRegister = () => {
        if(!name.trim() || !id.trim()){
            Alert.alert('錯誤','姓名與學號不能為空白');
            return;
        }
        navigation.navigate('Page2', {name, id});
    }
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={text => setName(text)}
                value={name}
                placeholder="輸入姓名"
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setId(text)}
                value={id}
                placeholder="輸入學號"
                keyboardType="numeric"
            />
            <Button
                title={"註冊"}
                onPress={handleRegister}
            />
        </SafeAreaView>
    );
}
export default Page1;