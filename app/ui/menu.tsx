import Link from 'next/link';

export default function Menu() {
  return (
    <div className='flex flex-col items-center justify-between'>
      <ul className='list-none mt-5 content-center'>
        <li className='inline m-2'>
          <Link
            href='/'
            className='items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base inline'
          >
            Home
          </Link>
        </li>

        <li className='inline m-2'>
          <Link
            href='/layout-test'
            className='items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base inline'
          >
            Layouts
          </Link>
        </li>

        <li className='inline m-2'>
          <Link
            href='/use-form-state-example'
            className='items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base inline'
          >
            useFormState
          </Link>
        </li>

        <li className='inline m-2'>
          <Link
            href='/use-action-state'
            className='items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base inline'
          >
            useActionState (not ready)
          </Link>
        </li>

        <li className='inline m-2'>
          <Link
            href='/prisma-server-action'
            className='items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base inline'
          >
            Prisma Server Action
          </Link>
        </li>
      </ul>
    </div>
  );
}
