import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const FeatureCard = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className="relative group"
  >
    {/* Glow Effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
    
    {/* Card Content */}
    <div className="relative h-full bg-[#0A0A0A] p-8 rounded-xl border border-white/10">
      {/* Icon Container */}
      <div className="mb-6 relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
        <div className="relative w-16 h-16 flex items-center justify-center text-4xl bg-[#0A0A0A] rounded-full border border-white/10">
          {icon}
        </div>
      </div>
      
      {/* Text Content */}
      <h3 className="text-2xl font-black mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 group-hover:from-red-400 group-hover:to-blue-400 transition-all">
          {title}
        </span>
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  </motion.div>
)

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

const FeatureSection = () => {
  const features = [
    {
      title: "Epic Card Battles",
      description: "Challenge players worldwide in real-time matches. Use unique card abilities and master strategic gameplay to become the ultimate champion.",
      icon: "⚡"
    },
    {
      title: "Rare Collections",
      description: "Discover and collect digital cards featuring current MLB stars, legends, and special edition releases. Each card is uniquely authenticated on the blockchain.",
      icon: "💎"
    },
    {
      title: "Live Trading",
      description: "Buy, sell, and trade cards in our dynamic marketplace. Each card has unique stats, rarity levels, and market value that evolves with real MLB performance.",
      icon: "🔄"
    }
  ]

  return (
    <div className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* MLB Pattern Background */}
      <div className="absolute inset-0 bg-[url('/images/mlb-pattern.svg')] opacity-[0.02]"></div>
      
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">Collect. Battle.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-red-500">
              Trade to Glory
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Step into the future of baseball card collecting with cutting-edge features that bring your collection to life.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="group relative px-8 py-4 bg-red-600 text-white font-bold rounded-lg overflow-hidden">
            <div className="absolute inset-0 w-3/12 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-45deg] group-hover:animate-[shimmer_1s_infinite] opacity-30"></div>
            <span className="relative">Start Your Collection</span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default FeatureSection 