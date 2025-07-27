import { motion } from "framer-motion";
import { Monitor, Server, Database, Key, Cloud, Gauge, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function TechStack() {
  const techStacks = [
    {
      icon: Monitor,
      title: "Frontend",
      color: "blue",
      technologies: [
        "React with Modern Hooks",
        "Material-UI Components", 
        "Tailwind CSS Styling",
        "Responsive Design"
      ]
    },
    {
      icon: Server,
      title: "Backend",
      color: "green",
      technologies: [
        "FastAPI (Python)",
        "High-Performance APIs",
        "Async Request Handling",
        "Auto-Generated Docs"
      ]
    },
    {
      icon: Database,
      title: "Database",
      color: "purple",
      technologies: [
        "PostgreSQL on Supabase",
        "Row-Level Security",
        "Real-time Subscriptions",
        "Automatic Backups"
      ]
    },
    {
      icon: Key,
      title: "Authentication",
      color: "orange",
      technologies: [
        "Supabase Auth",
        "Multi-Factor Auth",
        "Social Login Support",
        "Session Management"
      ]
    },
    {
      icon: Cloud,
      title: "Deployment",
      color: "gray",
      technologies: [
        "Vercel Global CDN",
        "Continuous Integration",
        "Auto-Scaling",
        "99.9% Uptime SLA"
      ]
    },
    {
      icon: Gauge,
      title: "Performance",
      color: "yellow",
      technologies: [
        "Edge Caching",
        "Image Optimization",
        "Lazy Loading",
        "<1s Load Times"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-indigo-50 border-blue-100",
      green: "from-green-50 to-emerald-50 border-green-100",
      purple: "from-purple-50 to-violet-50 border-purple-100",
      orange: "from-orange-50 to-red-50 border-orange-100",
      gray: "from-gray-50 to-slate-50 border-gray-100",
      yellow: "from-yellow-50 to-amber-50 border-yellow-100"
    };
    return colorMap[color as keyof typeof colorMap] || "from-gray-50 to-slate-50 border-gray-100";
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600", 
      purple: "text-purple-600",
      orange: "text-orange-600",
      gray: "text-gray-600",
      yellow: "text-yellow-600"
    };
    return colorMap[color as keyof typeof colorMap] || "text-gray-600";
  };

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ForgeAlumni leverages cutting-edge technologies to deliver a fast, reliable, and scalable platform that grows with your community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${getColorClasses(stack.color)} border p-6`}>
                <div className="text-center mb-4">
                  <stack.icon className={`w-12 h-12 ${getIconColor(stack.color)} mx-auto mb-2`} />
                  <h3 className="text-xl font-semibold text-navy-900">{stack.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {stack.technologies.map((tech, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className={`w-4 h-4 ${getIconColor(stack.color)} mr-2 flex-shrink-0`} />
                      {tech}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-br from-navy-50 to-blue-50 p-8 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">Scalable Architecture</h3>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <Card className="p-6 mb-4 shadow-lg">
                <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-navy-900">Frontend</h4>
                <p className="text-sm text-gray-600">React Application</p>
              </Card>
              <div className="text-xs text-gray-500">Deployed on Vercel CDN</div>
            </div>

            <div className="text-center">
              <Card className="p-6 mb-4 shadow-lg">
                <div className="w-12 h-12 text-green-600 mx-auto mb-2 text-2xl">⚡</div>
                <h4 className="font-semibold text-navy-900">API Layer</h4>
                <p className="text-sm text-gray-600">FastAPI Backend</p>
              </Card>
              <div className="text-xs text-gray-500">Auto-scaling serverless</div>
            </div>

            <div className="text-center">
              <Card className="p-6 mb-4 shadow-lg">
                <Database className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-navy-900">Database</h4>
                <p className="text-sm text-gray-600">PostgreSQL</p>
              </Card>
              <div className="text-xs text-gray-500">Supabase managed</div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="text-center">
              <Card className="text-sm text-gray-600 bg-white px-4 py-2 shadow">
                <div className="w-6 h-6 mx-auto mb-1 text-lg">🔒</div>
                Secure HTTPS Communication
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
