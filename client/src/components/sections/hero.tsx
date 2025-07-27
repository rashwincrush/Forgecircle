import { motion } from "framer-motion";
import { Star, Rocket, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-navy-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gold-100 text-gold-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 10,000+ Alumni Networks
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
              Your Professional Network,{" "}
              <span className="text-gold-500">Reimagined</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive, all-in-one platform designed exclusively for your organization's alumni to foster professional networking, career growth, and lifelong community engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-navy-900 text-white hover:bg-navy-800 shadow-lg"
                onClick={scrollToContact}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-navy-900 text-navy-900 hover:bg-navy-50"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>Free 30-day trial • No setup fees • Cancel anytime</span>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <h3 className="text-lg font-semibold text-navy-900">Alumni Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-navy-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-navy-900">2.5K</div>
                    <div className="text-sm text-gray-600">Connections</div>
                  </div>
                  <div className="bg-gold-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-gold-600">156</div>
                    <div className="text-sm text-gray-600">Job Posts</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">89</div>
                    <div className="text-sm text-gray-600">Mentors</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { icon: "👤", text: "Sarah joined your network", time: "2 minutes ago" },
                    { icon: "💼", text: "New job: Senior Developer", time: "1 hour ago" },
                    { icon: "📅", text: "Alumni meetup this Friday", time: "3 hours ago" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="text-lg">{item.icon}</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">{item.text}</div>
                        <div className="text-xs text-gray-500">{item.time}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
