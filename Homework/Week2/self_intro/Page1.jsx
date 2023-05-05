import React from 'react';
import {Text, View, Button, Image} from 'react-native';

function Page1({ navigation }) {
    return (
        //顯示在螢幕畫面上的都要放在這
        <View style={{alignSelf:'center',alignItems:'center'}}>
        <View style={{width:300,height:300,marginTop:100,backgroundColor:'#F0F3BD'}}>
            <Image
            style={{width: '100%',height: '100%'}}
            source={{
                uri: 'https://shop.line-scdn.net/themeshop/v1/products/65/db/d5/65dbd5f2-a879-458b-ae34-a7cb27c1f544/203/WEBSTORE/icon_198x278.png',
            }}
            />
            </View>
            <View style={{backgroundColor:'#00BFB2',width:100,height:100}} >
            <Text>介紹文字</Text>
            </View>
            <Button
                title="打個招呼吧!"
                onPress={() => navigation.navigate('Next')}
            />  
        </View>
    );
}
export default Page1;