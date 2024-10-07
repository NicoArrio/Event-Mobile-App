import React, {FC, useEffect, useState} from "react";
import { StyleSheet, View, Text, Modal,Image} from "react-native";
import { Button, Icon, Input } from "@rneui/themed";
import { launchImageLibrary } from 'react-native-image-picker';
import useFriendLocalStorage from "../../../hooks/useFriendLocalStorage";


type AddFriendModalProps = {
    onClose: (shouldUpdate?: boolean) => void; //funcion para cerrar el modal
    visible: boolean; 
};

const addFriendLocal: FC<AddFriendModalProps> = ({ onClose, visible }) => { 
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [description,setDescription] = useState<string>(''); 
    const [signo,setSigno]=useState<string>('');
    const [imageUri, setImageUri] = useState<string | undefined>();
    const {onSaveUser} = useFriendLocalStorage();

    //reseteo del formulario
    useEffect(()=>{
        setName('');
        setAge('');
        setDescription('');
        setSigno('');
        setImageUri(undefined); // Resetear también la imagen
    },[visible]);

    //cierre form al clickear save
    const handAddPress = async() => {
        try {
            await onSaveUser({
                name,
                age,
                description,
                signo,
                imageUri,
            })
            onClose(true); //actualiza y trae todos los elementos
        } catch (error) {
            console.log(error) //reject??
        }
        
    }

    const handleChoosePhoto = () => {
        const options = {
            mediaType: 'photo' as const, // Corrección aquí usando 'as const'
        };
        launchImageLibrary(options, response => {
            if (response.assets && response.assets[0].uri) { // Ajustado para acceder correctamente a la URI
                setImageUri(response.assets[0].uri);
            }
        });
    };

    return (
        <Modal visible={visible} onRequestClose={() => onClose(false)} transparent> 
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.closeContainer}>
                        <Button 
                            icon={<Icon name='close' size={24}/>} 
                            onPress={() => onClose(false)}
                            type="clear"
                        />
                    </View>

                    <View style={styles.formItem}>
                        <View style={styles.inputContainer}>
                            <Input 
                                value={name} 
                                onChangeText={(text: string) => setName(text)}
                            />
                        </View>
                        <View style={styles.legendContainer}>
                            <Text style={styles.legendContent}>Nombre</Text>
                        </View>
                    </View>

                    <View style={styles.formItem}>
                        <View style={styles.inputContainer}>
                            <Input
                                value={age} 
                                onChangeText={(text: string) => setAge(text)}
                            />
                        </View>
                        <View style={styles.legendContainer}>
                            <Text style={styles.legendContent}>edad</Text>
                        </View>
                    </View>

                    <View style={styles.formItem}>
                        <View style={styles.inputContainer}>
                            <Input
                                value={description} 
                                onChangeText={(text: string) => setDescription(text)}
                            />
                        </View>
                        <View style={styles.legendContainer}>
                            <Text style={styles.legendContent}>descripcion-max110</Text>
                        </View>
                    </View>

                    <View style={styles.formItem}>
                        <View style={styles.inputContainer}>
                            <Input
                                value={signo} 
                                onChangeText={(text: string) => setSigno(text)}
                            />
                        </View>
                        <View style={styles.legendContainer}>
                            <Text style={styles.legendContent}>signo</Text>
                        </View>
                    </View>
                    
                    {/* C A R G A R    I M A G E N    L O C A L */}
                    {imageUri && (
                        <Image source={{ uri: imageUri }} style={styles.imageContainer} />
                    )}
                    <Button title="Cargar Imagen" onPress={handleChoosePhoto} />
                    
                    <View style={styles.buttonContainer}>
                        <Button 
                            title="add" 
                            icon={<Icon name="upload" color="#fff" />}
                            radius='lg'
                            color="#4ecb71"
                            onPress={handAddPress}
                            disabled={
                                name.trim()===''||age.trim()===''||description.trim()===''
                            }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    //rectangulo
    content:{
        width:'75%',
        backgroundColor:'#ffff',
        padding: 18,
        borderRadius: 24,
        shadowColor: "#000", // todos los shadows son para iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeContainer: {
        alignItems: 'flex-end'
    },
    //formulario
    formItem: {
        flexDirection: 'row',
        alignItems: "center",
    },
    inputContainer: {
        flex: 2,
    },
    legendContainer: {
        flex: 1,
    },
    legendContent: {
        fontSize:12,
        fontWeight: "500",
        fontFamily:'RobotoMono-Regular'
    },
    buttonContainer: {
        alignItems: 'flex-end',
    },
    imageContainer: {
        width: 150, // Ajusta según necesidades
        height: 150, // Ajusta según necesidades
        marginBottom: 10, // Espacio después de la imagen
    },
})

export default addFriendLocal