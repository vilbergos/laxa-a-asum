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
    <div className="border border-bone p-4 md:p-6 bg-parchment-light inline-block w-full max-w-sm ml-auto mt-12 md:mt-0 shadow-sm">
      <div className="text-[10px] uppercase tracking-widest text-taupe mb-4 font-semibold">River Conditions</div>
      <div className="flex flex-row items-center gap-6 text-stone-deep justify-between">
        <div className="flex items-center gap-3">
          {getWeatherIcon(data.weathercode)}
          <span className="font-display text-3xl pl-1">{Math.round(data.temperature_2m)}°C</span>
        </div>
        <div className="w-px h-8 bg-bone"></div>
        <div className="flex items-center gap-2">
          <Wind size={20} weight="light" className="text-taupe" />
          <span className="text-sm font-medium">{data.windspeed_10m} m/s</span>
        </div>
      </div>
    </div>
  )
}
