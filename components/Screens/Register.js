import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import profilePicture from '../../assets/profilePicture.jpg';
import { AntDesign } from '@expo/vector-icons';

class Register extends Component {
    render() {
        return (
                <ScrollView>
                    <Image style={styles.profilePictureBackground} source={profilePicture} />
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <AntDesign name="adduser" style={styles.icon} size={70} color="black" />
                            <Text style={styles.profilePicText}>ADD PROFILE PHOTO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textName}>Full Name</Text>
                            <TextInput style={styles.mainTextInput} autoCapitalize="words" placeholder="Maxwell Darko" textAlign="right" />
                        </View>
                        <Text style={styles.horizontaBar}></Text>
                    </View>
                    <View style={styles.inputContainer2}>
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textName}>Email        </Text>
                            <TextInput style={styles.mainTextInput} placeholder="mDarko@email.com" textAlign="right" />
                        </View>
                        <Text style={styles.horizontaBar}></Text>
                    </View>
                    <View style={styles.inputContainer2}>
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textName}>Phone Number</Text>
                            <TextInput style={styles.mainTextInput4Phone} placeholder="+233 (244) 245 190" textAlign="right" />
                        </View>
                        <Text style={styles.horizontaBar}></Text>
                    </View>
                    <View style={styles.inputContainer2}>
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textName}>Role          </Text>
                            <TextInput style={styles.mainTextInput} placeholder="Director of Marketing" textAlign="right" />
                        </View>
                        <Text style={styles.horizontaBar}></Text>
                    </View>
                    <View style={styles.inputContainer2}>
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textName}>Twitter     </Text>
                            <TextInput style={styles.mainTextInput} placeholder="@mdarko" textAlign="right" />
                        </View>
                        <Text style={styles.horizontaBar}></Text>
                    </View>
                    <View style={styles.inputContainer2}>
                        <View style={styles.textInputContainer}>
                            <Text style={styles.textName}>LinkedIn  </Text>
                            <TextInput style={styles.mainTextInput} placeholder="/maxwell.darko" textAlign="right" />
                        </View>
                        <Text style={styles.horizontaBar}></Text>
                    </View>
                    <TouchableOpacity style={styles.RegisterButton}>
                        <Text style={styles.RegisterText}>REGISTER</Text>
                    </TouchableOpacity>
                    
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    profilePictureBackground: {
        width: 360,
        height: 180,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -155
    },
    icon: {
        position: 'absolute',
        marginLeft: 33,
        marginTop: 18,
    },
    profilePicText: {
        fontWeight: 'bold',
        marginTop: 90
    },
    inputContainer: {
        marginTop: 80
    },
    inputContainer2: {
        marginTop: 25
    },
    textInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 15
    },
    textName: {
        fontSize: 16,
        marginLeft: 3
    },
    mainTextInput: {
        width: 250,
    },
    mainTextInput4Phone: {
        width: 210
    },
    horizontaBar: {
        height: 1,
        width: 321,
        backgroundColor: '#989898',
        marginHorizontal: 20,
        marginVertical: 5
    },
    RegisterButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3333',
        borderRadius: 25,
        marginHorizontal: 95,
        height: 45,
        marginTop: 45,
    },
    RegisterText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default Register;
