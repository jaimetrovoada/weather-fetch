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
  const os = require('os')
  const fs = require('fs');

  const totalMemory = os.totalmem() / 1048576
  // const totalFreeMemory = os.freemem() / 1048576
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const totalAvailMemory = 1024 * Number(/MemAvailable:[ ]+(\d+)/.exec(fs.readFileSync('/proc/meminfo', 'utf8'))[1]) / 1048576;

  const totalUsedMemory = totalMemory - totalAvailMemory

  const uptime = (() => {
    if (os.uptime() < 3600) {
      return new Date(os.uptime() * 1000)?.toISOString()?.substr(14, 5)
    }
    return new Date(os.uptime() * 1000)?.toISOString()?.substr(11, 8)
  })()

  return (
    <Box borderStyle="round" borderColor="yellow">
      <Box marginRight={10}>
        <Text color="red">{city.toUpperCase()}</Text>
        <Text bold>{getIcon(data?.weather[0]?.icon)}</Text>
      </Box>
      <Box flexDirection="column">
        <Box flexDirection="column">
          <Text>
            <Text bold color="#cc241d">Condition: </Text>
            <Text>{data?.weather[0].description}</Text>
          </Text>
          <Text>
            <Text bold color="#cc241d">Temp: </Text>
            <Text>{data?.main?.temp}{unit === "metric" ? 'C' : 'F'}</Text>
          </Text>
          <Text>
            <Text bold color="#cc241d">Max: </Text>
            <Text>{data?.main?.temp_max}{unit === "metric" ? 'C' : 'F'}</Text>
          </Text>
          <Text>
            <Text bold color="#cc241d">Min: </Text>
            <Text>{data?.main?.temp_min}{unit === "metric" ? 'C' : 'F'}</Text>
          </Text>
          <Text>
            <Text bold color="#cc241d">Wind: </Text>
            <Text>{data?.wind?.speed}{unit === "metric" ? 'kph' : 'mph'}</Text>
          </Text>
        </Box>
        <Box flexDirection="column">
          <Text>Host: {os?.hostname()}</Text>
          <Text>Kernel: {os?.release()} {os?.version()}</Text>
          <Text>CPU: {os?.cpus()[0]?.model}</Text>
          <Text>Memory: {totalUsedMemory?.toFixed()}MB/{totalMemory.toFixed()}MB</Text>
          <Text>Uptime: {uptime}</Text>
        </Box>
      </Box>
    </Box>
  )
};

module.exports = App;
export default App;
