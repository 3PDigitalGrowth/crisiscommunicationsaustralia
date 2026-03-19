const urgentPathId = "urgent-path";
const preparedPathId = "prepared-path";

export const siteConfig = {
  brand: {
    name: "Crisis Communications Australia",
    logoText: "CRISIS COMMUNICATIONS AUSTRALIA",
    division: "A division of CRC PR",
    siteUrl: "https://crisiscommunications.com.au",
  },
  phone: {
    display: "1300 XXX XXX", // TODO: CLIENT TO PROVIDE
    href: "tel:1300XXXXXX", // TODO: CLIENT TO PROVIDE
    availability: "Available 24 hours, 7 days",
    navLabel: "URGENT SUPPORT: 1300 XXX XXX", // TODO: CLIENT TO PROVIDE
  },
  email: {
    general: "info@crcpr.com.au", // TODO: CLIENT TO PROVIDE
    media: "media@crcpr.com.au", // TODO: CLIENT TO PROVIDE
  },
  address: {
    company: "CRC PR",
    city: "TODO: City",
    state: "TODO: State",
    country: "Australia",
  },
  analytics: {
    ga4MeasurementId: "G-XXXXXXXXXX", // TODO: CLIENT TO PROVIDE
  },
  forms: {
    formspreeEndpoint: "https://formspree.io/f/XXXXXXXX", // TODO: CLIENT TO PROVIDE
    resendFromEmail: "noreply@crisiscommunications.com.au", // TODO: CLIENT TO PROVIDE
    resendContactDestination: "info@crcpr.com.au", // TODO: CLIENT TO PROVIDE
    resendLeadDestination: "media@crcpr.com.au", // TODO: CLIENT TO PROVIDE
  },
  links: {
    lyallMercerUrl: "https://lyallmercer.com",
    lyallLinkedIn: "https://www.linkedin.com/in/lyallmercer/",
    lyallTwitter: "https://twitter.com/Lyall_Mercer",
    crcPrUrl: "https://crcpr.com.au/",
    myPrPartnerUrl: "https://myprpartner.com/",
    masterclassUrl: "https://myprpartner.com/crisis-masterclass", // TODO: CLIENT TO CONFIRM
    privacyPolicyUrl: "#", // TODO: CLIENT TO PROVIDE
    termsUrl: "#", // TODO: CLIENT TO PROVIDE
    disclaimerUrl: "#", // TODO: CLIENT TO PROVIDE
  },
  legal: {
    abn: "XX XXX XXX XXX", // TODO: CLIENT TO PROVIDE
    copyrightYear: "2026",
  },
  assets: {
    lyallMercerImage: "/images/lyall-mercer.png",
    ogImage: "/images/og-image.jpg", // TODO: CLIENT TO PROVIDE
  },
  stats: {
    yearsExperience: "25+",
    professionalsTrained: "500+",
    industriesServed: "15+",
    clientRetention: "100%",
    continentsWorked: "Every",
  },
  mediaOutlets: ["ABC News", "The Australian", "Sky News", "AFR", "ABC Radio"],
  scrollTargets: {
    urgent: urgentPathId,
    prepared: preparedPathId,
  },
  seo: {
    title: "Crisis Communications Australia | Urgent Help & Crisis Training",
    description:
      "Trusted crisis communications advisers across Australia, the Pacific, and internationally. Immediate consulting from CRC PR, or build your team's capabilities with the My PR Partner Crisis Masterclass, backed by 25 years of experience.",
    keywords:
      "crisis communications australia, crisis PR, crisis management, crisis communications training, crisis consultant australia, crisis public relations",
    ogTitle: "Crisis Communications Australia",
    ogDescription: "Urgent crisis response. Expert crisis training. One ecosystem.",
  },
  hero: {
    eyebrow: "A DIVISION OF CRC PR, AUSTRALIA'S LEADING CRISIS & PR ADVISORY FIRM",
    heading: ["Crisis Communications", "Australia"],
    subheading: [
      "The right response, right now.",
      "The right training, before you need it.",
    ],
    urgentCta: "I NEED HELP NOW",
    preparedCta: "I WANT TO BE READY",
    authorityCopy:
      "Backed by 25 years of crisis consulting. Trusted by companies, governments, industry associations, and organisations across Australia, the Pacific, and beyond.",
  },
  authorityBar: {
    label: "LYALL MERCER, AS SEEN IN",
    proof:
      "500+ Professionals Trained  ·  15+ Industries Served",
  },
  problem: {
    heading: ["A crisis doesn't wait", "for business hours."],
    paragraphs: [
      "A data breach discovered at 2 AM. A product recall breaking on a Friday afternoon. A viral social media post that begins as a rumour and ends as a headline. A disgruntled employee. A workplace accident. A regulator on the phone.",
      "Your reputation, built over years, sometimes decades, can unravel in a single news cycle.",
      "The question is never if a crisis will come. The question is whether you will be ready when it does.",
    ],
    prompt: "Which situation describes you right now?",
    links: {
      urgent: "I'm in a crisis right now",
      prepared: "I want to be prepared before it happens",
    },
    crisisClock: {
      label: "THE MOMENT IT HITS",
      scenarios: [
        {
          time: "2:17 AM",
          description: "Data breach detected. Media have been tipped off.",
        },
        {
          time: "Friday 4:45 PM",
          description:
            "Product recall required. Weekend skeleton staff. Board expecting a statement.",
        },
        {
          time: "11:23 AM",
          description:
            "A post goes viral. Your CEO's inbox is full. A journalist is waiting.",
        },
      ],
      quote:
        "\"I don't know who to call. I don't know what to say.\" The most common words we hear.",
    },
  },
  urgentPath: {
    id: urgentPathId,
    label: "FOR IMMEDIATE CRISIS RESPONSE",
    heading: ["You Need Help.", "Right Now."],
    paragraphs: [
      "When a crisis breaks, the first 15 minutes are critical. The decisions made, or not made, in that window will define the outcome.",
      "CRC PR's advisers have been in the room when it matters most. Lyall Mercer and his team have managed crises for companies, governments, industry associations, schools, faith-based organisations, legal firms, celebrities, and sporting figures across Australia, the Pacific, and internationally.",
      "We will manage the media. Protect your reputation. Guide every decision. And we do it with absolute confidentiality.",
    ],
    trustSignals: [
      { icon: "clock", label: "24/7 Availability" },
      { icon: "lock", label: "100% Confidential" },
      { icon: "phone", label: "Immediate Response" },
    ],
    phoneLabel: "Call us now:",
    formHeading: "Send a confidential message",
    formFields: {
      name: "Full Name",
      organisation: "Organisation",
      phone: "Phone Number",
      message: "Nature of Situation",
      messagePlaceholder: "Brief description, this is confidential",
      submitLabel: "GET HELP NOW →",
      successMessage:
        "Thank you, your message is confidential. We will be in touch shortly.",
      errorMessage:
        "Please complete every field so we can respond quickly and confidentially.",
    },
    footer:
      "A division of CRC PR, trusted crisis advisory across Australia, the Pacific, and internationally for over 25 years.",
  },
  preparedPath: {
    id: preparedPathId,
    label: "FOR PROACTIVE CRISIS PREPARATION",
    heading: ["Be Ready Before", "The Crisis Hits."],
    paragraphs: [
      "Most Australian businesses are one incident away from a reputational crisis they are not equipped to handle.",
      "The My PR Partner Crisis Masterclass gives comms leads, HR managers, SME owners, and executive teams the practical skills to prepare for, manage, and recover from any crisis, taught by the firm that has handled crises across Australia and internationally for over 25 years.",
      "This is not theory. This is war-room methodology, made accessible.",
    ],
    highlights: [
      "12-month curriculum built on 25 years of real crisis & PR experience",
      "Australian context, local law, media landscape, and case studies",
      "Cancel anytime, from $340/month per person",
    ],
    badge: "Powered by CRC PR",
    primaryCta: "VIEW THE MASTERCLASS →",
    secondaryPrefix: "Not ready to commit?",
    secondaryLink: "Download our free Crisis Readiness Checklist →",
    footer:
      "Backed by 25 years of real crisis advisory work across Australia, the Pacific, and internationally.",
  },
  leadMagnet: {
    eyebrow: "FREE DOWNLOAD",
    heading: ["The Crisis Readiness", "Checklist"],
    paragraphs: [
      "Used by Australian communications teams, HR managers, and executive leaders. 27 questions to assess your organisation's real crisis readiness, with an action plan for every gap.",
      "Prepared by CRC PR. Delivered instantly.",
    ],
    formFields: {
      firstName: "First Name",
      email: "Work Email",
      organisation: "Organisation",
      submitLabel: "SEND ME THE CHECKLIST →",
      successMessage: "Check your inbox, your checklist is on its way.",
      errorMessage:
        "Please complete all fields so we can send the checklist to the right person.",
    },
    legal:
      "No spam. Unsubscribe anytime. By submitting you agree to our Privacy Policy.",
    trustSignal:
      "Powered by CRC PR, Australia's Crisis Communications Experts",
  },
  lyall: {
    eyebrow: "GUIDED BY EXPERIENCE",
    heading: ["The Adviser", "Behind Both Paths."],
    paragraphs: [
      "Lyall Mercer began his career as a journalist, writing for some of Australia's leading newspapers. That foundation, understanding exactly how media thinks, moves, and decides what becomes a story, is what makes his approach to crisis communications unlike any other.",
      "Over the past 25 years, Lyall has built a reputation across Australasia as a leader in corporate public relations, reputation and issues management, and crisis communications. His clients include national and international companies, governments, senior executives, politicians, celebrities, and sporting figures, and he has worked with clients and media on every continent.",
      "He has guided organisations through royal commissions, high-profile legal cases, serious allegations, political controversies, industrial relations crises, and social media firestorms. He has coordinated international media conferences and trained corporate and non-profit leaders across Australia, the USA, and Canada.",
      "His commentary on crisis and reputation has appeared on ABC News, Sky News, The Australian, the AFR, and ABC Radio.",
      "The Crisis Masterclass and the advisory practice behind this page are both built on one body of methodology, Lyall's.",
    ],
    quote:
      "\"You have 15 minutes to respond to an emerging crisis before you start to lose control of the message.\"",
    attribution: "Lyall Mercer",
    urgentLink: "→ Work with Lyall directly via CRC PR",
    preparedLink: "→ Learn from Lyall in the Crisis Masterclass",
    placeholderInitials: "LM",
    imageAlt:
      "Lyall Mercer, founder of CRC PR, Australasia's leading crisis communications adviser and former journalist",
    statLabels: [
      { value: "25+", label: "YEARS EXPERIENCE" },
      { value: "500+", label: "PROFESSIONALS TRAINED" },
      { value: "EVERY", label: "CONTINENT WORKED" },
    ],
  },
  testimonials: {
    cards: [
      {
        accent: "gold",
        quote:
          "\"When the call came at midnight, CRC PR answered. Lyall and the team were calm, strategic, and completely in control. Their advice was flawless. We came through without a single enrolment loss.\"",
        name: "[Name withheld at client request]",
        role: "Head of Operations, Private Education Group",
      },
      {
        accent: "teal",
        quote:
          "\"The Crisis Masterclass is the most practical professional development our communications team has done. Not theory, real tools, real scenarios, real outcomes. We are a different team because of it.\"",
        name: "Communications Manager",
        role: "ASX-Listed Resources Company",
      },
      {
        accent: "gold",
        quote:
          "\"We had no crisis plan. No spokesperson training. No idea what to do. The Masterclass changed all of that in 90 days. I recommend it to every comms professional in Australia.\"",
        name: "HR Director",
        role: "National Industry Association",
      },
    ],
    footer:
      "\"100% of our consulting clients would recommend CRC PR to a peer.\" CRC PR Client Survey",
  },
  differentiation: {
    eyebrow: "THE CRISIS COMMS AUSTRALIA DIFFERENCE",
    heading: ["Not a course. Not a retainer.", "The only ecosystem of its kind."],
    cards: [
      {
        icon: "building",
        title: "25 Years of Real Cases",
        body:
          "Not US content. Not academic theory. Australian crises, international media, real legal and regulatory pressure, taught by the practitioner who was actually there. Lyall began his career as a journalist, which means he understands the media from the inside out.",
      },
      {
        icon: "users",
        title: "Two Paths. One Ecosystem.",
        body:
          "Whether you need a consultant on the phone at 2 AM or a 12-month curriculum for your team, this is the only place in Australia where both options exist under one roof, and are connected by a single 25-year body of methodology.",
      },
      {
        icon: "dollar",
        title: "Accessible Without Being Cheap",
        body:
          "Boutique consultancies charge $5K–$20K/month. Generic courses charge $20. The Crisis Masterclass at $340/month gives you practitioner-grade content without the retainer.",
      },
      {
        icon: "globe",
        title: "Every Sector. Every Continent.",
        body:
          "From ASX companies and government departments to schools, faith-based organisations, sporting bodies, and Pacific governments, CRC PR has advised clients across every sector and worked with media on every continent.",
      },
    ],
  },
  finalCta: {
    eyebrow: "THE DECISION",
    heading: "Choose Your Path.",
    body:
      "There is no wrong answer. Only the answer you choose before a crisis strikes, or the one you're forced to make when it already has.",
    urgentLabel: "I NEED URGENT HELP",
    preparedLabel: "I WANT TO GET PREPARED",
    leadPrefix: "Not ready to decide?",
    leadLink: "Start with our free Crisis Readiness Checklist",
  },
  footer: {
    ecosystemLabel: "OUR ECOSYSTEM",
    quickActionsLabel: "QUICK ACTIONS",
    contactLabel: "CONTACT",
    ecosystemLinks: [
      {
        label: "CRC PR, Corporate & Crisis Advisory",
        href: "https://crcpr.com.au/",
      },
      {
        label: "My PR Partner, Crisis Masterclass",
        href: "https://myprpartner.com/",
      },
      {
        label: "Lyall Mercer, Adviser & Commentator",
        href: "https://lyallmercer.com",
      },
    ],
    quickActions: {
      urgent: "Get Urgent Crisis Help",
      leadMagnet: "Download Crisis Readiness Checklist",
      masterclass: "View the Crisis Masterclass",
    },
    description:
      "A division of CRC PR, trusted crisis and corporate communications advisory across Australia, the Pacific, and internationally.",
    mediaEnquiriesPrefix: "For media enquiries:",
    copyright:
      "© 2026 CRC PR Pty Ltd. All rights reserved. ABN: XX XXX XXX XXX",
  },
} as const;

export type SiteConfig = typeof siteConfig;
