import { motion } from "framer-motion";
import { Lock, Shield, EyeOff, ClipboardCheck, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Row-Level Security",
      description: "Database-level security ensures users only access their permitted data",
      color: "green"
    },
    {
      icon: Shield,
      title: "Secure Authentication", 
      description: "Multi-factor authentication and secure session management",
      color: "blue"
    },
    {
      icon: EyeOff,
      title: "Private by Default",
      description: "Your data stays within the verified alumni network only",
      color: "purple"
    },
    {
      icon: ClipboardCheck,
      title: "Content Approval",
      description: "Admin-controlled content moderation maintains quality standards",
      color: "orange"
    }
  ];

  const enterpriseFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      title: "GDPR & CCPA Compliant",
      description: "Full compliance with international data protection regulations and user privacy rights."
    },
    {
      title: "Regular Security Audits",
      description: "Continuous monitoring and third-party security assessments ensure ongoing protection."
    },
    {
      title: "Backup & Recovery",
      description: "Automated backups and disaster recovery procedures protect against data loss."
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Security & Privacy First
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your alumni community deserves the highest level of security and privacy protection. We've built ForgeAlumni with enterprise-grade security from the ground up.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(feature.color)}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Enterprise-Grade Protection</h3>
                <div className="space-y-6">
                  {enterpriseFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-navy-50 to-blue-50 p-8 rounded-xl">
                  <div className="text-center mb-6">
                    <Shield className="w-16 h-16 text-navy-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-navy-900">Multi-Layer Security</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Application Layer", color: "green" },
                      { label: "Database Security", color: "blue" },
                      { label: "Network Protection", color: "purple" },
                      { label: "Infrastructure", color: "orange" }
                    ].map((layer, index) => (
                      <motion.div
                        key={index}
                        className={`bg-white p-4 rounded-lg border-l-4 border-${layer.color}-500`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">{layer.label}</span>
                          <Check className={`w-5 h-5 text-${layer.color}-500`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
