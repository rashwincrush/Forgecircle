import { motion } from "framer-motion";
import { 
  UserCircle, 
  Search, 
  Briefcase, 
  Users, 
  Calendar, 
  MessageCircle,
  Check
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: UserCircle,
      title: "Professional Profiles",
      description: "Create detailed professional profiles with work experience, education history, skills, and achievements. Showcase your journey and connect with like-minded alumni.",
      benefits: [
        "Detailed work experience",
        "Skills and endorsements", 
        "Achievement highlights"
      ],
      color: "navy"
    },
    {
      icon: Search,
      title: "Searchable Directory",
      description: "Find and connect with alumni by name, graduation year, department, location, or industry. Advanced filtering makes networking effortless.",
      benefits: [
        "Advanced search filters",
        "Location-based networking",
        "Industry connections"
      ],
      color: "gold"
    },
    {
      icon: Briefcase,
      title: "Exclusive Job Board",
      description: "Access exclusive job opportunities posted by fellow alumni and partner companies. Post openings to hire from your trusted network.",
      benefits: [
        "Exclusive opportunities",
        "Direct alumni connections",
        "Personalized job alerts"
      ],
      color: "blue"
    },
    {
      icon: Users,
      title: "Structured Mentorship",
      description: "Connect experienced professionals with ambitious alumni through our formal mentorship framework with session management and goal tracking.",
      benefits: [
        "Mentor-mentee matching",
        "Session scheduling",
        "Progress tracking"
      ],
      color: "green"
    },
    {
      icon: Calendar,
      title: "Events Hub",
      description: "Stay connected with virtual and in-person events, workshops, and webinars. RSVP, view agendas, and connect with attendees.",
      benefits: [
        "Virtual & in-person events",
        "Easy RSVP system",
        "Attendee networking"
      ],
      color: "purple"
    },
    {
      icon: MessageCircle,
      title: "Groups & Messaging",
      description: "Create or join special interest groups by location, industry, or hobby. Engage in discussions and build meaningful connections.",
      benefits: [
        "Interest-based groups",
        "Secure messaging",
        "Real-time notifications"
      ],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      navy: "bg-navy-100 text-navy-600",
      gold: "bg-gold-100 text-gold-600", 
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Everything Your Alumni Network Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From professional networking to career mentorship, ForgeAlumni provides all the tools your community needs to thrive in one integrated platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(feature.color)}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">See ForgeAlumni in Action</h3>
              <p className="text-gray-600">Experience the power of integrated alumni networking</p>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-navy-500 rounded-full flex items-center justify-center">
                    <UserCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">John Smith</div>
                    <div className="text-sm text-gray-600">Software Engineer • Class of 2018</div>
                  </div>
                </div>
                <button className="bg-navy-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-navy-800 transition-colors">
                  <Users className="w-4 h-4 mr-2 inline" />
                  Connect
                </button>
              </div>
              
              <div className="flex space-x-6 mb-6 border-b">
                <button className="pb-2 border-b-2 border-navy-500 text-navy-600 font-medium">Dashboard</button>
                <button className="pb-2 text-gray-500">Jobs</button>
                <button className="pb-2 text-gray-500">Mentorship</button>
                <button className="pb-2 text-gray-500">Events</button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Recent Connections</h4>
                  <div className="space-y-2">
                    {["Sarah Johnson", "Mike Chen", "Lisa Rodriguez"].map((name, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        <span className="text-sm">{name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Job Recommendations</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-blue-50 rounded text-sm">
                      <div className="font-medium">Senior Developer</div>
                      <div className="text-gray-600">TechCorp • Remote</div>
                    </div>
                    <div className="p-2 bg-blue-50 rounded text-sm">
                      <div className="font-medium">Product Manager</div>
                      <div className="text-gray-600">StartupXYZ • SF</div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Upcoming Events</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-green-50 rounded text-sm">
                      <div className="font-medium">Alumni Mixer</div>
                      <div className="text-gray-600">Dec 15 • 6:00 PM</div>
                    </div>
                    <div className="p-2 bg-green-50 rounded text-sm">
                      <div className="font-medium">Career Workshop</div>
                      <div className="text-gray-600">Dec 20 • Virtual</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
