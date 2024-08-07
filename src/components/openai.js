//import OpenAI from 'https://deno.land/x/openai@v4.53.0/mod.ts';
import OpenAI from 'openai';
import { OPEN_AI_KEY } from '../utils/constants';

const openai = new OpenAI({
     apiKey: OPEN_AI_KEY,
     dangerouslyAllowBrowser: true,
    //apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export default openai; 