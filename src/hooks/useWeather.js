import { useState, useEffect } from 'react'
import axios from 'axios'

export function useWeather() {
  const [data, setData] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=65.65&longitude=-20.15&current=temperature_2m,windspeed_10m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max&wind_speed_unit=ms&timezone=Atlantic/Reykjavik&forecast_days=6'
        )
        setData(response.data.current)
        // Build array of 6 daily forecast objects
        const d = response.data.daily
        const days = d.time.map((date, i) => ({
          date,
          weathercode: d.weathercode[i],
          max: Math.round(d.temperature_2m_max[i]),
          min: Math.round(d.temperature_2m_min[i]),
          wind: Math.round(d.windspeed_10m_max[i]),
        }))
        setForecast(days)
      } catch (err) {
        console.error('Weather fetch error:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [])

  return { data, forecast, loading, error }
}
