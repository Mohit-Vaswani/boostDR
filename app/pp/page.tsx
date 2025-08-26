import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: August 26, 2025</p>
      <p className="mb-4">
        Welcome to BoostDR (&quot;Website&quot;), accessible from <a href="https://BoostDR.xyz" className="text-blue-500">BoostDR.xyz</a>. Your privacy is important to us.
      </p>
      <h2 className="text-2xl font-bold mt-6">Information We Collect</h2>
      <p className="mb-4">We collect personal information such as your name, email address, and payment details when you purchase our database.</p>
      
      <h2 className="text-2xl font-bold mt-6">How We Use Your Information</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>To process transactions and provide access to the database.</li>
        <li>To improve our website and services.</li>
        <li>To send updates or respond to inquiries.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">Data Protection</h2>
      <p className="mb-4">We use secure encryption and do not share your information with third parties except for payment processing.</p>
      
      <h2 className="text-2xl font-bold mt-6">Contact Us</h2>
      <p className="mb-4">If you have any questions about our privacy policy, contact us at <a href="mailto:epictools.io@gmail.com" className="text-blue-500">epictools.io@gmail.com</a>.</p>
    </div>
  );
};

export default PrivacyPolicy;