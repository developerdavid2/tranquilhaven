import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://smxttrltlgppbzjsnyhf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNteHR0cmx0bGdwcGJ6anNueWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MzgyNjEsImV4cCI6MjAzODAxNDI2MX0.HPgyBw7J4uovD6GlyxhuhDui2THWgMdEsvg4r8PTy8U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
