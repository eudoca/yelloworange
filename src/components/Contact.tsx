import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
// import { useMutation } from 'convex/react';
// import { api } from '../../convex/_generated/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // const submitContact = useMutation(api.contacts.submit);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMessage('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitState('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => setSubmitState('idle'), 3000);
    } catch (error) {
      setSubmitState('error');
      setErrorMessage('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can help you unlock the full potential of your data and drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-12">
              Get in Touch
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="ml-6">
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-300">info@datasing.nz</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="ml-6">
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-300">
                    Auckland<br />
                    New Zealand
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="text-white font-medium mb-4">
                Our Promise
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Speedy. Savvy. Safe. We deliver data solutions that are quick to implement, 
                intelligently designed, and secure by default.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-8" aria-label="Contact form">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-3 uppercase tracking-wide">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black"
                    placeholder="Your name"
                    aria-describedby="name-required"
                  />
                  <span id="name-required" className="sr-only">This field is required</span>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-3 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black"
                    placeholder="your@email.com"
                    aria-describedby="email-required"
                  />
                  <span id="email-required" className="sr-only">This field is required</span>
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-black mb-3 uppercase tracking-wide">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-3 uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black resize-none"
                  placeholder="Tell us about your data challenges..."
                  aria-describedby="message-required"
                />
                <span id="message-required" className="sr-only">This field is required</span>
              </div>
              
              <button
                type="submit"
                disabled={submitState === 'loading'}
                className={`w-full flex items-center justify-center px-8 py-4 font-medium transition-all duration-200 ${
                  submitState === 'loading' 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : submitState === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-black hover:bg-gray-800'
                } text-white`}
              >
                {submitState === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : submitState === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
              
              {submitState === 'error' && (
                <div className="flex items-center justify-center text-red-600 mt-6" role="alert" aria-live="polite">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {errorMessage}
                </div>
              )}
              
              {submitState === 'success' && (
                <div className="flex items-center justify-center text-green-600 mt-6" role="status" aria-live="polite">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 