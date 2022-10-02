import React from 'react';

export async function useSleep(delay) {
    return new Promise((resolve, _rej) => setTimeout(resolve, delay));
}