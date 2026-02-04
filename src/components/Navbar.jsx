export default function Navbar() {
  return (
    <nav className='fixed w-full backdrop-blur-md bg-white/5 z-50 border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='text-xl font-bold text-white'>ModernApp</div>
          <div className='flex space-x-4'>
            <a href='#' className='text-white hover:text-emerald-400 transition-colors'>Home</a>
            <a href='#' className='text-white hover:text-emerald-400 transition-colors'>Features</a>
            <a href='#' className='text-white hover:text-emerald-400 transition-colors'>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}