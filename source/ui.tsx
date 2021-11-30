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
        <Text color="yellow" bold>{getIcon(data?.weather[0]?.main)}</Text>
      </Box>
      <Text>
        Current temperature is, <Text color="green">{data?.main?.temp}{unit === "metric" ? 'C' : 'F'}</Text>
      </Text>
    </Box>
  )
};

module.exports = App;
export default App;
