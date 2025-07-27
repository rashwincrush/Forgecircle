import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Rocket, Users, TrendingUp, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertDemoRequestSchema } from "@shared/schema";
import { z } from "zod";

type FormData = z.infer<typeof insertDemoRequestSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(insertDemoRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      role: "",
      alumniSize: "",
      message: ""
    }
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/demo-request", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Demo Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your personalized demo."
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const benefits = [
    {
      icon: Rocket,
      title: "Quick Setup",
      description: "Get your alumni network up and running in just 48 hours with our guided onboarding process."
    },
    {
      icon: Users,
      title: "Expert Support", 
      description: "Dedicated customer success team to help you maximize engagement and platform adoption."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Organizations see 3x increase in alumni engagement within the first 6 months."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Alumni Network?
          </h2>
          <p className="text-xl text-navy-100 max-w-3xl mx-auto">
            Join thousands of organizations already using ForgeAlumni to build stronger, more engaged alumni communities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Request a Demo</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-navy-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">We'll contact you within 24 hours to schedule your personalized demo.</p>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        {...form.register("firstName")}
                        placeholder="John"
                        className="mt-1"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        {...form.register("lastName")}
                        placeholder="Smith"
                        className="mt-1"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="john@organization.edu"
                      className="mt-1"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      {...form.register("organization")}
                      placeholder="University Name"
                      className="mt-1"
                    />
                    {form.formState.errors.organization && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.organization.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Select onValueChange={(value) => form.setValue("role", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alumni-director">Alumni Relations Director</SelectItem>
                        <SelectItem value="it-admin">IT Administrator</SelectItem>
                        <SelectItem value="dean">Dean/Administrator</SelectItem>
                        <SelectItem value="student-affairs">Student Affairs</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.role && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.role.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="alumniSize">Alumni Network Size</Label>
                    <Select onValueChange={(value) => form.setValue("alumniSize", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select size range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under 1,000</SelectItem>
                        <SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
                        <SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
                        <SelectItem value="10000-25000">10,000 - 25,000</SelectItem>
                        <SelectItem value="over-25000">Over 25,000</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.alumniSize && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.alumniSize.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      placeholder="What challenges are you facing with your current alumni network?"
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-navy-900 text-white hover:bg-navy-800"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? (
                      "Submitting..."
                    ) : (
                      <>
                        <CalendarCheck className="w-5 h-5 mr-2" />
                        Schedule Demo
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    We'll contact you within 24 hours to schedule your personalized demo
                  </p>
                </form>
              )}
            </Card>
          </motion.div>

          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Why Choose ForgeAlumni?</h3>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-navy-100">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Card className="bg-navy-800 border-navy-700 p-6">
              <h4 className="font-semibold text-lg mb-4 text-white">Contact Information</h4>
              <div className="space-y-3 text-navy-100">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span>sales@forgealumni.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span>Available 9 AM - 6 PM EST</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
