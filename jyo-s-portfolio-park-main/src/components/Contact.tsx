import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxsB4dx-FLThdAvLJjrYSc6YSYoYFrJoWw6MswZBBLFrLA5D7sQWmsTYh8hzjXRDrB1mQ/exec';
        const response = await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            timestamp: new Date().toISOString(),
          }),
        });

        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again or email directly.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-background via-secondary/10 to-primary/10 dark:from-background dark:via-secondary/20 dark:to-primary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-2 md:mb-4">📬 Contact Me</h2>
          <div className="max-w-xl sm:max-w-2xl mx-auto bg-white/80 dark:bg-background/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg border border-blue-200 dark:border-primary/20">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
  Want to chat? You can always drop a message into my inbox at{" "}
  <a href="mailto:madhavarapu.jyo@gmail.com" className="text-primary font-semibold hover:underline dark:text-primary/80">
    madhavarapu.jyo@gmail.com
  </a>{" "}
  or swing by my{" "}
  <a href="https://www.linkedin.com/in/jyoshitha-madhavarapu/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline dark:text-primary/80">
    LinkedIn
  </a>
  . Or, if you're feeling adventurous, send me a message right here - Kyro and I are listening! 
</p>

            {/* Social Links below contact info */}
            <div className="flex gap-2 sm:gap-4 mt-4 sm:mt-6 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/jyoshitha-madhavarapu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://github.com/KoalaisMad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Github className="w-5 h-5" />
                <span className="font-semibold">GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl sm:max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-background rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white dark:border-primary/20">
            {isSubmitted ? (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Thank you! Your message has been sent.</h3>
                <p className="text-gray-600 dark:text-gray-300">I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-200 font-semibold">Name *</Label>
                  <Input id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className={`mt-2 ${errors.name ? 'border-red-500' : ''}`} placeholder="Your name" />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="font-semibold dark:text-gray-200">Email *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={`mt-2 ${errors.email ? 'border-red-500' : ''}`} placeholder="your.email@example.com" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="subject" className="font-semibold dark:text-gray-200">Subject *</Label>
                  <Input id="subject" value={formData.subject} onChange={(e) => handleChange('subject', e.target.value)} className={`mt-2 ${errors.subject ? 'border-red-500' : ''}`} placeholder="What's this about?" />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="font-semibold dark:text-gray-200">Message *</Label>
                  <Textarea id="message" value={formData.message} onChange={(e) => handleChange('message', e.target.value)} className={`mt-2 min-h-32 ${errors.message ? 'border-red-500' : ''}`} placeholder="Your message..." />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-base sm:text-lg py-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
