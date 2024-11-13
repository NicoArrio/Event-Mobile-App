import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Headers from '../../components/Header/Header';

const User = () => {
  return (
    <ScrollView style={styles.container}>
        <Headers />

        {/* D A T A    P R O F I L E */}
        <View style={styles.profileSection}>
            <View style={styles.nameAgeSection}>
                <Text style={styles.text}>Nicolas Arriola, 22</Text>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.profilePicSection}>
                        <Image source={require('../../images/edward.jpg')} style={styles.profilePic} />
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.additionalInfoSection}>
                        <Text style={styles.text}>Licenciatura en informática</Text>
                    </View>

                    <View style={styles.additionalInfoSection}>
                        <Text style={styles.text}>Desarrollador movil</Text>
                    </View>
                </View>
            </View>

            <View style={styles.descriptionSection}>
                <Text style={styles.text}>Profesional del turismo, dedicada a crear experiencias únicas para viajeros internacionales</Text>
            </View>
        </View>

        {/* P L U S    I N F O R M A T I O N */}
        <View style={styles.plusInfoSection}>

        <View style={styles.dataSection}>
            <View style={styles.iconoSection}>
                <Image source={require('../../images/edward.jpg')} style={styles.icon} />
            </View>
            <View style={styles.answerContainer}>
                <Text style={styles.electionText}>Tu elección fue:</Text>
                <View style={styles.answerSection}>
                    <Text style={styles.text}>Vodka</Text>
                </View>
            </View>
        </View>

        <View style={styles.dataSection}>
            <View style={styles.iconoSection}>
                <Image source={require('../../images/edward.jpg')} style={styles.icon} />
            </View>
            <View style={styles.answerContainer}>
                <Text style={styles.electionText}>Tu segunda elección fue:</Text>
                <View style={styles.answerSection}>
                    <Text style={styles.text}>Mojito</Text>
                </View>
            </View>
        </View>

        <View style={styles.dataSection}>
            <View style={styles.iconoSection}>
                <Image source={require('../../images/edward.jpg')} style={styles.icon} />
            </View>
            <View style={styles.answerContainer}>
                <Text style={styles.electionText}>Tu género favorito fue:</Text>
                <View style={styles.answerSection}>
                    <Text style={styles.text}>Cumbia</Text>
                </View>
            </View>
        </View>

        <View style={styles.dataDreamSection}>
            <View style={styles.iconoSection}>
                <Image source={require('../../images/edward.jpg')} style={styles.icon} />
            </View>
            <View style={styles.dreamAnswerContainer}>
                <Text style={styles.electionText}>Tu mayor deseo fue:</Text>
                <View style={styles.dreamAnswerSection}>
                    <Text style={styles.text}>Que vengan mariachis a tocar en vivo !!</Text>
                </View>
            </View>
        </View>
        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#141414',
    },
    // DATA PROFILE
    profileSection: {
        padding: 1
    },
    listContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:15,
    },
    leftContainer:{
        flex:1,
        padding: 0, 
    },
    rightContainer:{
        flex:1,
        marginLeft: -60,
    },
    nameAgeSection: {
        backgroundColor: '#333333',
        borderRadius: 30,
        padding: 10,
        marginBottom: 10,
    },
    profilePicSection: {
        alignItems: 'flex-start', 
        marginBottom: 10,
    },
    profilePic: {
        width: 140,
        height: 190,
        borderRadius: 30,
    },
    additionalInfoSection: {
        width: '100%',
        height: 84,
        backgroundColor: '#333333',
        borderRadius: 30,
        padding: 15,
        marginBottom: 20,
    },
    descriptionSection: {
        width: '100%',
        height: 80,
        backgroundColor: '#333333',
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingTop: 10,
        textAlignVertical: 'top',
        marginBottom: 40,
    },
    // PLUS INFORMATION
    plusInfoSection: {
        padding: 1,
    },
    dataSection: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    iconoSection: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    answerContainer: {
        flex: 2,
    },
    dreamAnswerContainer:{
        flex: 2,
    },
    electionText: {
        color: 'white',
        fontFamily: 'RobotoMono-Regular',
        fontSize: 16,
        marginBottom: 10,  // Espacio entre la pregunta y la respuesta
    },
    answerSection: {
        backgroundColor: '#333333',
        borderRadius: 30,
        padding: 10,
    },
    dataDreamSection: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    dreamAnswerSection: {
        height: 100,
        backgroundColor: '#333333',
        borderRadius: 30,
        padding: 10,
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontFamily: 'RobotoMono-Regular',
        fontSize: 16,
    },
    textAnwer:{
        color: 'white',
        fontFamily: 'RobotoMono-Regular',
        fontSize: 16,
    },
});

export default User;
