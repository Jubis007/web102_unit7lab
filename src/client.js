import { createClient } from '@supabase/supabase-js';

const URL = 'https://ajcqlizuwmayrvlinvtg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqY3FsaXp1d21heXJ2bGludnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4MjA2NDYsImV4cCI6MjA5MjM5NjY0Nn0.m8TDcpq-EK1jqPAzZ9Xb4LGRx_GCtBr_8f7nBN43WB0'; // Replace with your API Key

export const supabase = createClient(URL, API_KEY);