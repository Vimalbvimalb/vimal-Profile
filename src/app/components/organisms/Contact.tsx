import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { GradientText } from '../atoms/GradientText';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    alert('Thank you for your message! I will get back to you soon.');

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vimalbvimalb@gmail.com',
      href: 'mailto:vimalbvimalb@gmail.com',
      color: '#2563EB'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 63818 64040',
      href: 'tel:+916381864040',
      color: '#059669'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tiruvannamalai, Tamil Nadu',
      href: '#',
      color: '#7C3AED'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-[#F8F9FB] to-white relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7C3AED]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <GradientText variant="emerald-teal">Touch</GradientText>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to build something great.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Let's Talk</h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
         I’m open to collaborations and full-time opportunities. Feel free to reach out if you’d like to work together.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${info.color}15` }}
                  >
                    <info.icon className="w-5 h-5" style={{ color: info.color }} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    <p className="font-medium text-gray-900">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-br from-[#2563EB]/5 to-[#7C3AED]/5 rounded-2xl border border-[#2563EB]/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-[#059669] rounded-full animate-pulse" />
                <h4 className="font-semibold text-gray-900">Currently Available</h4>
              </div>

              <p className="text-gray-600 text-sm">
                Open to freelance and full-time opportunities.
                Typical response time: within 24 hours.
              </p>
            </motion.div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <Input
                label="Your Name"
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                placeholder="Your name"
                required
              />

              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                placeholder="your@email.com"
                required
              />

              <Input
                label="Subject"
                value={formData.subject}
                onChange={(value) => setFormData({ ...formData, subject: value })}
                placeholder="Project Inquiry"
                required
              />

              <Input
                label="Message"
                value={formData.message}
                onChange={(value) => setFormData({ ...formData, message: value })}
                placeholder="Tell me about your project..."
                multiline
                rows={6}
                required
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Send Message <Send className="ml-2 w-5 h-5" />
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}