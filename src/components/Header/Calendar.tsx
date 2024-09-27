import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const CalendarioFechasRestantes: React.FC = () => {
  const targetDate: string = '2024-12-18';  // Fecha objetivo
  const today: string = moment().format('YYYY-MM-DD');

  const [markedDates, setMarkedDates] = useState<{ [key: string]: { marked: boolean; dotColor: string; disableTouchEvent: boolean } }>({});

  useEffect(() => {
    const calculateMarkedDates = () => {
      const startDate = moment(today);
      const endDate = moment(targetDate);

      let dates: { [key: string]: { marked: boolean; dotColor: string; disableTouchEvent: boolean } } = {};
      for (let m = moment(startDate); m.isBefore(endDate); m.add(1, 'days')) {
        const formattedDate = m.format('YYYY-MM-DD');
        dates[formattedDate] = { 
          marked: true, 
          dotColor: 'red', 
          disableTouchEvent: true 
        };
      }
      setMarkedDates(dates);
    };

    calculateMarkedDates();
  }, [today, targetDate]);

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        markingType={'custom'}
        style={styles.calendar}
        theme={{
          calendarBackground: '#141414',  // Fondo negro
          textSectionTitleColor: '#ffffff',  // Meses y días en blanco
          dayTextColor: '#ffffff',  // Días en blanco
          todayTextColor: '#00adf5',  // Color del texto del día actual
          selectedDayBackgroundColor: '#ffffff',  // Fondo del día seleccionado
          selectedDayTextColor: '#000000',  // Texto del día seleccionado
          arrowColor: '#ffffff',  // Color de las flechas
          monthTextColor: '#ffffff',  // Color del texto del mes
          textMonthFontWeight: 'bold',  // Mes en negrita
        }}
      />
      <Text style={styles.countdownText}>
        Faltan {moment(targetDate).diff(today, 'months')} meses, {moment(targetDate).diff(today, 'weeks')} semanas, {moment(targetDate).diff(today, 'days')} días
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centra el contenido verticalmente
    alignItems: 'center',  // Centra el contenido horizontalmente
    padding: 16,
    backgroundColor: '#000',  // Fondo negro
  },
  calendar: {
    backgroundColor: '#000',  // Fondo negro
    width: '100%',  // Ajusta el ancho del calendario al 100% del contenedor
  },
  countdownText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default CalendarioFechasRestantes;
