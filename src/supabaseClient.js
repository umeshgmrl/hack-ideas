import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vzxgxziemteqqrvugqxe.supabase.co";//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDUzODU2MywiZXhwIjoxOTU2MTE0NTYzfQ.JHNtThOx2zAS5vSBUQ378aZKvLyt0EpNSaJQXIYY4lc"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQwNTM4NTYzLCJleHAiOjE5NTYxMTQ1NjN9.9Q4RaT6aySe4fms9PwXShlnfeoS7QZMoXz9LXtojTI0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

//jwt secret 85d64cda-6660-4bca-9246-7f85750306ca
//url 