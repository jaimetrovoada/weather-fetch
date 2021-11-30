const Icons: any = {
  "01d": "☀️",
  "02d": "⛅️",
  "03d": "☁️",
  "04d": "☁️",
  "09d": "\uD83C\uDF27",
  "10d": "\uD83C\uDF26",
  "11d": "⛈",
  "13d": "❄️",
  "50d": "\uD83C\uDF2B",
  "01n": "\uD83C\uDF11",
  "02n": "\uD83C\uDF11 ☁",
  "03n": "☁️",
  "04n": "️️☁☁",
  "09n": "\uD83C\uDF27",
  "10n": "☔️",
  "11n": "⛈",
  "13n": "❄️",
  "50n": "\uD83C\uDF2B"
};

export const getIcon = (iconId: string) => {
  const icon = Icons?.[`${iconId}`];
  return icon;
};
