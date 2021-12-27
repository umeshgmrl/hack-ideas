import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vzxgxziemteqqrvugqxe.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQwNTM4NTYzLCJleHAiOjE5NTYxMTQ1NjN9.9Q4RaT6aySe4fms9PwXShlnfeoS7QZMoXz9LXtojTI0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)