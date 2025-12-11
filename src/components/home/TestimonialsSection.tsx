import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    location: "New York, USA",
    rating: 5,
    text: "The Velocity Pro X completely transformed my running experience. The cushioning is incredible, and I've shaved minutes off my marathon time. Best investment I've made for my training.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Cycling Enthusiast",
    location: "Vancouver, Canada",
    rating: 5,
    text: "Finally found cycling shoes that deliver on both performance and comfort. The power transfer is exceptional, and they look fantastic. Pairobin understands what athletes need.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Mom of 3",
    location: "Miami, USA",
    rating: 5,
    text: "My kids absolutely love their Pairobin shoes! They're durable enough to handle everything my active kids throw at them, and the colors are so fun. Already ordering their next pairs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Customer Stories
          </p>
          <h2 className="section-title mb-4">
            Loved by Athletes Worldwide
          </h2>
          <p className="section-subtitle mx-auto">
            Join thousands of satisfied customers who trust Pairobin for their 
            athletic footwear needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-secondary rounded-3xl p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/20" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
