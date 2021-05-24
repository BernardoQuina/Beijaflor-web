declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_API_URL_WS: string
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string
      NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: string
      NEXT_PUBLIC_CLOUDINARY_KEY: string
      CLOUDINARY_SECRET: string
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string
    }
  }
}

export {}