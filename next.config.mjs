/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, _) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    })

    return config
  },
}

export default nextConfig
