export const formatCurrency = price => `$${price?.slice(0, 8)}`

export const formatPorcentage = p => `${Number(p).toFixed(2)}%`

export const didIncreasePrice = percentage => Number(percentage) > 0
