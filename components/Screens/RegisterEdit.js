import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import editPhoto from '../../assets/editPhoto.jpg';

class RegisterEdit extends Component {
    render() {
        return (
            <View>
                <Image style={styles.editBackground} source={editPhoto} />
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Text style={styles.editProfile}>EDIT PROFILE PHOTO</Text>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    editBackground: {
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
    },
    editProfile: {
        fontWeight: 'bold',
        marginTop: 60,
        borderWidth: 1,
        padding: 5,
        borderRadius: 8,
        borderColor: '#fff',
        color: '#fff'
    },
    inputContainer: {
        marginTop: 105
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
        marginTop: 40,
    },
    RegisterText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default RegisterEdit;
