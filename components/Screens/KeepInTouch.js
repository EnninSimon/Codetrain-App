import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import picture from '../../assets/pic.jpg'



function KeepInTouch({ navigation }) {

    return (
        <View>
            <Image source={picture} style={styles.backGround} />
            <View>
                <Text style={styles.title}>KEEP IN TOUCH WITH THE PEOPLE OF CODETRAIN</Text>
                <Text style={styles.KeepInTouchDescription}>Sign in or register with your codetrain email</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                    <Text style={styles.mainButton}>REGISTER</Text>
                    <Text style={styles.horizontalBarRegister}></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("SignIn")}>
                    <Text style={styles.mainButton}>SIGN IN</Text>
                    <Text style={styles.horizontalBar}></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backGround: {
        width: 360,
        height: 410,
    },
    title: {
        fontSize: 21,
        marginHorizontal: 5,
        marginTop: 23,
        fontWeight: 'bold'
    },
    KeepInTouchDescription: {
        marginHorizontal: 5,
        marginTop: 15,
        color: '#7a7a7a',
        fontSize: 15,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 5,
        marginTop: 190,
    },
    mainButton: {
        fontSize: 20,
        marginHorizontal: 45,
        fontWeight: 'bold',

    },
    horizontalBar: {
        marginTop: 3,
        width: 90,
        height: 4,
        backgroundColor: '#ff1a1a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 37
    },
    horizontalBarRegister: {
        marginTop: 3,
        width: 115,
        height: 4,
        backgroundColor: '#ff1a1a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 36
    }
})


export default KeepInTouch;
