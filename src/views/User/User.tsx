import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Headers from '../../components/Header/Header'; // Asumiendo que el componente Header ya está creado

const User = () => {
    return(
        <View style={styles.container}>
            <Headers />
            <View style={styles.profileSection}>
                <View style={styles.profileItem}>
                    <Text style={styles.profileText}>Nicolas Arriola, 22</Text>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.profileText}>Licenciatura en informáticaa</Text>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.profileText}>Desarrollador Móvil</Text>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.profileText}>me encanta jugar valo y crear esta app</Text>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.profileText}>Tu elección fue: Vodka</Text>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.profileText}>Tu segunda elección fue: Mojito</Text>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.profileText}>Tu genero favorito fue: Cumbia</Text>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.profileText}>Tu mayor deseo fue: Que vengan mariachis a tocar en vivo !!</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
    },
    profileSection: {
        margin: 20,
    },
    profileItem: {
        backgroundColor: '#333333',
        padding: 10,
        borderRadius: 30,
        marginBottom: 10,
    },
    profileText: {
        color: 'white',
        fontSize: 16,
    }
});

export default User;
