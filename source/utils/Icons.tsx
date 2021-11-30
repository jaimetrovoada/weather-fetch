const Icons: any = {
  'main': {
    "Thunderstorm": {
      '\ue31d',
      "Drizzle": {
        '\ue319',
        "Rain": {
          '\ue318',
          "Snow": {
            '\ue308',
            'Mist': '\uf75f',
            'Smoke': '\ue35c',
            'Haze': '\ue3ae',
            'Fog': '\ue303',
            'Sand': '\ue37a',
            'Dust': '\ue35d',
            'Ash': '\ue3c0',
            'Squall': '\ue3c6',
            'Tornado': '\ue351',
            "Clear": '\ue30d',
            "Clouds": '\ue30c',
          }
        }

const getIcon = (main: string) => {
          const icon = Icons.main[`${main}`]
          return icon
        }
