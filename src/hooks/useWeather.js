import { useState, useEffect } from 'react'
import axios from 'axios'

export function useWeather() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=65.65&longitude=-20.15&current=temperature_2m,windspeed_10m,weathercode&wind_speed_unit=ms&timezone=Atlantic/Reykjavik'
        )
        setData(response.data.current)
      } catch (err) {
        console.error('Weather fetch error:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [])

  return { data, loading, error }
}
