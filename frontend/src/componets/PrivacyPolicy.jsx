import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <div className="w-4/5 m-auto">
        <h1 className="text-[#d05ee2] py-8 font-bold">
          Privacy Policy for Certificate Management System
        </h1>
        <ol>
          <li className="my-4">Effective Date: 06/07/2023</li>
          <li className="my-4">
            At Noah Dujé CMS, we are committed to protecting the privacy and
            security of your personal information. This Privacy Policy outlines
            how we collect, use, disclose, and protect the information collected
            through our Certificate Management System (CMS). Please read this
            policy carefully to understand our practices regarding your personal
            information.
          </li>
          <li className="my-4">
            Information We Collect: 1.1. Personal Information: When you use our
            CMS, we may collect personal information that can identify you
            directly or indirectly. This may include but is not limited to your
            name, email address, contact details, job title,
            company/organization name, and other information required for
            certificate management.
          </li>
          <li className="my-4">
            1.2. Certificate Information: As part of the CMS functionality, we
            may collect and store information related to the certificates you
            manage, including certificate details, expiration dates, associated
            domains, and related metadata.
          </li>
          <li className="my-4">
            1.3. Log Files and Analytics: Like many websites and software
            applications, our CMS may collect certain information automatically
            and store it in log files. This information may include your IP
            address, browser type, operating system, referring URLs, pages
            visited, and other usage details. We may also use analytics tools to
            collect and analyze this information to improve the functionality
            and performance of our CMS.
          </li>
          <li className="my-4">
            Use of Information: 2.1. Certificate Management: We use the personal
            and certificate information collected through our CMS to provide you
            with the requested certificate management services. This includes
            issuing, renewing, revoking, and monitoring certificates, as well as
            managing associated domains and related metadata.
          </li>
          <li className="my-4">
            2.2. Communication: We may use your contact information to send you
            administrative messages, updates, security alerts, and other
            communications related to your use of our CMS. These communications
            are considered an essential part of the service we provide, and you
            may not be able to opt out of them.
          </li>
          <li className="my-4">
            2.3. Service Improvement: We may use aggregated and anonymized
            information, including log files and analytics data, to analyze
            trends, monitor the usage of our CMS, and improve its functionality,
            performance, and security. This information will not personally
            identify you or any individual user.
          </li>
          <li className="my-4">
            Information Sharing and Disclosure: 3.1. Third-Party Service
            Providers: We may engage trusted third-party service providers who
            assist us in operating our CMS and delivering the services requested
            by you. These service providers may have access to your personal
            information solely for the purpose of providing the requested
            services and are bound by strict confidentiality obligations.
          </li>
          <li className="my-4">
            3.2. Legal Requirements: We may disclose your personal information
            if required to do so by law or in response to valid legal requests,
            such as subpoenas, court orders, or government regulations.
          </li>
          <li className="my-4">
            3.3. Business Transfers: In the event of a merger, acquisition, or
            any form of sale or transfer of some or all of our assets, we may
            disclose or transfer your personal information to the acquiring
            organization, subject to the commitments made in this Privacy
            Policy.
          </li>
          <li className="my-4">
            Data Security: We take reasonable measures to protect the security
            of your personal information and ensure it is treated securely and
            in accordance with this Privacy Policy. However, no data
            transmission or storage system can be guaranteed to be 100% secure.
            While we strive to protect your personal information, we cannot
            guarantee the absolute security of your information transmitted
            through our CMS.
          </li>
          <li className="my-4">
            Your Choices: 5.1. Account Information: You may access, update, or
            correct your account information by logging into your CMS account
            and making the necessary changes. Alternatively, you can contact us
            directly to request any changes or updates to your personal
            information.
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
