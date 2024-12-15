export const APP_CONFIG = {
  name: 'Charlie',
  api: {
    url: import.meta.env.VITE_API_URL,
    supabase: {
      url: import.meta.env.VITE_SUPABASE_URL,
      key: import.meta.env.VITE_SUPABASE_KEY
    }
  },
  contact: {
    email: 'contact@example.com',
    phone: '+1 (555) 123-4567'
  }
};