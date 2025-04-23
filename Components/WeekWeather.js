import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'

const {height, width} = Dimensions.get('window')
const WeekWeather = ({week, weather, temp, feels, url}) => {
  return (
    <View style={{height: height*0.09, display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', marginLeft: 12, marginRight: 12, marginTop: 20, borderRadius: 10}}>
      <Text style={{fontSize: 25, marginLeft: 10}}>{week}</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 6}}>
        <Image source={{uri: `${url}`}} height={30} width={30}/>
        <Text style={{fontSize: 16}}>{weather}</Text>
      </View>
      <View style={{marginRight:10}}>
        <Text style={{fontSize: 25}}>{temp} °C</Text>
        <Text style={{fontSize: 18}}>feels {feels} °C</Text>
      </View>
    </View>
  )
}

export default WeekWeather