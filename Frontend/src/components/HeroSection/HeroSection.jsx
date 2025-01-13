import { motion } from "framer-motion"
import PropTypes from 'prop-types'

const StatBadge = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl font-black text-white">{value}</span>
    <span className="text-sm text-gray-400">{label}</span>
  </div>
)

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const HeroCard = ({ player, image, position, team, rarity, stats }) => {
  const rarityColors = {
    LEGENDARY: {
      bg: "bg-gradient-to-br from-yellow-400/20 to-yellow-900/20",
      border: "from-yellow-400 to-yellow-600",
      text: "text-yellow-400"
    },
    ELITE: {
      bg: "bg-gradient-to-br from-purple-400/20 to-purple-900/20",
      border: "from-purple-400 to-purple-600",
      text: "text-purple-400"
    },
    RARE: {
      bg: "bg-gradient-to-br from-blue-400/20 to-blue-900/20",
      border: "from-blue-400 to-blue-600",
      text: "text-blue-400"
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      {/* Card Border Glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${rarityColors[rarity].border} rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-200`}></div>
      
      {/* Card Content */}
      <div className={`relative flex flex-col ${rarityColors[rarity].bg} rounded-xl overflow-hidden border border-white/10`}>
        {/* Card Header */}
        <div className="px-6 py-4 flex justify-between items-center border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-white/10"></div>
            <span className="font-bold text-white">{team}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${rarityColors[rarity].text} bg-white/5`}>
            {rarity}
          </span>
        </div>
        
        {/* Player Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={image} 
            alt={player} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/30"></div>
          
          {/* Player Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-black text-white mb-1">{player}</h3>
            <p className={`text-sm ${rarityColors[rarity].text}`}>{position}</p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-black/20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-lg font-bold ${rarityColors[rarity].text}`}>{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

HeroCard.propTypes = {
  player: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
}

const HeroSection = () => {
  const featuredCards = [
    {
      player: "Shohei Ohtani",
      image: "/cards/ohtani.svg",
      position: "Pitcher/DH",
      team: "Los Angeles Dodgers",
      rarity: "LEGENDARY",
      stats: [
        { label: "ERA", value: "3.14" },
        { label: "SO", value: "167" },
        { label: "AVG", value: ".304" }
      ]
    },
    {
      player: "Ronald Acuña Jr.",
      image: "/cards/acuna.svg",
      position: "Right Fielder",
      team: "Atlanta Braves",
      rarity: "ELITE",
      stats: [
        { label: "HR", value: "41" },
        { label: "SB", value: "73" },
        { label: "OPS", value: ".995" }
      ]
    },
    {
      player: "Juan Soto",
      image: "/cards/soto.svg",
      position: "Right Fielder",
      team: "New York Yankees",
      rarity: "RARE",
      stats: [
        { label: "HR", value: "35" },
        { label: "RBI", value: "109" },
        { label: "OBP", value: ".410" }
      ]
    }
  ]

  return (
    <div className="bg-[#0A0A0A] relative min-h-screen">
      {/* MLB Pattern Background */}
      <div className="absolute inset-0 bg-[url('/images/mlb-pattern.svg')] opacity-5"></div>
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-24">
        {/* Header Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">COLLECT THE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-red-500">
                GREATEST PLAYERS
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Step into the future of baseball card collecting. Own, trade, and play with 
              officially licensed MLB digital cards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group relative px-8 py-4 bg-red-600 text-white font-bold rounded-lg overflow-hidden">
              <div className="absolute inset-0 w-3/12 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-45deg] group-hover:animate-[shimmer_1s_infinite] opacity-30"></div>
              <span className="relative">OPEN PACKS NOW</span>
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-lg border-2 border-white/10 hover:bg-white/10 transition-colors">
              VIEW COLLECTION
            </button>
          </motion.div>
        </div>

        {/* Featured Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {featuredCards.map((card, index) => (
            <HeroCard key={index} {...card} />
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-blue-500/10 to-red-500/10 rounded-2xl"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto p-8 rounded-2xl"
          >
            <StatBadge value="2.5M+" label="Cards Collected" />
            <StatBadge value="500K+" label="Active Players" />
            <StatBadge value="50K+" label="Daily Trades" />
            <StatBadge value="$1M+" label="Prize Pool" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 