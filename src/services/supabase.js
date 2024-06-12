import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qbzsoejxueuvntarccmw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFienNvZWp4dWV1dm50YXJjY213Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDIzMTcsImV4cCI6MjAzMjQ3ODMxN30.1Nk1NFPJTUSYIQ1SbCg13UMiY_78VjqHOWoGq0sd3kM";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
