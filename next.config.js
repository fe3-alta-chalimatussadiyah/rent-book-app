module.exports = {
  images: {
    domains: ['penerbitharu.com'],
  },

  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/auth/login'
      },
      {
        source: '/register',
        destination: '/auth/register'
      },
    ]
  }
}
