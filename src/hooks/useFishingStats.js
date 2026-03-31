import { useState, useEffect } from 'react'

export const annualData = [
  { year: 1975, salmon: 1439, silungur: 0 },
  { year: 1976, salmon: 1881, silungur: 0 },
  { year: 1977, salmon: 1439, silungur: 0 },
  { year: 1978, salmon: 1854, silungur: 0 },
  { year: 1979, salmon: 1650, silungur: 0 },
  { year: 1980, salmon: 956,  silungur: 0 },
  { year: 1981, salmon: 1413, silungur: 0 },
  { year: 1982, salmon: 1036, silungur: 0 },
  { year: 1983, salmon: 1050, silungur: 0 },
  { year: 1984, salmon: 625,  silungur: 0 },
  { year: 1985, salmon: 1440, silungur: 0 },
  { year: 1986, salmon: 1857, silungur: 0 },
  { year: 1987, salmon: 1157, silungur: 0 },
  { year: 1988, salmon: 1617, silungur: 0 },
  { year: 1989, salmon: 749,  silungur: 0 },
  { year: 1990, salmon: 651,  silungur: 0 },
  { year: 1991, salmon: 833,  silungur: 0 },
  { year: 1992, salmon: 1458, silungur: 0 },
  { year: 1993, salmon: 1458, silungur: 0 },
  { year: 1994, salmon: 805,  silungur: 0 },
  { year: 1995, salmon: 1549, silungur: 0 },
  { year: 1996, salmon: 627,  silungur: 0 },
  { year: 1997, salmon: 715,  silungur: 0 },
  { year: 1998, salmon: 1136, silungur: 0 },
  { year: 1999, salmon: 430,  silungur: 0 },
  { year: 2000, salmon: 770,  silungur: 0 },
  { year: 2001, salmon: 562,  silungur: 0 },
  { year: 2002, salmon: 559,  silungur: 0 },
  { year: 2003, salmon: 308,  silungur: 0 },
  { year: 2004, salmon: 462,  silungur: 0 },
  { year: 2005, salmon: 679,  silungur: 0 },
  { year: 2006, salmon: 361,  silungur: 0 },
  { year: 2007, salmon: 537,  silungur: 0 },
  { year: 2008, salmon: 503,  silungur: 26 },
  { year: 2009, salmon: 1142, silungur: 0 },
  { year: 2010, salmon: 763,  silungur: 0 },
  { year: 2011, salmon: 439,  silungur: 0 },
  { year: 2012, salmon: 211,  silungur: 0 },
  { year: 2013, salmon: 1062, silungur: 0 },
  { year: 2014, salmon: 1006, silungur: 0 },
  { year: 2015, salmon: 1795, silungur: 0 },
  { year: 2016, salmon: 620,  silungur: 0 },
  { year: 2017, salmon: 1108, silungur: 0 },
  { year: 2018, salmon: 702,  silungur: 0 },
  { year: 2019, salmon: 807,  silungur: 0 },
  { year: 2020, salmon: 671,  silungur: 0 },
  { year: 2021, salmon: 600,  silungur: 0 },
  { year: 2022, salmon: 820,  silungur: 0 },
  { year: 2023, salmon: 660,  silungur: 0 },
  { year: 2024, salmon: 1008, silungur: 0 },
  { year: 2025, salmon: 471,  silungur: 0 },
]

// Cached fallback weekly data keyed by year
const weeklyFallback = {
  2025: [
    { date: '2. júlí',   weekly: 4,  total: 4   },
    { date: '9. júlí',   weekly: 16, total: 20  },
    { date: '16. júlí',  weekly: 24, total: 44  },
    { date: '23. júlí',  weekly: 58, total: 102 },
    { date: '30. júlí',  weekly: 73, total: 175 },
    { date: '6. ágúst',  weekly: 63, total: 238 },
    { date: '13. ágúst', weekly: 62, total: 300 },
    { date: '20. ágúst', weekly: 37, total: 337 },
    { date: '27. ágúst', weekly: 15, total: 352 },
    { date: '3. sept.',  weekly: 39, total: 391 },
    { date: '10. sept.', weekly: 55, total: 446 },
    { date: '17. sept.', weekly: 25, total: 471 },
  ],
}

export function useFishingStats(year) {
  const [weekly, setWeekly]   = useState([])
  const [loading, setLoading] = useState(true)
  const [isLive, setIsLive]   = useState(false)

  useEffect(() => {
    if (!year) { setLoading(false); return }
    setLoading(true)
    setIsLive(false)

    fetch(`/api/fishing-stats?year=${year}`)
      .then(r => r.json())
      .then(data => {
        if (data.rows && data.rows.length > 0) {
          setWeekly(data.rows)
          setIsLive(true)
        } else {
          setWeekly(weeklyFallback[year] || [])
          setIsLive(false)
        }
      })
      .catch(() => {
        setWeekly(weeklyFallback[year] || [])
        setIsLive(false)
      })
      .finally(() => setLoading(false))
  }, [year])

  return { annual: annualData, weekly, loading, isLive }
}
