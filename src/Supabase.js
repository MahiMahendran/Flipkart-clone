import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://pduhgdczuqpaxpxkucta.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdWhnZGN6dXFwYXhweGt1Y3RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU2OTQ0NzAsImV4cCI6MjAwMTI3MDQ3MH0.quyrJAe4DvEWQGBQxCminEuG1wkzeYXOKTD4htaExTA"
);

export default supabase;
