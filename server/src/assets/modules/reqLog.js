export function logTraffic(req, res, next) {
  console.log(`Request made`)
  console.log(`  URL : ${req.originalUrl}`)
  console.log(`  Type: ${req.method}`)
  let bodyJson = JSON.stringify(req.body)
  console.log(`  Body: ${bodyJson}`)
}
