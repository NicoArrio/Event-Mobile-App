import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { BarChart } from 'react-native-chart-kit';

import Headers from '../../components/Header/Header';

const screenWidth = Dimensions.get("window").width; // Obtiene el ancho de la pantalla

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // ancho de la línea del gráfico
  barPercentage: 0.5,
  useShadowColorFromDataset: false // color de sombra opcional desde el conjunto de datoss
};

const Statistics = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
    };
    
    return(
        <ScrollView style={styles.container}>
            <Headers />
            <BarChart
                style={styles.graphStyle} // Usar estilo definido en styles
                data={data}
                width={screenWidth} // Ancho dinámico de la pantalla
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k" // Añadir sufijo al eje Y, si no se necesita, puede ser una cadena vacía ""
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#141414',
    },
    graphStyle: {
        marginVertical: 8,
        borderRadius: 16
    }
});

export default Statistics;
