import Sidebar from './sidebar';
export default function Layout({ children }: { children: React.Node }) {
  return (
    <div className='flex flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full min-h-screen flex-none md:w-64'>
        <Sidebar />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  );
}
