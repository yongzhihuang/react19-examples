'use client';
import { useFormState } from 'react-dom';

import { onFormPostAction } from './formPostAction';
import { useState } from 'react';

export default function Page() {
  const [state, action, isPending] = useFormState(onFormPostAction, {
    message: '',
  });
  const [first, setFirst] = useState('');

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form action={action}>
        <input
          type='text'
          name='first'
          value={first}
          placeholder='Enter your first name'
          onChange={(e) => setFirst(e.target.value)}
          className='border mr-2 p-2'
        />
        <input type='hidden' name='secret' value='password123' />
        <button className='border bg-green-400 p-2 rounded' type='submit'>
          {isPending ? 'sending' : 'Submit'}
        </button>
        <div className='text-sm pt-2 text-black'>{state.message}</div>
      </form>
    </main>
  );
}
