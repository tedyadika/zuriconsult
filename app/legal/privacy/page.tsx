export const metadata = {
  alternates: { canonical: '/legal/privacy' },
  title: 'Privacy Policy | Zuricon Consult',
  description: 'Privacy policy for Zuricon Consult website.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container-custom max-w-3xl py-16">
      <h1 className="heading-lg mb-8">Privacy Policy</h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="heading-sm mb-4">1. Introduction</h2>
          <p>
            Zuricon Consult ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="heading-sm mb-4">2. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Personal Data:</strong> Name, email address, company, phone number, and any other information you voluntarily provide through contact forms or inquiries.</li>
            <li><strong>Automatically Collected Information:</strong> Information about your device, browser type, IP address, and pages visited.</li>
          </ul>
        </section>

        <section>
          <h2 className="heading-sm mb-4">3. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Respond to your inquiries and requests</li>
            <li>Send you marketing and promotional communications (with your consent)</li>
            <li>Generate analytics about how our Site is used</li>
            <li>Monitor and analyze trends, usage, and activities for security purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="heading-sm mb-4">4. Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information. We may share your information only as follows:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>With service providers who assist us in operating our website</li>
            <li>When required by law or legal process</li>
            <li>To protect our rights, privacy, safety, or property</li>
          </ul>
        </section>

        <section>
          <h2 className="heading-sm mb-4">5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="heading-sm mb-4">6. Changes to This Privacy Policy</h2>
          <p>
            Zuricon Consult reserves the right to make changes to this Privacy Policy at any time and for any reason. Any changes will become effective upon posting to the Site.
          </p>
        </section>

        <section>
          <h2 className="heading-sm mb-4">7. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> info@zuriconsult.com
          </p>
        </section>
      </div>
    </div>
  );
}
