/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    MONGO_URI: "mongodb+srv://herosdataset:NCb8bfI9JI0S1JSk@cluster0.sfagilg.mongodb.net/?retryWrites=true&w=majority"
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
