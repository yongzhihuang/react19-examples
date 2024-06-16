'use server';

type FormState = {
  message: string;
};

export async function onFormPostAction(prevState: FormState, data: FormData) {
  // Process the data

  return {
    message: `Hi ${data.get(
      'first'
    )} from server side! shh the secret is ${data.get('secret')}`,
  };
}
