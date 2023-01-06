import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kipsnrvsirwqnvjftyjs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpcHNucnZzaXJ3cW52amZ0eWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI1MjA4NDUsImV4cCI6MTk4ODA5Njg0NX0.ns0GqMIg4wUfDM9NTGHy0N1SWX4gZRiQROWRQi88jxM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
