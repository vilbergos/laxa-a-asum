import { useWeather } from '../../hooks/useWeather'
import { Cloud, Sun, CloudRain, Wind, Snowflake, CloudLightning } from '@phosphor-icons/react'

export default function WeatherWidget() {
  const { data, loading, error } = useWeather()

  if (loading || error || !data) return null;

  // Simple weather code mapping
  const getWeatherIcon = (code) => {
    if (code <= 1) return <Sun size={24} weight="light" />;
    if (code <= 3) return <Cloud size={24} weight="light" />;
    if (code >= 51 && code <= 67) return <CloudRain size={24} weight="light" />;
    if (code >= 71 && code <= 77) return <Snowflake size={24} weight="light" />;
    if (code >= 95) return <CloudLightning size={24} weight="light" />;
    return <Cloud size={24} weight="light" />;
  }

  return (
    <div className="flex flex-row items-center gap-6 text-bone">
      <div className="flex items-center gap-3">
        {getWeatherIcon(data.weathercode)}
        <span className="font-display text-2xl">{Math.round(data.temperature_2m)}°C</span>
      </div>
      <div className="w-px h-8 bg-stone-warm/40"></div>
      <div className="flex items-center gap-2 text-taupe">
        <Wind size={18} weight="light" />
        <span className="font-display text-2xl">{data.windspeed_10m}<span className="font-body text-xs ml-1">m/s</span></span>
      </div>
    </div>
  )
}
