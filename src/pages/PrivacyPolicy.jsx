import React from 'react';
import GotoTop from '../components/reusebleComp/GotoTop';

const PrivacyPolicy = () => {
  return (
    <>
    <GotoTop />
    <div className="max-w-6xl mx-auto p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl text-secondary mt-3 mb-8 text-center font-bold">Privacy Policy</h1>
        <p className="mb-4 text-para text-base">This Application collects some Personal Data from its Users.</p>
        <p className="mb-8 text-para text-base">This document can be printed for reference by using the print command in the settings of any browser.</p>
        
        <h2 className="text-2xl md:text-3xl text-secondary text-semibold mb-4">Personal Data collected for the following purposes and using the following services:</h2>
        
        <h3 className="text-xl text-secondary mb-2">1. <span className='underline'>Advertisements</span></h3>
        <strong className="text-[#398565]">AdMob:</strong>
        <p className="text-para text-base mb-4">Personal Data: Cookies; unique device identifiers for advertising (Google Advertiser ID or IDFA, for example); Usage Data</p>
        <strong className="text-[#398565]">Ogury:</strong>
        <p className="text-para text-base mb-4">Personal Data: Cookies; Usage Data</p>
        
        <h3 className="text-xl text-secondary  mb-2">2. <span className='underline'>Analytics</span></h3>
        <strong className="text-[#398565]">Google Analytics for Firebase</strong>
        <p className="text-para text-base mb-4">Personal Data: Usage Data</p>
        <strong className="text-[#398565]">Batch:</strong>
        <p className="text-para text-base mb-4">Custom attributes Data: Premium status and expiry date</p>
        
        <h3 className="text-xl text-secondary mb-2">3. <spa className='underline'>Registration and authentication</spa></h3>
        <strong className="text-[#398565]">Firebase Authentication</strong>
        <p className="text-para text-base mb-4">Personal Data: email address; first name; last name</p>
        <strong className="text-[#398565]">RevenueCat:</strong>
        <p className="text-para text-base mb-4">Personal Data: email address; first name; last name; Country; Device Type; Operating System; RevenueCat Purchases SDK Version (e.g. 2.5.0); Last Seen (the last time a user used your app); App User ID if set by Customer; Any attribution data attached to the user by Customer.</p>
        
        <h3 className="text-xl text-secondary mb-2">4. <span className='underline'>User database management</span></h3>
        <strong className="text-[#398565]">SendinBlue Marketing Automation</strong>
        <p className="text-para text-base mb-8">Personal Data: Cookies; email address; Usage Data</p>
        
        <h2 className="text-2xl text-secondary mb-4">Full Policy</h2>
        
        <h3 className="text-xl text-secondary mb-2">a. <span className='underline'>Types of Data Collected:</span></h3>
        <p className="text-para text-base mb-4">This Application collects Personal Data such as Cookies, Usage Data, unique device identifiers (e.g., Google Advertiser ID or IDFA), first name, last name, and email address, either directly or through third parties.</p>
        <p className="text-para text-base mb-4">Details on the collected Data are provided in this privacy policy or through notices displayed before collection. Personal Data may be provided by the User or automatically collected (e.g., Usage Data). Unless stated otherwise, providing the requested Data is mandatory; failure to do so may prevent the Application from delivering its services. Optional Data is marked as such, and Users may choose not to provide it without affecting the Service's functionality.</p>
        <p className="text-para text-base mb-8">Cookies and tracking tools are used to provide the Service and for purposes outlined in this policy and the Cookie Policy. Users are responsible for ensuring they have third-party consent for any Personal Data they share through the Application.</p>
        
        <h3 className="text-xl text-secondary mb-2">b. <span className='underline'>Purpose of Processing:</span></h3>
        <p className="text-para text-base mb-4">User Data is collected to provide the Service, fulfill legal obligations, respond to enforcement requests, protect rights, prevent fraud, and support activities such as advertising, analytics, registration, authentication, and database management. For details on Data use, refer to “Detailed information on the processing of Personal Data.”</p>
        
        <h3 className="text-xl text-secondary mb-2">c. <span className='underline'>Rights of Users:</span></h3>
        <p className="text-para text-base mb-4">Users have certain rights regarding their Personal Data, including:</p>
        <ul className="text-para text-base mb-8 pl-6 list-disc">
          <li><strong>Withdraw consent:</strong> Revoke previously given consent for Data processing.</li>
          <li><strong>Object to processing:</strong> Oppose Data processing when based on legal grounds other than consent (see details below).</li>
          <li><strong>Access Data:</strong> Check if their Data is being processed, request details about the processing, and obtain a copy.</li>
          <li><strong>Rectify Data:</strong> Verify and request updates or corrections to their Data.</li>
          <li><strong>Restrict processing:</strong> Limit Data processing under specific conditions, allowing only storage.</li>
          <li><strong>Delete Data:</strong> Request the erasure of their Data under certain circumstances.</li>
          <li><strong>Transfer Data:</strong> Receive their Data in a structured format for transfer to another controller, if processed automatically and based on consent, a contract, or pre-contractual obligations.</li>
          <li><strong>File complaints:</strong> Report concerns to their local data protection authority.</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
