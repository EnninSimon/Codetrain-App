import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo.png'
function Home({ navigation }) {
    return (
        <View>
            <Image source={logo} style={styles.logo} />
            <View style={styles.codetrainContainer}>
                <Text style={styles.codetainContactsText}>CODETRAIN</Text>
                <Text style={styles.codetainContactsText2}>CONTACTS</Text>
            </View>
            <View style={styles.getStarted}>
                <TouchableOpacity onPress={() => navigation.navigate("KeepInTouch")}>
                    <Text style={styles.getStartedText}>GET STARTED</Text>
                    <Text style={styles.horizontalBar}></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    codetrainContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
    },
    codetainContactsText: {
        fontSize: 30,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        letterSpacing: 12
    },
    codetainContactsText2: {
        fontSize: 23,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        letterSpacing: 6
    },
    logo: {
        height: 60,
        width: 350,
        marginTop: 180,
    },
    getStarted: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 230,
    },
    getStartedText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 6, 
    },
    horizontalBar: {
        marginTop: 5,
        width: 180,
        height: 4,
        backgroundColor: '#ff1a1a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Home;
