import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const CalendarioFechasRestantes: React.FC = () => {
    const endDate = '2024-12-21'; // Fecha objetivo
    const [markedDates, setMarkedDates] = useState<{[key: string]: any}>({});
    const [countdown, setCountdown] = useState({ months: 0, weeks: 0, days: 0 });

    useEffect(() => {
        calculateCountdown();
        markDates();
    }, []);

    const markDates = () => {
        const today = moment().format('YYYY-MM-DD');
        const dates = {
            [endDate]: {
                customStyles: {
                    container: { backgroundColor: 'red', elevation: 2 },
                    text: { color: 'white' }
                }
            }
        };

        if (moment(endDate).isAfter(today)) {
            // Asegurarse de que sólo se marca la fecha específica si es futura
            setMarkedDates(dates);
        }
    };

    const calculateCountdown = () => {
        const today = moment();
        const targetDate = moment(endDate);
        const months = targetDate.diff(today, 'months');
        today.add(months, 'months');
        const weeks = targetDate.diff(today, 'weeks');
        today.add(weeks, 'weeks');
        const days = targetDate.diff(today, 'days');

        setCountdown({ months, weeks, days });
    };

    return (
        <View style={styles.container}>
            <View style={styles.calendarHeaderContainer}>
              <Text style={styles.calendarHeaderText}>Calendario</Text>
            </View>
            <Calendar
                markingType={'custom'}
                markedDates={markedDates}
                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    marginTop: 10, //distancia entre el calendario y las texto calendario
                }}
            />
            {/* Visualización del contador */}
            <Text style={styles.countdownLabel}>Faltan</Text>
            <View style={styles.countdownContainer}>
                <Text style={styles.countdownValue}>
                    <Text style={styles.number}>{countdown.months}</Text> <Text style={styles.unit}>meses </Text>
                    <Text style={styles.number}>{countdown.weeks}</Text> <Text style={styles.unit}>semanas </Text>
                    <Text style={styles.number}>{countdown.days}</Text> <Text style={styles.unit}>días</Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
},
calendarHeaderContainer: {
    marginTop: -50,
    alignSelf: 'flex-start', // Alinea a la izquierda dentro del contenedor
    marginLeft: 5,
    width: '100%', // Asegura que el contenedor ocupe el ancho completo
},
calendarHeaderText: {
    fontSize: 32, // Tamaño de fuente grande para destacar
    color: '#fff', // Color blanco
    fontFamily: 'RobotoMono-Medium',
    textShadowColor: '#9E9E9E',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 2,
},
  countdownLabel: {
    fontSize: 30, // Tamaño de fuente grande para destacar
    color: '#fff', // Color blanco
    fontFamily: 'RobotoMono-Medium',
    marginTop: 20, // Espacio entre el calendario y el texto "Faltan"
    marginBottom: -5, // Espacio entre "Faltan" y los números
    textAlign: 'center' // Centra el texto "Faltan"
  },
  countdownContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#141414',
      padding: 5,
  },
  countdownValue: {
      fontSize: 20,
  },
  number: {
      color: 'white',
      marginRight: 5, // Añade un pequeño espacio entre el número y la unidad
  },
  unit: {
      color: 'red',
      fontFamily: 'RobotoMono-Regular',
  }
});

export default CalendarioFechasRestantes;
