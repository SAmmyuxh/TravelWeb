import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "The trip to Bali was absolutely magical! Every detail was perfectly planned and the experience exceeded all my expectations. I can't wait to book my next adventure!",
      avatar: "sarah.avif"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      text: "Outstanding service from start to finish. The team went above and beyond to make our European tour unforgettable. Highly recommend to anyone looking for a premium travel experience.",
      avatar: "michael.jpeg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "I've traveled with many agencies, but this one stands out. The attention to detail, local experiences, and personalized service made our honeymoon in the Maldives truly special.",
      avatar: "emily.jpeg"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing travelers have to say about their experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>    
      </div>
    </section>
  );
};

export default TestimonialSection;