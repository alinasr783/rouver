import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gkczhuaboygpfwgtozep.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrY3podWFib3lncGZ3Z3RvemVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNDA4NjksImV4cCI6MjA1OTYxNjg2OX0.6u06SSQ03dQ8ZLXjD2Q6WfvXv42onsEjLixS1oIMFr4';

export const supabase = createClient(supabaseUrl, supabaseKey);