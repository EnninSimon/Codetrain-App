import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import myProfile from '../../assets/myProfile1.jpg'
import { Entypo, Feather, Ionicons, SimpleLineIcons, } from '@expo/vector-icons';

const MyProfile = ({navigation}) => {
    return (
        <View>
            <View style={styles.profileContainer}>
                <Image source={myProfile} style={styles.profileImage} />
                <View>
                    <Text style={styles.userName}>Larry Hutchson</Text>
                    <Text style={styles.userRole}>Sales Executive</Text>
                </View>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity>
                    <Text style={styles.icon1}><Entypo name="twitter-with-circle" size={30} color="#4c4c4c" /></Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.icon2}><Entypo name="linkedin-with-circle" size={30} color="#4c4c4c" /></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.multipleIconsContainer}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.multipleIcons}>
                        <Text><Feather name="phone" size={24} color="black" /></Text>
                    </TouchableOpacity>
                    <Text style={styles.address}>+233 (245) 254 123</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.multipleIcons}>
                        <Text><Ionicons name="mail-outline" size={24} color="black" /></Text>
                    </TouchableOpacity>
                    <Text style={styles.address}>larry@codetraingh.com</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.multipleIcons}>
                        <Text><SimpleLineIcons name="location-pin" size={24} color="black" /></Text>
                    </TouchableOpacity>
                    <Text style={styles.address}>Shoredith, UK</Text>
                </View>
            </View>
        </View>
    );
}

styles = StyleSheet.create({
    profileImage: {
        width: 75,
        height: 75,
        borderRadius: 40
    },
    profileContainer: {
        marginTop: 50,
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 11,
        marginHorizontal: 10
    },
    userRole: {
        color: "#727272",
        marginHorizontal: 10
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 14,
    },
    icon1: {
        marginHorizontal: 20,
    },
    multipleIconsContainer: {
        marginTop: 40,
        marginHorizontal: 20,
    },
    multipleIcons: {
        marginVertical: 20
    },
    iconContainer:{
        display: 'flex',
        flexDirection: 'row'
    },
    address:{
        fontSize: 17,
        fontWeight: 'bold',
        color: "#727272",
        marginLeft: 15,
        marginTop: 22
    }
})

export default MyProfile;
