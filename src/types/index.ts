export type Guest= {
    name: string;
    age: string;
    description: string;
    signo: string;
    imageUri?: string; // Campo opcional para la URL de la imagen
};

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
  };