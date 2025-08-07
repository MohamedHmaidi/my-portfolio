const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/my-portfolio' : '',
  assetPrefix: isProd ? '/my-portfolio/' : '',
  trailingSlash: true,
}
