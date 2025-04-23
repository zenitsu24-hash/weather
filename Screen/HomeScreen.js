import { View, Text, TouchableOpacity, TextInput, Image, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WeekWeather from '../Components/WeekWeather'

const {height, width} = Dimensions.get('window')
const HomeScreen = () => {

  const [weather, setWeather] = useState([])
  const [search, setSearch] = useState('New York')

  const fetchWeather = async() => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bf7b168cef51f022225d46cde159883c&units=metric`)
    const res = await data.json()
    setWeather(res)
  }

  useEffect(() => {
    if(search){
      fetchWeather()
    }
  }, [search])

  const image = () => {
    if(weather.weather && weather.weather[0].main == 'Clear'){
      return 'https://static.vecteezy.com/system/resources/previews/018/887/522/original/yellow-sun-icon-png.png'
    }
    else if(weather.weather && weather.weather[0].main == 'Drizzle'){
      return 'https://cdn-icons-png.flaticon.com/512/4837/4837678.png'
    }
    else if(weather.weather && weather.weather[0].main == 'Clouds'){
      return 'https://cdn1.iconfinder.com/data/icons/hawcons/32/700118-icon-20-clouds-1024.png'
    }
    else if(weather.weather && weather.weather[0].main == 'Mist'){
      return 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png'
    }
    else if(weather.weather && weather.weather[0].main == 'Rain'){
      return 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png'
    }
    else if(weather.weather && weather.weather[0].main == 'Snow'){
      return 'https://cdn-icons-png.flaticon.com/512/9437/9437943.png'
    }
    else{
      return 'https://static.vecteezy.com/system/resources/previews/018/887/522/original/yellow-sun-icon-png.png'
    }
  }


  return (
    <View style={{flex: 1, backgroundColor: 'lightblue'}}>
      <SafeAreaView>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 15, marginRight: 20}}>
            <TouchableOpacity>
                <Text style={{fontSize: 15, color: 'white', fontWeight: '500', marginTop: 5}}>Search By</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize: 19, color: 'white', fontWeight: '500', marginTop: 2}}>City</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize: 19, color: 'white', fontWeight: '500', marginTop: 2}}>Postal Code/Zip</Text>
            </TouchableOpacity>
        </View>

        <View>
          <View style={{height: height*0.08}}>
            <TextInput onChangeText={(text) => setSearch(text)} placeholder='City' placeholderTextColor={'black'} style={{paddingTop: 14, paddingLeft: 18, flex: 1, fontSize: 16, fontWeight: '400', color: 'black', letterSpacing: 1, backgroundColor: 'white', marginLeft: 12, marginRight: 12, borderRadius: 10, marginTop: 15, height: 20}}/>
          </View>
          <View>
            <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>{weather.sys?.country}/{weather.name}</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
              <Image source={{uri: `${image()}`}} height={height*0.1} width={width*0.2}/>
              {weather.main && <Text style={{fontSize: 50}}>{Math.round(weather.main.temp)} °C</Text>}
            </View>
            <Text style={{fontSize: 20, textAlign: 'center', marginTop: 10}}>{weather.weather ? weather.weather[0]?.description : ''}</Text>
          </View>
        </View>

        <View style={{height: height*0.17, backgroundColor: 'white', borderRadius: 10, marginTop: 30, marginLeft: 12, marginRight: 12}}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginLeft: 19, marginRight: 19}}>
            <View>
              <Text style={{fontSize: 20}}>Feels</Text>
              <Text style={{fontSize: 20}}>{weather.main ? Math.round(weather.main.feels_like) : 'N/A'} °C</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>Low</Text>
              <Text style={{fontSize: 20}}>{weather.main ? Math.round(weather.main.temp_min) : 'N/A'} °C</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>High</Text>
              <Text style={{fontSize: 20}}>{weather.main ? Math.round(weather.main.temp_max) : 'N/A'} °C</Text>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 10, marginLeft: 19, marginRight: 19}}>
            <View>
              <Text style={{fontSize: 20}}>Wind</Text>
              <Text style={{fontSize: 20}}>{weather.wind ? Math.round(weather.wind.speed) : 'N/A'} M/S</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>Humidity</Text>
              <Text style={{fontSize: 20}}>{weather.main ? weather.main.humidity : 'N/A'}%</Text>
            </View>
            <View>
              <Text style={{fontSize: 20}}>Rain</Text>
              <Text style={{fontSize: 20}}>0 Mm</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 3}}>
          <WeekWeather week={'Wed'} weather={'Clear Sky'} temp={32} feels={27} url={'https://static.vecteezy.com/system/resources/previews/018/887/522/original/yellow-sun-icon-png.png'}/>
          <WeekWeather week={'Thu'} weather={'Clear Sky'} temp={33} feels={25} url={'https://static.vecteezy.com/system/resources/previews/018/887/522/original/yellow-sun-icon-png.png'}/>
          <WeekWeather week={'Fri'} weather={'Little Rain'} temp={31} feels={24} url={'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png'}/>
          <WeekWeather week={'Sat'} weather={'Little Rain'} temp={36} feels={24} url={'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png'}/>
          <WeekWeather week={'Sun'} weather={'Little Rain'} temp={33} feels={26} url={'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png'}/>
          <WeekWeather week={'Mon'} weather={'Clear Sky'} temp={32} feels={30} url={'https://static.vecteezy.com/system/resources/previews/018/887/522/original/yellow-sun-icon-png.png'}/>
        </ScrollView>
    </View>
  )
}

export default HomeScreen