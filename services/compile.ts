"use server"

import axios from 'axios';

interface File {
    content: string;
  }
  
  interface RequestData {
    language: string;
    version: string;
    files: File[];
  }
  

export async function compileCode(payload: RequestData) {
    try {
        const response = await axios.post('https://emkc.org/api/v2/piston/execute', payload);
        return response.data;
    } catch (error) {
        console.error('Error in executing code: ', error)
    }
}