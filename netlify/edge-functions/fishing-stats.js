export default async (request, context) => {
  const url = new URL(request.url)
  const year = url.searchParams.get('year') || '2024'
  try {
    const response = await fetch(
      `https://veiditolur.angling.is/veidisvaedi/laxa-a-asum?year=${year}`,
      {
        headers: {
          'Accept': 'text/html,application/xhtml+xml',
          'User-Agent': 'Mozilla/5.0 (compatible; LaxaAsum/1.0)',
          'Referer': 'https://veiditolur.angling.is/',
        }
      }
    )
    const html = await response.text()
    const rows = []
    const rowRegex = /<tr>[\s\S]*?<\/tr>/g
    const cellRegex = /<span[^>]*>([^<]+)<\/span>/g
    const tableRows = html.match(rowRegex) || []
    for (const row of tableRows) {
      const cells = [...row.matchAll(cellRegex)].map(m => m[1].trim())
      if (cells.length === 3 && !cells[0].includes('Dagsetning')) {
        rows.push({
          date: cells[0],
          weekly: parseInt(cells[1]) || 0,
          total: parseInt(cells[2]) || 0,
        })
      }
    }
    return new Response(JSON.stringify({ rows, year, source: 'live' }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, s-maxage=3600',
      }
    })
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message, source: 'error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

export const config = { path: '/api/fishing-stats' }
