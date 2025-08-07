const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',              
  basePath: isProd ? '/my-portfolio' : '',
  assetPrefix: isProd ? '/my-portfolio/' : '',
  trailingSlash: true,
}
