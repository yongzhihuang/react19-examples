import { useActionState } from 'react';
import { action } from './formPostAction';

export default function Homepage() {
  // const [state, formAction, isPending] = useActionState(action, {
  //   name: '',
  //   error: '',
  //   status: false,
  // });

  // console.log(state);

  return (
    <main>
      {/* <form action={formAction}>
        <input type='text' name='name' />
        <button type='submit' disabled={isPending}>
          {isPending ? 'Loading...' : 'Submit'}
        </button>
      </form> */}
      Not available in Canary
    </main>
  );
}
