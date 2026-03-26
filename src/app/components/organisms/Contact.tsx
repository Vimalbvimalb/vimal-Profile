import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { GradientText } from '../atoms/GradientText';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

const API_URL = import.meta.env.VITE_API_URL;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  // ✅ UPDATED HANDLE SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess('');

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message || "Message sent successfully ✅");

        // clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSuccess(data.message || "Failed to send message ❌");
      }

    } catch (error) {
      console.error(error);
      setSuccess("Server error ❌");
    }

    setLoading(false);
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
          <motion.div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Let's Talk</h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              I’m open to collaborations and full-time opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a key={index} href={info.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md">
                  <info.icon className="w-5 h-5" />
                  <div>
                    <p>{info.label}</p>
                    <p>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <Input
                label="Your Name"
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                required
              />

              <Input
                label="Enter Your Email Address"
                type="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                required
              />

              <Input
                label="Subject"
                value={formData.subject}
                onChange={(value) => setFormData({ ...formData, subject: value })}
                required
              />

              <Input
                label="Message"
                value={formData.message}
                onChange={(value) => setFormData({ ...formData, message: value })}
                multiline
                rows={6}
                required
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-5 h-5" />
              </Button>

              {success && (
                <p className="text-center text-green-600">{success}</p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}