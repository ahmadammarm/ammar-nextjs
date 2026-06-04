import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ahmad Ammar Musyaffa Portfolio',
    short_name: 'Ammar Portfolio',
    description: 'Portfolio of Ahmad Ammar Musyaffa, Fullstack Developer & AI Enthusiast',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#007AFF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/a.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
