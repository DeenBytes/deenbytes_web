import React from "react";
import GotoTop from "../components/reusebleComp/GotoTop";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <>
    <GotoTop />
    <div className="bg-[#EBFFF1]">
    <div className="px-4 py-10 container mx-auto max-w-6xl text-black">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-secondary text-center">Terms & Conditions for DeenBytes</h1>
      <p className="font-semibold">
      Welcome to DeenBytes. By using our website, you agree to these Terms and Conditions. Please read them carefully.
      </p>

      <h2 className="text-secondary text-lg font-semibold mt-4">1. Acceptance of Terms</h2>
      <p className="text-gray-600">
      Using DeenBytes, you agree to comply with these Terms and Conditions. If you disagree, you must stop using the website.
      </p>

      <h2 className="text-secondary text-lg font-semibold mt-4">2. Purpose of the website</h2>
      <p className="text-gray-600">
      DeenBytes website/app is designed to provide Islamic content, prayer timings, Quranic verses, or other religious services. We aim to ensure all content aligns with Islamic values.
      </p>

      <h2 className="text-secondary text-lg font-semibold mt-4">3. Eligibility</h2>
      <p className="text-gray-600">
      This website is intended for users of all age groups. By using the website, you confirm you meet this requirement.
      </p>

      <h2 className="text-secondary text-lg font-semibold mt-4">4. User Responsibilities</h2>
      <ul className="list-disc list-inside text-gray-600 ml-3">
        <li>Ensure your use of the website complies with Islamic principles and local laws.</li>
        <li>Do not misuse or abuse the services or content provided.</li>
        <li>Avoid sharing inappropriate, un-Islamic, or offensive material on any interactive features.</li>
      </ul>

      <h2 className="text-secondary text-lg font-semibold mt-4">5. Content Guidelines</h2>
      <ul className="list-disc list-inside text-gray-600 ml-3">
        <li>All content provided (e.g., Quranic verses, Hadith, and Islamic educational material) is verified.</li>
        <li>Users must not copy, redistribute, or use content for commercial purposes without prior permission.</li>
      </ul>

      <h2 className="text-secondary text-lg font-semibold mt-4">6. Privacy Policy</h2>
      <p className="text-gray-600">
        Refer to our <Link to="/privacy" className="text-secondary underline">Privacy Policy</Link> to understand how we collect, use, and protect your personal data.
      </p>

      <h2 className="text-secondary text-lg font-semibold mt-4">7. Prohibited Activities</h2>
      <p className="text-gray-600">Users are prohibited from:</p>
      <ul className="list-disc list-inside text-gray-600 ml-3">
        <li>Engaging in activities contrary to Islamic teachings.</li>
        <li>Spreading misinformation, unverified Islamic rulings, or other content.</li>
        <li>Hacking, data theft, or any actions that compromise the website's security.</li>
      </ul>

      <h2 className="text-secondary text-lg font-semibold mt-4">8. Intellectual Property</h2>
      <p className="text-gray-600">
        All content, including logos, trademarks, and designs, belongs to Deen Bytes. Unauthorized use is strictly prohibited.
      </p>

      <h2 className="text-secondary text-lg font-semibold mt-4">9. Amendments to Terms</h2>
      <p className="text-gray-600">
        We reserve the right to update these terms. Users will be notified of changes, and continued use of the website signifies agreement to the updated terms.
      </p>

      <h2 className="text-secondary text-lg font-semibold mt-4">10. Termination</h2>
      <p className="text-gray-600">
        We may suspend or terminate your access to the website if these terms are violated or if your actions are deemed un-Islamic.
      </p>
    </div>
    </div>
    </>
  );
};

export default TermsAndConditions;
