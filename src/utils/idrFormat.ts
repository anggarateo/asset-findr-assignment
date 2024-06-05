export default function idr (value?: number) {
  let result
  
  value
  ? result = new Intl.NumberFormat('in-ID').format(value)
  : result = 0

  return 'Rp ' + result
}
