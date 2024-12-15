import { createClient } from '@supabase/supabase-js';
import { EvaluationResult } from '../../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const saveEvaluation = async (result: EvaluationResult) => {
  const { data, error } = await supabase
    .from('evaluations')
    .insert([result]);

  if (error) throw error;
  return data;
};