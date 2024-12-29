import React from 'react';
import { Helmet } from 'react-helmet-async';

// Reusable style classes
const sectionClasses =
  "w-full max-w-4xl bg-white/95 p-8 mb-12 rounded-lg shadow-lg transition-all duration-300 ease-in-out border-2 border-yellow-900 relative hover:shadow-2xl";
const gradientBorderClasses =
  "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-900 via-orange-300 to-yellow-900";
const headingClasses =
  "text-4xl font-serif font-bold text-center mb-8 text-yellow-950 relative";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Michael Ninness</title>
        <meta name="description" content="Privacy Policy for Michael Ninness's website. Learn about how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, cookies policy" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy - Michael Ninness" />
        <meta property="og:description" content="Privacy Policy for Michael Ninness's website. Learn about how we collect, use, and protect your personal information." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Michael Ninness" />
        <meta name="twitter:description" content="Privacy Policy for Michael Ninness's website. Learn about how we collect, use, and protect your personal information." />

        <link rel="canonical" href="https://yourdomain.com/privacy-policy" />
      </Helmet>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6 transition-all duration-1000">
        <section className={sectionClasses}>
          <div className={gradientBorderClasses}></div>
          <h1 className={headingClasses}>Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-center mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Introduction</h2>
            <p className="mb-6">
              Welcome to Michael Ninness's website (referred to as "we," "our," or "the Site"). This Privacy
              Policy is intended to inform you about how your personal information is collected, used, and
              protected when you visit and interact with the Site.
            </p>
            <p className="mb-6">
              By accessing or using the Site, you agree to the collection and use of information in accordance
              with this Privacy Policy. Please read it carefully.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information in the following ways:</p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>Personal Information:</strong> When you visit our Site, sign up for newsletters, contact us, or
                make a purchase, we may collect personal information, such as your name, email address,
                and any other details you provide voluntarily.
              </li>
              <li className="mb-2">
                <strong>Non-Personal Information:</strong> We may collect non-personal information, such as your IP
                address, browser type, device type (mobile, desktop, etc.), and browsing activity on the
                Site. This information is used for analytics and improving user experience.
              </li>
            </ul>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>To respond to your inquiries or requests (e.g., book inquiries, newsletter sign-up).</li>
              <li>To send you newsletters, updates, or other promotional material related to the author's work, if you have opted in.</li>
              <li>To improve the content and functionality of the Site.</li>
              <li>To analyze Site usage and enhance the user experience.</li>
              <li>To comply with legal obligations and resolve disputes.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
            <p className="mb-6">
              The Site may use cookies and other tracking technologies (such as web beacons, Google
              Analytics) to collect data about your interaction with the Site. Cookies help us analyze trends,
              administer the site, track users' movement around the site, and gather demographic information.
              You can choose to disable cookies through your browser settings, but doing so may limit your
              ability to use certain features of the Site.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">4. Third-Party Services</h2>
            <p className="mb-6">
              The Site may contain links to third-party websites. Please note that we are not responsible for the
              privacy practices of these sites. We encourage you to read the privacy policies of any third-party
              site you visit.
            </p>
            <p className="mb-6">
              We may also use third-party services, such as email marketing platforms (e.g., MailChimp), to
              manage our communications. These services may collect personal information, but we ensure
              that they handle it according to their privacy policies.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">5. Data Security</h2>
            <p className="mb-6">
              We take reasonable measures to protect your personal information from unauthorized access,
              alteration, or destruction. However, no method of internet transmission or electronic storage is
              100% secure. While we strive to protect your personal information, we cannot guarantee its
              absolute security.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">6. Your Rights and Choices</h2>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Access:</strong> You may request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You may update or correct your personal information at any time.</li>
              <li><strong>Deletion:</strong> You may request the deletion of your personal information, subject to any legal obligations we may have to retain it.</li>
              <li><strong>Opt-Out:</strong> You may opt-out of receiving marketing emails at any time by following the unsubscribe link in the email or contacting us directly.</li>
            </ul>
            <p className="mb-6">
              If you are a resident of the European Union, you have the right to withdraw consent at any time
              and lodge a complaint with your local data protection authority.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">7. Children's Privacy</h2>
            <p className="mb-6">
              The Site is not intended for use by children under the age of 13. We do not knowingly collect
              personal information from children. If you are a parent or guardian and believe that we have
              collected personal information from a child, please contact us so we can take appropriate action.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We reserve the right to update or change this Privacy Policy at any time. Any changes will be
              reflected on this page with an updated revision date. We encourage you to review this policy
              periodically for any updates.
            </p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-6">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p>Michael Ninness<br />
            Email: starfrogs@yahoo.com<br />
            Website: michaelninness.com</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
