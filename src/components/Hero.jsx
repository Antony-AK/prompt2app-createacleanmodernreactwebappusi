export default function Hero() {
  return (
    <div className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl text-center'>
        <h1 className='text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500'>
          Build Amazing Products
        </h1>
        <p className='text-xl text-gray-300 mb-8'>
          A modern web application template designed with cutting-edge technologies and beautiful design principles.
        </p>
        <button className='bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl'>
          Get Started
        </button>
      </div>
    </div>
  )
}