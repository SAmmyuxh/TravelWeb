import { Clock, Wallet, Shield, BookOpen } from "lucide-react";

export default function OurAdvantages() {
  const advantages = [
    {
      icon: Clock,
      title: "Save Time",
      description: "No More Switching For Packages Or Plans."
    },
    {
      icon: Wallet,
      title: "Save Money",
      description: "Compare, Negotiate, And Choose The Best."
    },
    {
      icon: Shield,
      title: "Trusted Network",
      description: "A Trusted Network Of 7000+ Travel Agents"
    },
    {
      icon: BookOpen,
      title: "Multiple Options",
      description: "Itineraries & Travel Tips From Trusted Agents"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-teal-400 to-teal-500 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Advantages</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            You can rely on our experience and the quality of services we provide.
            <br />
            Here are other reasons to book tours at Treat Holidays
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              {/* Icon Circle */}
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <advantage.icon className="w-10 h-10 text-teal-500" strokeWidth={2} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {advantage.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}