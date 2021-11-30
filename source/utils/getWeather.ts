// import React from 'react'

export const getWeather: any = async (city: string, unit: string) => {
  const axios = require('axios').default;

  const API_KEY = process.env['REACT_APP_OPENWEATHER_API_KEY']
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`

  // const [data, setData] = React.useState<any>()
  // React.useEffect(() => {
  //   axios.get(url).then((res: any) => setData(res.data))
  // }, [])
  let weather
  try {
    weather = await axios.get(url)
  } catch (error) {
    console.error(error)
  }

  return weather.data
}
