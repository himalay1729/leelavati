const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-center md:text-left">
            <p className="font-medium text-white mb-1">Logic Labs</p>
            <p>Bengaluru, Karnataka, India</p>
          </div>
          
          <div className="text-sm text-center">
            <p className="mb-1">Contact us:</p>
            <div className="space-y-1">
              <a 
                href="mailto:himalay.senapati@gmail.com" 
                className="block hover:text-primary-400 transition-colors"
              >
                himalay.senapati@gmail.com
              </a>
              <a 
                href="mailto:arjunarul1@gmail.com" 
                className="block hover:text-primary-400 transition-colors"
              >
                arjunarul1@gmail.com
              </a>
            </div>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p className="text-gray-400">Design: Swathi and Shruthi</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Logic Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer