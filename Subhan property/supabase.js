import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://exuuguvgqxpfmgtnrzke.supabase.co';

const SUPABASE_ANON_KEY = 'sb_publishable_ttCvwfiaIznEaQ-FJ99euA_M64fhGxj';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);