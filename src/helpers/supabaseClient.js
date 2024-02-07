
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const URL = 'https://xntmpcssddkhjsbpkrni.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhudG1wY3NzZGRraGpzYnBrcm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMTAwMDksImV4cCI6MjAyMjg4NjAwOX0.kIyju4SL-NwFEckUZLMqHtbWWSAXqgE8MAKoiQFJK-g'
export const supabase = createClient(URL, import.meta.env.VITE_KEY)