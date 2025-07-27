import { motion } from "framer-motion";
import { GraduationCap, Settings, Network, Rocket, HandHeart, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function TargetAudience() {
  return (
    <section id="target-audience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Built for Every Alumni Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a recent graduate or an experienced professional, ForgeAlumni has the tools you need to succeed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-navy-50 to-blue-50 p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">For Alumni</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                From recent graduates seeking their first job to experienced professionals looking to mentor, hire, or reconnect with their alma mater community.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Network className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Expand Your Network</h4>
                    <p className="text-gray-600 text-sm">Connect with thousands of alumni across industries and locations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Rocket className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Accelerate Your Career</h4>
                    <p className="text-gray-600 text-sm">Access exclusive job opportunities and mentorship programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HandHeart className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Give Back & Mentor</h4>
                    <p className="text-gray-600 text-sm">Share your expertise and help the next generation succeed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CalendarCheck className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Stay Connected</h4>
                    <p className="text-gray-600 text-sm">Join events, workshops, and community discussions</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-navy-900 text-white hover:bg-navy-800">
                Join as Alumni
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gold-50 to-yellow-50 p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">For Administrators</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Powerful admin tools to manage your community, moderate content, and foster meaningful engagement across your alumni network.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Settings className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900">User Management</h4>
                    <p className="text-gray-600 text-sm">Manage roles, permissions, and user verification seamlessly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0 text-center">🛡️</div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Content Moderation</h4>
                    <p className="text-gray-600 text-sm">Approve jobs, events, and maintain community standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0 text-center">📊</div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Analytics Dashboard</h4>
                    <p className="text-gray-600 text-sm">Track engagement, growth, and platform activity metrics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0 text-center">📋</div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Activity Logs</h4>
                    <p className="text-gray-600 text-sm">Monitor user actions and maintain security oversight</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-gold-600 text-white hover:bg-gold-700">
                Admin Demo
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
