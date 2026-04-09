import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip,
} from 'recharts'
import { annualData } from '../../hooks/useFishingStats'
import { FadeUp } from '../ui/FadeUp'
import { useWeather } from '../../hooks/useWeather'
import { Cloud, Sun, CloudRain, Wind, Snowflake, CloudLightning } from '@phosphor-icons/react'

const EMBER = '#B85C38'
const BONE  = '#D9D3C7'
const TAUPE = '#8C867E'

const getWeatherIcon = (code) => {
  if (code <= 1) return <Sun size={28} weight="light" />
  if (code <= 3) return <Cloud size={28} weight="light" />
  if (code >= 51 && code <= 67) return <CloudRain size={28} weight="light" />
  if (code >= 71 && code <= 77) return <Snowflake size={28} weight="light" />
  if (code >= 95) return <CloudLightning size={28} weight="light" />
  return <Cloud size={28} weight="light" />
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const getForecastIcon = (code) => {
  if (code <= 1) return <Sun size={22} weight="light" />
  if (code <= 3) return <Cloud size={22} weight="light" />
  if (code >= 51 && code <= 67) return <CloudRain size={22} weight="light" />
  if (code >= 71 && code <= 77) return <Snowflake size={22} weight="light" />
  if (code >= 95) return <CloudLightning size={22} weight="light" />
  return <Cloud size={22} weight="light" />
}

function HeaderWeather() {
  const { data, forecast } = useWeather()
  if (!data) return null
  return (
    <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-12 w-full">
      {/* LEFT: 6-Day Forecast */}
      {forecast && (
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <div className="text-taupe tracking-[0.2em] text-xs uppercase font-body">6-Day Forecast — Blönduós</div>
          <div className="flex gap-3">
            {forecast.map((day) => {
              const d = new Date(day.date)
              return (
                <div key={day.date} className="flex flex-col items-center gap-2 w-12 flex-shrink-0">
                  <span className="text-taupe text-[11px] tracking-widest uppercase font-body">{DAY_NAMES[d.getDay()]}</span>
                  <span className="text-bone/80">{getForecastIcon(day.weathercode)}</span>
                  <div className="flex flex-col items-center leading-none gap-0.5">
                    <span className="font-display text-bone text-xl">{day.max}°</span>
                    <span className="font-body text-taupe text-xs">{day.min}°</span>
                  </div>
                  <span className="flex items-center gap-0.5 text-taupe/80 text-xs font-body">
                    <Wind size={11} weight="light" />{day.wind}<span className="text-[8px] opacity-70 ml-px">m/s</span>
                  </span>
                </div>
              )
            })}
          </div>
          <div className="text-taupe/50 text-[10px] font-body">Wind shows daily maximum m/s</div>
        </div>
      )}

      {/* Divider */}
      <div className="hidden md:block w-px self-stretch bg-stone-warm/20 flex-shrink-0"></div>

      {/* RIGHT: River Conditions */}
      <div className="flex flex-col gap-2 flex-shrink-0 md:items-end">
        <div className="text-taupe tracking-[0.2em] text-xs uppercase font-body">River Conditions — Now</div>
        <div className="flex items-center gap-3 text-bone">
          {getWeatherIcon(data.weathercode)}
          <span className="font-display text-3xl md:text-4xl">{Math.round(data.temperature_2m)}°C</span>
          <div className="w-px h-8 bg-stone-warm/30"></div>
          <div className="flex items-center gap-1.5 text-taupe">
            <Wind size={16} weight="light" />
            <span className="font-display text-2xl md:text-3xl">{data.windspeed_10m}<span className="font-body text-xs ml-1">m/s</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

const MinHeightBar = (props) => {
  const { x, y, width, height, fill } = props
  if (!height || height === 0) return null
  const displayHeight = Math.max(height, 4)
  const displayY = y - (displayHeight - height)
  return <rect x={x} y={displayY} width={width} height={displayHeight} fill={fill} rx={2} />
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-stone-deep border border-stone-warm text-bone text-xs px-3 py-2">
      <div className="font-semibold mb-1">{label}</div>
      {payload.map(p => p.value > 0 && (
        <div key={p.dataKey} style={{ color: p.dataKey === 'salmon' ? EMBER : '#c8c2b6' }}>
          {p.name}: {p.value.toLocaleString()}
        </div>
      ))}
    </div>
  )
}

export default function LiveStats() {
  return (
    <section className="bg-parchment-light" id="stats">

      {/* Header */}
      <div className="bg-stone-deep text-parchment py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <HeaderWeather />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* LEFT: Bar Chart */}
        <div className="flex-1 w-full min-w-0">
          <FadeUp>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <div className="text-taupe font-display tracking-[0.2em] text-sm mb-3 uppercase opacity-80">03 / Historical Catch</div>
                <h3 className="font-display text-3xl md:text-4xl text-stone-deep">
                  Historical Catch: 1975–2025
                </h3>
              </div>
              <div className="flex items-center gap-5 text-xs tracking-widest text-taupe uppercase font-semibold pb-1">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 inline-block" style={{ backgroundColor: EMBER }}></span> Salmon
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 inline-block" style={{ backgroundColor: BONE }}></span> Trout
                </span>
              </div>
            </div>

            <div style={{ height: '320px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={annualData}
                  margin={{ top: 8, right: 0, left: -20, bottom: 0 }}
                  barCategoryGap="20%"
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke={BONE} />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 10, fill: TAUPE }}
                    tickLine={false}
                    axisLine={false}
                    interval={3}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: TAUPE }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={v => v.toLocaleString()}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(26,25,23,0.06)' }} />
                  <Bar dataKey="salmon"   name="Salmon" stackId="a" fill={EMBER} />
                  <Bar dataKey="silungur" name="Trout"  stackId="a" fill={BONE} shape={<MinHeightBar />} />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </FadeUp>
        </div>

        {/* RIGHT: Context text */}
        <div className="lg:w-[360px] w-full flex-shrink-0">
          <FadeUp delay={0.2}>
            <div className="editorial-hr mb-8"></div>
            <p className="text-stone-warm/80 leading-relaxed text-sm md:text-base mb-6">
              The average catch over the past 40 years is around 1,000 salmon per year. The lowest catch was in 2012, when only 211 fish were caught, while the highest was in 1986, with 1,857 salmon.
            </p>
            <p className="text-stone-warm/80 leading-relaxed text-sm md:text-base mb-6">
              In 2017 the number of rods on the river was increased from 2 to 4 rods following the decommissioning of the hydro power plant that fed into the river mid way from the lake.
            </p>
            <p className="text-stone-warm/80 leading-relaxed text-sm md:text-base mb-10">
              Looking at catch statistics per rod, Laxá á Ásum has consistently ranked among the highest in the country in terms of average catch per rod.
            </p>
            <a
              href="https://veiditolur.angling.is/veidisvaedi/laxa-a-asum"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-bone text-stone-deep px-8 py-4 text-xs tracking-widest font-semibold hover:bg-stone-deep hover:text-bone transition-colors uppercase"
            >
              View Full Statistics ↗
            </a>
          </FadeUp>
        </div>

      </div>
    </section>
  )
}
