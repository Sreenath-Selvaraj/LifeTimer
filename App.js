import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

export default function App() {
    const [dob,setdob] = useState('1995-10-17');
    const averageLife = 2193208164;
    const maxLife = 3155695200;
    const [averageRemainimgTimer,setAvergaeRemainingTimer] = useState({
        years: 0,
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    });
    const [maxRemainingTimer,setMaxRemainingTimer] = useState({
        years: 0,
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    });
    const calculateAverageRemainimgTimer = ()=> {
        const currentAgeInSeconds = moment().diff(dob, 'seconds');;
        let timeinseconds = averageLife - currentAgeInSeconds;
        const maxRemainingSeconds = maxLife - currentAgeInSeconds;
      const timer={years: 0,
          days:0,
          hours:0,
          minutes:0,
          seconds:0}
        var minutes = Math.floor(timeinseconds / 60);
        timer.seconds = timeinseconds - minutes * 60
        var hours = Math.floor(minutes/60);
        timer.minutes = minutes - hours*60;
        var days = Math.floor(hours/24);
        timer.hours = hours - days*24;
        var years = Math.floor(days/365);
        timer.days = days - years*365;
        timer.years  =  years;
        setAvergaeRemainingTimer(timer);
    };
    const calculateMaxRemainimgTimer = ()=> {
        const currentAgeInSeconds = moment().diff(dob, 'seconds');;
        const timeinseconds = maxLife - currentAgeInSeconds;
        const timer={years: 0,
            days:0,
            hours:0,
            minutes:0,
            seconds:0}
        var minutes = Math.floor(timeinseconds / 60);
        timer.seconds = timeinseconds - minutes * 60
        var hours = Math.floor(minutes/60);
        timer.minutes = minutes - hours*60;
        var days = Math.floor(hours/24);
        timer.hours = hours - days*24;
        var years = Math.floor(days/365);
        timer.days = days - years*365;
        timer.years  =  years;
        setMaxRemainingTimer(timer);
    };
useEffect(()=>{
    const interval = setInterval(() => {
    calculateAverageRemainimgTimer();
    calculateMaxRemainimgTimer();
    }, 1000);
    return () => clearInterval(interval);
},[])
    return (
    <View style={styles.container}>
        <View style={styles.top} >
            <Text style={styles.header}>
                Average
            </Text>
            <Text style={styles.time}>
                {averageRemainimgTimer.years} Years : {("0" + averageRemainimgTimer.days).slice(-3)} Days : {("0" + averageRemainimgTimer.hours).slice(-2)} : {("0" + averageRemainimgTimer.minutes).slice(-2)} :{("0" + averageRemainimgTimer.seconds).slice(-2)}
            </Text>
        </View  >
        <View style={styles.top} >
            <Text style={styles.header}>
                Maximum
            </Text>
            <Text style={styles.time}>
                {maxRemainingTimer.years} Years : {("0" + maxRemainingTimer.days).slice(-3)} Days : {("0" + maxRemainingTimer.hours).slice(-2)} : {("0" + maxRemainingTimer.minutes).slice(-2)} :{("0" + maxRemainingTimer.seconds).slice(-2)}
            </Text>
        </View  >
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
    top: {
        alignItems: 'center',
        padding:30,
    },
    header:{
        fontSize: 40,
        fontWeight: "bold",
        padding: 10,
    },
    time:{
        color:'orange',
        fontSize: 20,
    }
});
