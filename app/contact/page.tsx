'use client';

import { Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-lg mb-6">Let's Discuss an Opportunity</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you are developing a project, seeking technical expertise, exploring investment opportunities or looking for partners in a new market, contact Zuricon Consult to start a conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Select a topic</option>
                      <option value="ppp">PPP & Infrastructure</option>
                      <option value="investment">Investment & Project Development</option>
                      <option value="it">IT & Digital Transformation</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="cloud">Cloud & Azure</option>
                      <option value="technology">Technology & Innovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Tell us about your project or opportunity..."
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you for your message. We'll get back to you shortly.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    There was an error sending your message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full px-6 py-3 font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-sm text-gray-600">
                  We'll respond to your inquiry as soon as possible.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Direct Contact</h3>
                  <a
                    href="mailto:info@zuriconsult.com"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 mb-6"
                  >
                    <Mail className="text-blue-600 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>info@zuriconsult.com</p>
                    </div>
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                  <a
                    href="https://www.linkedin.com/company/zuriconsultant/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 mb-6"
                  >
                    <span className="text-blue-600 flex-shrink-0 text-lg font-medium">in</span>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p>Zuriconsultant</p>
                    </div>
                  </a>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-700 text-sm">
                    We typically respond to inquiries within 2-3 business days. For urgent matters, please send an email directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
