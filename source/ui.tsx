import React, { FC } from 'react';
import { Text, Box } from 'ink';
import { getIcon } from './utils/Icons'

const App: FC<{ city?: string, unit?: string }> = ({ city = 'London', unit = "metric" }) => {
  require('dotenv').config()
  const axios = require('axios').default;

  const API_KEY = process.env['REACT_APP_OPENWEATHER_API_KEY']
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`

  const [data, setData] = React.useState<any>()
  React.useEffect(() => {
    axios.get(url).then((res: any) => setData(res.data))
  }, [])

  return (


    <Box borderStyle="round" borderColor="yellow" flexDirection="column">
      <Box>
        <Text color="red">{city.toUpperCase()}</Text>
        <Text bold>{getIcon(data?.weather[0]?.icon)}</Text>
      </Box>
      <Box flexDirection="column">
        <Text>
          Currently is <Text color="green">{data?.weather[0].description}</Text>,</Text>
        <Text> with a temperature of <Text color="green">{data?.main?.temp}{unit === "metric" ? 'C' : 'F'}</Text></Text>
      </Box>
      <Box flexDirection="column">
        <Text>Max. temperature of: {data?.main?.temp_max}{unit === "metric" ? 'C' : 'F'}</Text>
        <Text>Min. temperature of: {data?.main?.temp_min}{unit === "metric" ? 'C' : 'F'}</Text>
        <Text>Wind speeds of: {data?.wind?.speed}{unit === "metric" ? 'kph' : 'mph'}</Text>
      </Box>
    </Box>
  )
};

module.exports = App;
export default App;
