import { useState } from 'react'
import PropTypes from 'prop-types'

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="relative group px-4 py-2"
  >
    <span className="relative z-10 text-gray-300 font-bold group-hover:text-white transition-colors">
      {children}
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </a>
)

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative z-50">
      {/* Main Navigation */}
      <nav className="bg-[#0A0A0A] border-b border-red-500/10 relative">
        <div className="absolute inset-0 bg-[url('/images/mlb-pattern.svg')] opacity-[0.02]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full blur-md opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <img src="/images/mlb-logo.svg" alt="MLB Logo" className="relative h-12 w-12" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">MLB</span>
                <span className="text-sm font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">TRADING CARDS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <NavLink href="#">MARKETPLACE</NavLink>
              <NavLink href="#">COLLECTION</NavLink>
              <NavLink href="#">PACK DROPS</NavLink>
              <NavLink href="#">TOURNAMENTS</NavLink>
              <NavLink href="#">REWARDS</NavLink>
              
              <div className="ml-4 pl-4 border-l border-red-500/10 flex items-center space-x-4">
                <button className="px-4 py-2 text-gray-300 font-bold hover:text-white transition-colors">
                  SIGN IN
                </button>
                <button className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative px-6 py-2.5 bg-red-600 rounded-lg">
                    <span className="text-sm font-bold text-white group-hover:text-white/90 transition-colors">
                      OPEN PACKS
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute inset-x-0 top-full bg-[#0A0A0A] border-b border-red-500/10 transition-all duration-200 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-red-500/5 rounded-lg transition-colors">
              MARKETPLACE
            </a>
            <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-red-500/5 rounded-lg transition-colors">
              COLLECTION
            </a>
            <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-red-500/5 rounded-lg transition-colors">
              PACK DROPS
            </a>
            <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-red-500/5 rounded-lg transition-colors">
              TOURNAMENTS
            </a>
            <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-red-500/5 rounded-lg transition-colors">
              REWARDS
            </a>
            <div className="pt-2 mt-2 border-t border-red-500/10 flex flex-col space-y-2">
              <button className="w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-red-500/5 rounded-lg transition-colors text-left">
                SIGN IN
              </button>
              <button className="w-full px-4 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors">
                OPEN PACKS
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation 