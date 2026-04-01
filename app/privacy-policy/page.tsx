import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { LeadMagnetModalProvider } from "@/components/LeadMagnetModalProvider";
import { siteConfig } from "@/config/site";

const informationCategories = [
  ["Contact information", "Name, email address, phone number, job title, organisation name"],
  ["Enquiry information", "Details you provide when submitting a contact form or booking a consultation"],
  ["Payment information", "Billing name and address. Card details are processed by Stripe and are never stored by us"],
  ["Usage data", "IP address, browser type, pages visited, time on site, and referring URL"],
  ["Communications", "Emails, messages, or other correspondence you send to us"],
];

const cookieTypes = [
  ["Essential cookies", "Required for the website to function correctly"],
  ["Analytics cookies", "Used by Google Analytics to understand how visitors use our site"],
  ["Marketing cookies", "Used to track the effectiveness of our advertising campaigns"],
];

export const metadata: Metadata = {
  title: `Privacy policy | ${siteConfig.brand.name}`,
  description:
    "Read the privacy policy for Crisis Communications Australia, including how personal information is collected, used, stored, and disclosed.",
  alternates: {
    canonical: `${siteConfig.brand.siteUrl}/privacy-policy`,
  },
};

function PolicyTable({
  headers,
  rows,
}: {
  headers: [string, string];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm text-charcoal">
        <thead className="bg-navy-dark text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map(([label, value]) => (
            <tr key={label} className="border-t border-border align-top">
              <td className="px-4 py-3 font-medium text-navy-dark">{label}</td>
              <td className="px-4 py-3 leading-7">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <LeadMagnetModalProvider>
      <>
        <main className="bg-off-white">
          <section className="border-b border-border bg-white py-16 md:py-20">
            <div className="section-shell max-w-4xl">
              <p className="section-eyebrow text-brand-teal">Privacy policy</p>
              <h1 className="heading-section mt-5 text-navy-dark">Privacy policy</h1>
              <p className="mt-6 text-[17px] leading-[1.8] text-charcoal">
                Crisis Communications Australia is committed to protecting your
                personal information and complying with the Privacy Act 1988 (Cth)
                and the 13 Australian Privacy Principles contained in that Act.
                This policy explains how we collect, use, store, and disclose
                your personal information when you interact with our website and
                services.
              </p>
              <p className="mt-4 text-sm text-charcoal-mid">
                Last updated: April 2026
              </p>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="section-shell max-w-4xl space-y-12">
              <section className="space-y-4">
                <h2 className="heading-card text-navy-dark">Our commitment to your privacy</h2>
                <p className="text-[17px] leading-[1.8] text-charcoal">
                  We encourage you to read this policy carefully. By using our
                  website or engaging our services, you agree to the collection
                  and use of your information as described below.
                </p>
              </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">1. Who we are</h2>
              <p className="text-[17px] leading-[1.8] text-charcoal">
                Crisis Communications Australia is operated by CRC PR Pty Ltd, a
                company registered in Australia. Our registered business address
                is available upon request. For all privacy-related enquiries,
                please contact us using the details at the end of this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">
                2. What personal information we collect
              </h2>
              <p className="text-[17px] leading-[1.8] text-charcoal">
                We may collect the following types of personal information. We
                only collect personal information that is reasonably necessary
                for our business functions and activities.
              </p>
              <PolicyTable
                headers={["Category", "Examples"]}
                rows={informationCategories}
              />
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">
                3. How we collect your information
              </h2>
              <div className="space-y-4 text-[17px] leading-[1.8] text-charcoal">
                <p>
                  Directly from you when you complete a contact form, register
                  for a course, book a consultation, subscribe to our email
                  list, or communicate with us by phone or email.
                </p>
                <p>
                  Automatically when you visit our website through cookies,
                  analytics tools, and tracking technologies including Google
                  Analytics 4, Google Tag Manager, and Google Search Console.
                  These tools collect non-identifying usage data to help us
                  understand how visitors use our site and improve our services.
                </p>
                <p>
                  From third parties such as payment processors like Stripe or
                  referral partners, where you have consented to that
                  information being shared.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">
                4. Why we collect your information
              </h2>
              <ul className="space-y-3 text-[17px] leading-[1.8] text-charcoal">
                <li>To respond to your enquiries and provide the services you have requested.</li>
                <li>To process enrolments and payments for our training courses.</li>
                <li>To send you relevant communications, updates, and marketing materials where you have opted in to receive them.</li>
                <li>To improve our website, services, and user experience.</li>
                <li>To comply with our legal and regulatory obligations.</li>
                <li>To protect the security and integrity of our business.</li>
              </ul>
              <p className="text-[17px] leading-[1.8] text-charcoal">
                We will not use your personal information for any purpose that
                is unrelated to the above without your consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">
                5. Marketing communications
              </h2>
              <p className="text-[17px] leading-[1.8] text-charcoal">
                If you have provided us with your email address, we may send you
                information about our services, upcoming courses, and relevant
                resources. You can opt out of marketing communications at any
                time by clicking the unsubscribe link in any email we send, or
                by contacting us directly. We will process your opt-out request
                promptly.
              </p>
              <p className="text-[17px] leading-[1.8] text-charcoal">
                We do not send unsolicited commercial electronic messages in
                breach of the Spam Act 2003 (Cth).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">
                6. Disclosure of your information
              </h2>
              <p className="text-[17px] leading-[1.8] text-charcoal">
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>
              <ul className="space-y-3 text-[17px] leading-[1.8] text-charcoal">
                <li>
                  Service providers, including email marketing platforms such
                  as ActiveCampaign, payment processors such as Stripe, website
                  hosting providers such as Vercel, and analytics tools such as
                  Google.
                </li>
                <li>Professional advisors, including lawyers and accountants, where required.</li>
                <li>Law enforcement or regulatory bodies, where we are required by law to do so.</li>
              </ul>
              <p className="text-[17px] leading-[1.8] text-charcoal">
                Where we disclose your information to overseas recipients, for
                example cloud-based service providers with servers outside
                Australia, we take reasonable steps to ensure those recipients
                handle your information in a manner consistent with the
                Australian Privacy Principles.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">
                7. Data storage and security
              </h2>
              <div className="space-y-4 text-[17px] leading-[1.8] text-charcoal">
                <p>
                  We take reasonable steps to protect your personal information
                  from misuse, interference, loss, and unauthorised access,
                  modification, or disclosure. Our website is hosted on Vercel
                  and all data is transmitted over encrypted HTTPS connections.
                </p>
                <p>
                  While we take all reasonable precautions, no method of
                  transmission over the internet is completely secure. We cannot
                  guarantee the absolute security of information transmitted to
                  or from our website.
                </p>
                <p>
                  We retain your personal information only for as long as it is
                  needed for the purpose for which it was collected, or as
                  required by law. When it is no longer needed, we take
                  reasonable steps to destroy or de-identify it.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">
                8. Cookies and tracking technologies
              </h2>
              <p className="text-[17px] leading-[1.8] text-charcoal">
                Our website uses cookies and similar tracking technologies to
                improve your browsing experience and analyse site traffic.
                Cookies are small text files stored on your device.
              </p>
              <PolicyTable headers={["Type", "Purpose"]} rows={cookieTypes} />
              <p className="text-[17px] leading-[1.8] text-charcoal">
                You can control or disable cookies through your browser
                settings. Disabling certain cookies may affect the functionality
                of our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">
                9. Access and correction
              </h2>
              <div className="space-y-4 text-[17px] leading-[1.8] text-charcoal">
                <p>
                  Under the Privacy Act 1988 (Cth), you have the right to
                  request access to the personal information we hold about you
                  and to request that we correct any information that is
                  inaccurate, out of date, incomplete, or misleading.
                </p>
                <p>
                  To make an access or correction request, please contact us
                  using the details below. We will respond within a reasonable
                  timeframe and in accordance with our obligations under the
                  Australian Privacy Principles. We may need to verify your
                  identity before processing your request.
                </p>
                <p>
                  In some circumstances, we may decline a request for access or
                  correction. If we do so, we will provide written reasons for
                  our decision.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">10. Complaints</h2>
              <div className="space-y-4 text-[17px] leading-[1.8] text-charcoal">
                <p>
                  If you believe we have breached the Australian Privacy
                  Principles or otherwise mishandled your personal information,
                  please contact us first. We will investigate your complaint
                  and respond within 30 days.
                </p>
                <p>
                  If you are not satisfied with our response, you may lodge a
                  complaint with the Office of the Australian Information
                  Commissioner.
                </p>
                <div className="rounded-lg border border-border bg-white p-6">
                  <p className="font-medium text-navy-dark">
                    Office of the Australian Information Commissioner
                  </p>
                  <p className="mt-2">
                    <a
                      href="https://www.oaic.gov.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-teal hover:underline"
                    >
                      www.oaic.gov.au
                    </a>
                  </p>
                  <p className="mt-1 text-charcoal">Phone: 1300 363 992</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">
                11. Changes to this policy
              </h2>
              <p className="text-[17px] leading-[1.8] text-charcoal">
                We may update this privacy policy from time to time to reflect
                changes in our practices or legal obligations. The updated
                policy will be published on this page with a revised last
                updated date. We encourage you to review this policy
                periodically.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-card text-navy-dark">12. Contact us</h2>
              <div className="rounded-lg border border-border bg-white p-6 text-[17px] leading-[1.8] text-charcoal">
                <p className="font-medium text-navy-dark">
                  Crisis Communications Australia, operated by CRC PR Pty Ltd
                </p>
                <p className="mt-2">
                  Website:{" "}
                  <a
                    href={siteConfig.brand.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-teal hover:underline"
                  >
                    {siteConfig.brand.siteUrl}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={siteConfig.phone.href}
                    className="text-brand-teal hover:underline"
                  >
                    {siteConfig.phone.display}
                  </a>
                </p>
              </div>
            </section>

              <section className="rounded-lg border border-border bg-white p-6 text-sm leading-7 text-charcoal-mid">
                This privacy policy is provided as a general guide and does not
                constitute legal advice. Independent legal advice should be
                obtained to ensure the policy meets obligations specific to your
                business circumstances.
              </section>
            </div>
          </section>
        </main>
        <Footer />
      </>
    </LeadMagnetModalProvider>
  );
}
