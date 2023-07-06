import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

function TermsAndCondition() {
  return (
    <>
      <Navigation />
      <div className="w-4/5 m-auto">
        <h1 className="text-[#d05ee2] text-lg font-bold py-8">
          Terms and Conditions for Certificate Management System
        </h1>
        <ol>
          <li className="my-4 font-bold">Acceptance of Terms</li>
          <li className="my-4">
            By accessing and using the Certificate Management System (CMS), you
            agree to be bound by these Terms and Conditions. If you do not agree
            with any part of these terms, please refrain from using the CMS.
          </li>
          <li className="my-4">
            User Responsibilities 2.1 Account Creation: To access the CMS, you
            may need to create an account. You are responsible for maintaining
            the confidentiality of your account information, including your
            username and password. Any activity conducted through your account
            will be deemed your responsibility.
          </li>
          <li className="my-4">
            Accuracy of Information: You must provide accurate and up-to-date
            information when using the CMS. It is your responsibility to ensure
            that the information provided during the certificate management
            process is correct.
          </li>
          <li className="my-4">
            Compliance with Laws: You agree to comply with all applicable laws
            and regulations while using the CMS. You will not use the CMS for
            any illegal or unauthorized purpose.
          </li>
          <li className="my-4">
            Certificate Management 3.1 Certificate Requests: The CMS allows
            users to request certificates for various purposes. You understand
            and acknowledge that the issuance of certificates is subject to
            verification and approval processes, and the CMS administrators
            reserve the right to reject any certificate request without
            providing a reason.
          </li>
          <li className="my-4">
            3.2 Certificate Validity: Certificates issued through the CMS are
            valid based on the relevant policies and procedures established by
            the issuing authority. It is your responsibility to ensure that the
            certificates obtained through the CMS are used within the
            appropriate context and timeframe.
          </li>
          <li className="my-4">
            3.3 Certificate Revocation: In the event of misuse, fraud, or any
            violation of the CMS terms, the CMS administrators reserve the right
            to revoke issued certificates without notice. You agree to
            immediately cease using any revoked certificates upon notification.
          </li>
          <li className="my-4">
            Intellectual Property Rights 4.1 Ownership: The CMS and all its
            associated content, including but not limited to software,
            documentation, logos, and trademarks, are the intellectual property
            of the CMS administrators or their respective owners. You agree not
            to reproduce, distribute, modify, or create derivative works based
            on the CMS without explicit written permission.
          </li>
          <li className="my-4">
            4.2 User Content: By using the CMS, you grant the CMS administrators
            a non-exclusive, royalty-free, worldwide license to use, reproduce,
            modify, adapt, publish, translate, distribute, and display any
            content you submit through the CMS for the purposes of providing and
            improving the CMS services.
          </li>
          <li className="my-4">
            Limitation of Liability 5.1 No Warranty: The CMS is provided "as is"
            and without any warranty or guarantee, express or implied. The CMS
            administrators make no representations or warranties regarding the
            accuracy, reliability, or availability of the CMS or its
            functionality.
          </li>
          <li className="my-4">
            5.2 Indemnification: You agree to indemnify and hold harmless the
            CMS administrators from any claims, damages, liabilities, or
            expenses arising out of your use of the CMS, including but not
            limited to any violation of these Terms and Conditions.
          </li>
          <li className="my-4">
            5.3 Limitation of Liability: In no event shall the CMS
            administrators be liable for any direct, indirect, incidental,
            special, or consequential damages arising out of or in any way
            connected with the use of the CMS, even if advised of the
            possibility of such damages.
          </li>
          <li className="my-4">
            Termination The CMS administrators reserve the right to terminate or
            suspend your access to the CMS at any time without notice or
            liability, for any reason they deem appropriate, including, but not
            limited to, violation of these Terms and Conditions.
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default TermsAndCondition;
