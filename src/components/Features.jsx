export default function Features() {
  const features = [
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that works on all devices and screen sizes.',
      icon: '📱'
    },
    {
      title: 'Modern Tech Stack',
      description: 'Built with React, Vite, and Tailwind CSS for maximum performance.',
      icon: '🚀'
    },
    {
      title: 'Easy Customization',
      description: 'Flexible and modular architecture for quick customization.',
      icon: '🛠️'
    }
  ]

  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:scale-105 transition-all duration-300'>
              <div className='text-5xl mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-bold mb-3 text-emerald-400'>{feature.title}</h3>
              <p className='text-gray-300'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}