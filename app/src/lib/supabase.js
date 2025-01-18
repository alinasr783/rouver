import { createClient } from '@supabase/supabase-js';

// استبدل القيم التالية بـ Supabase URL و Public Key الخاصين بمشروعك
const supabaseUrl = 'https://rfbawyxdziqwqudypvih.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmYmF3eXhkemlxd3F1ZHlwdmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NTYzMjMsImV4cCI6MjA1MjQzMjMyM30.GahKxO6sdjf1y8Q0H8Fard5EZE-J_ORK33qs7VpJ6cs';

export const supabase = createClient(supabaseUrl, supabaseKey);