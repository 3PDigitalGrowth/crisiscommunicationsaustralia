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
    display: "1300 182 186",
    href: "tel:1300182186",
    availability: "Available 24 hours, 7 days",
    responseCommitment: "We answer. If unavailable, we call back within the hour.",
    navLabel: "URGENT SUPPORT: 1300 182 186",
  },
  email: {
    general: "info@crcpr.com.au",
    media: "media@crcpr.com.au",
  },
  address: {
    company: "CRC PR",
    street: "320 Adelaide Street",
    city: "Brisbane",
    state: "QLD",
    postcode: "4000",
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
    crcPrUrl: "https://crcpr.com.au",
    crcPrServicesUrl: "https://crcpr.com.au/services/",
    crcPrPacificUrl: "https://crcpr.com.au/pacific/",
    myPrPartnerUrl: "https://myprpartner.com",
    masterclassUrl: "https://myprpartner.com/crisis-masterclass/",
    masterclassEnrolUrl: "https://myprpartner.com/product/crisis-masterclass/",
    privacyPolicyUrl: "https://myprpartner.com/privacy-policy/",
    termsUrl: "https://myprpartner.com/terms-and-conditions/",
    disclaimerUrl: "#", // TODO: CLIENT TO PROVIDE
  },
  legal: {
    abn: "",
    copyrightYear: "2026",
  },
  assets: {
    lyallMercerImage: "/images/lyall-mercer.jpg",
    ogImage: "/images/og-image.jpg", // TODO: CLIENT TO PROVIDE
  },
  stats: {
    yearsExperience: "25+",
    professionalsTrained: "500+",
    industriesServed: "15+",
    clientRetention: "100%",
    continentsWorked: "Every",
  },
  masterclass: {
    price: "$340",
    billing: "per month",
    commitment: "annual subscription",
    trialDays: "10",
    trialCopy: "Full access. No charge for 10 days.",
  },
  crisisReadyInstitute: {
    name: "Crisis Ready Institute USA",
    instructorName: "Melissa Agnes",
    instructorTitle: "Founder, Crisis Ready Institute USA",
    courseName: "Crisis Ready®",
    credentials:
      "Author of Crisis Ready: Building an Invincible Brand in an Uncertain World. Trained NATO, the Pentagon, and organisations on every continent. Crisis Ready® Model taught at Harvard University.",
  },
  coFounderName: "Barbara Gorogh",
  mediaOutlets: ["ABC News", "The Australian", "Sky News", "AFR", "ABC Radio"],
  mediaLinks: [
    {
      name: "ABC News",
      href: "https://lyallmercer.com",
    },
    {
      name: "The Australian",
      href: "https://lyallmercer.com",
    },
    {
      name: "Sky News",
      href: "https://lyallmercer.com",
    },
    {
      name: "AFR",
      href: "https://lyallmercer.com",
    },
    {
      name: "ABC Radio",
      href: "https://lyallmercer.com",
    },
  ],
  scrollTargets: {
    urgent: urgentPathId,
    prepared: preparedPathId,
  },
  seo: {
    title: "Crisis Communications Australia | Crisis PR Consultants & Training",
    description:
      "Australia's leading crisis communications and crisis PR consultants. Immediate 24/7 crisis management support from CRC PR - call 1300 182 186 - or build your team's skills with the My PR Partner Crisis Masterclass, featuring the exclusive Crisis Ready® course by Melissa Agnes.",
    keywords:
      "crisis communications australia, crisis PR, crisis management, crisis communications training, crisis consultant australia, crisis public relations",
    ogTitle: "Crisis Communications Australia",
    ogDescription:
      "Australia's leading crisis communications and crisis PR consultants, with urgent crisis management support and expert training.",
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
  },
  problem: {
    heading: ["A crisis doesn't wait", "for business hours."],
    paragraphs: [
      "A data breach discovered at 2 AM. A product recall breaking on a Friday afternoon. A viral social media post that begins as a rumour and ends as a headline. A disgruntled employee. A workplace accident. A regulator on the phone.",
      "Your reputation, built over years, sometimes decades, can unravel in a single news cycle.",
      "The question is never if a crisis will come. The question is whether you will be ready when it does.",
    ],
    managementHeading:
      "Australia's most trusted crisis management and communications team.",
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
    servicesCopy:
      "CRC PR also provides media strategy, issues management, reputation advisory, corporate communications, digital media, and media training.",
    servicesLinkLabel: "View full services at crcpr.com.au →",
    phoneLabel: "Call us now:",
    formHeading: "Send a confidential message",
    formFields: {
      name: "Full Name",
      organisation: "Organisation",
      phone: "Phone Number",
      message: "Nature of Situation",
      messagePlaceholder: "Brief description - optional. We will call you to discuss.",
      submitLabel: "GET HELP NOW →",
      successMessage: "Message received.",
      errorMessage:
        "Please enter your name and phone number so we can call you quickly and confidentially.",
    },
    successState: {
      heading: "Message received.",
      body:
        "A CRC PR adviser will call you within the hour. If your situation is immediately urgent, call us directly now.",
      ctaLabel: "CALL 1300 182 186",
    },
    confidentialityNote:
      "Everything shared with CRC PR is treated with strict confidentiality. We do not reference client engagements without explicit written permission. Our advisers operate with the same professional discretion as legal counsel.",
    footer:
      "A division of CRC PR, trusted crisis advisory across Australia, the Pacific, and internationally for over 25 years.",
  },
  preparedPath: {
    id: preparedPathId,
    label: "FOR PROACTIVE CRISIS PREPARATION",
    heading: ["Be Ready Before", "The Crisis Hits."],
    paragraphs: [
      "Most Australian businesses are one incident away from a reputational crisis they are not equipped to handle.",
      "The My PR Partner Crisis Masterclass gives comms leads, HR managers, school principals, SME owners, executive teams, and industry association staff the practical skills to prepare for, manage, and recover from any crisis, taught by the firm that has handled crises across Australia and internationally for over 25 years.",
      "This is not theory. This is war-room methodology, made accessible.",
    ],
    highlights: [
      "Exclusive Crisis Ready® 12-month course - presented by Melissa Agnes, Crisis Ready Institute USA",
      "Australian context, local law, media landscape, and real case studies",
      "From $340/month - paid as an annual subscription. Try free for 10 days.",
    ],
    melissaLabel: "In partnership with",
    melissaHeading: "Crisis Ready® Institute USA",
    melissaBody:
      "The Crisis Ready® 12-month course is presented exclusively for Australasia by Melissa Agnes - global authority on crisis leadership, whose model is taught at Harvard University and has been used to train NATO, the Pentagon, and organisations on every continent.",
    badge: "Powered by CRC PR",
    primaryCta: "START FREE FOR 10 DAYS →",
    primaryCtaSubtext:
      "Full access. No charge for 10 days. Annual subscription from $340/month thereafter.",
    secondaryPrefix: "Not ready to commit?",
    secondaryLink: "Download our free Crisis Readiness Checklist →",
    footer:
      "Founded by Lyall Mercer and Barbara Gorogh. Backed by 25 years of real crisis advisory work across Australia, the Pacific, and internationally.",
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
  caseStudies: {
    eyebrow: "Proven outcomes",
    heading: ["We have been in the room", "when it mattered most."],
    body: "Client identities are protected. Outcomes are real.",
    confidentialityNote:
      "All client details are withheld at client request. CRC PR does not reference engagements without explicit written permission.",
    cards: [
      {
        context: "National Industry Association",
        challenge: "Regulatory threat",
        description:
          "Guided the board through a six-month public advocacy campaign during a period of acute regulatory pressure. Media strategy, stakeholder communications, and government relations coordinated simultaneously.",
        outcomeBadge: "Legislation Amended",
      },
      {
        context: "Private Education Group",
        challenge: "Reputation crisis",
        description:
          "Managed the complete media response and parent communications strategy during a high-profile reputational incident. Containment achieved within 72 hours. No adverse coverage sustained.",
        outcomeBadge: "Zero Enrolment Loss",
      },
      {
        context: "Pacific Government",
        challenge: "International relations",
        description:
          "Strategic counsel on stakeholder engagement and cross-cultural communications during a sensitive international negotiation. Communications strategy aligned across multiple government departments.",
        outcomeBadge: "Funding Secured",
      },
    ],
  },
  testimonials: {
    cards: [
      {
        accent: "gold",
        quote:
          "CRC Public Relations has developed a crisis communications plan for Christian schools and has assisted many of our member schools across Australia to effectively communicate when issues have arisen.",
        name: "Vanessa Cheng",
        role: "Executive Officer",
        company: "Australian Association of Christian Schools",
      },
      {
        accent: "teal",
        quote:
          "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
        name: "Peter White AM",
        role: "Managing Director",
        company: "Finance Brokers Association of Australia",
      },
      {
        accent: "gold",
        quote:
          "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
        name: "Hamish Watson",
        role: "Director",
        company: "Cafe 63",
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
          "Not US content. Not academic theory. Australian crises, international media, real legal and regulatory pressure - taught by the practitioner who was actually there. Lyall began his career as a journalist, giving him an understanding of media that no course can replicate.",
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
          "Boutique consultancies charge $5K-$20K/month. Generic courses charge $20. The Crisis Masterclass at $340/month - annual subscription, free for 10 days - gives you practitioner-grade content and a global curriculum without the retainer.",
      },
      {
        icon: "globe",
        title: "Every Sector. Every Continent.",
        body:
          "From ASX companies and government departments to schools, faith-based organisations, sporting bodies, and Pacific governments across Cook Islands, Fiji, Papua New Guinea, Samoa, Tonga, Vanuatu, and beyond - CRC PR has advised clients across every sector and worked with media on every continent.",
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
  faqs: {
    eyebrow: "Common questions",
    heading: "Frequently asked questions.",
    items: [
      {
        question: "What is crisis communications?",
        answer:
          "Crisis communications is the strategic management of information, messaging, and media relations when an organisation faces a situation that threatens its reputation, operations, or stakeholder relationships. It covers everything from data breaches and product recalls to industrial disputes, legal proceedings, and social media incidents. Effective crisis communications protects reputation, maintains stakeholder trust, and minimises long-term damage to an organisation.",
        schemaAnswer:
          "Crisis communications is the strategic management of information, messaging, and media relations when an organisation faces a situation that threatens its reputation, operations, or stakeholder relationships. It covers everything from data breaches and product recalls to industrial disputes, legal proceedings, and social media incidents.",
      },
      {
        question: "What does a crisis communications consultant do?",
        answer:
          "A crisis communications consultant advises organisations before, during, and after a crisis. Before a crisis, they assess vulnerabilities, build crisis communications plans, and run training and simulation exercises. During a crisis, they coordinate the media response, manage messaging across all stakeholder groups, advise spokespeople, and guide executive decision-making in real time. After a crisis, they manage reputation recovery and analyse what can be improved for next time.",
        schemaAnswer:
          "A crisis communications consultant advises organisations before, during, and after a crisis. Before a crisis, they assess vulnerabilities, build crisis communications plans, and run training and simulation exercises. During a crisis, they coordinate the media response, manage messaging, advise spokespeople, and guide executive decision-making in real time.",
      },
      {
        question: "How quickly should an organisation respond to a crisis?",
        answer:
          "The first 15 minutes after a crisis breaks are critical. Organisations that fail to respond within this window begin to lose control of the narrative, often permanently. A prepared organisation with a crisis communications plan and trained spokespeople can respond rapidly, calmly, and effectively. An unprepared organisation typically responds too slowly, says the wrong things, or says nothing at all, each of which makes the situation worse.",
        schemaAnswer:
          "The first 15 minutes after a crisis breaks are critical. Organisations that fail to respond within this window begin to lose control of the narrative. A prepared organisation with a crisis communications plan and trained spokespeople can respond rapidly, calmly, and effectively.",
      },
      {
        question: "How much does crisis PR and crisis communications advice cost in Australia?",
        answer:
          "The cost of crisis communications support in Australia varies significantly depending on the scale and duration of the situation. Boutique crisis PR firms typically charge between $5,000 and $20,000 per month for ongoing retainer arrangements. For specific crisis incidents, project-based engagements are common. CRC PR provides confidential consultations to discuss the right approach for your situation - contact us directly on 1300 182 186.",
        schemaAnswer:
          "Boutique crisis PR firms typically charge between $5,000 and $20,000 per month for ongoing retainer arrangements. CRC PR provides confidential consultations to discuss the right approach for your situation - contact us directly on 1300 182 186.",
      },
      {
        question: "What is the difference between crisis communications and issues management?",
        answer:
          "Issues management is proactive - it involves identifying potential problems before they escalate and developing strategies to address them. Crisis communications is reactive - it kicks in when an issue has already broken publicly and requires immediate response. The best outcomes occur when organisations invest in issues management so that crises are either prevented entirely or managed from a position of preparation rather than panic.",
        schemaAnswer:
          "Issues management is proactive - it involves identifying potential problems before they escalate. Crisis communications is reactive - it kicks in when an issue has already broken publicly and requires immediate response.",
      },
      {
        question: "What is the My PR Partner Crisis Masterclass?",
        answer:
          "The My PR Partner Crisis Masterclass is a 12-month online training program that gives communications professionals, HR managers, school leaders, SME owners, and executive teams the practical skills to prepare for, manage, and recover from any reputational crisis. It features the exclusive Crisis Ready® course presented by Melissa Agnes of the Crisis Ready Institute USA, quarterly live webinars, monthly Q&A sessions, and fortnightly training resources from Lyall Mercer. The program is backed by CRC PR's 25 years of frontline crisis consulting experience and is available exclusively in Australasia through My PR Partner.",
        schemaAnswer:
          "The My PR Partner Crisis Masterclass is a 12-month online training program featuring the exclusive Crisis Ready® course by Melissa Agnes of the Crisis Ready Institute USA, backed by CRC PR's 25 years of frontline crisis consulting experience. Available exclusively in Australasia.",
      },
      {
        question: "Does CRC PR work with organisations outside Australia?",
        answer:
          "Yes. CRC PR has worked with clients and media on every continent. The firm has particular depth of experience across the Pacific region, having advised governments and organisations across Cook Islands, Fiji, Papua New Guinea, Samoa, Tonga, Vanuatu, and New Zealand. Lyall Mercer and the CRC PR team are available by phone or video link anywhere in the world, anytime.",
        schemaAnswer:
          "Yes. CRC PR has worked with clients and media on every continent, with particular experience across the Pacific region including Cook Islands, Fiji, Papua New Guinea, Samoa, Tonga, Vanuatu, and New Zealand.",
      },
    ],
  },
  footer: {
    ecosystemLabel: "OUR ECOSYSTEM",
    quickActionsLabel: "QUICK ACTIONS",
    contactLabel: "CONTACT",
    ecosystemLinks: [
      {
        label: "CRC PR, Corporate & Crisis Advisory",
        href: "https://crcpr.com.au",
      },
      {
        label: "My PR Partner - Crisis Masterclass",
        href: "https://myprpartner.com",
        note: "Founded by Lyall Mercer & Barbara Gorogh",
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
      "A division of CRC PR - trusted crisis and corporate communications advisory across Australia, the Pacific, and internationally.",
    mediaEnquiriesPrefix: "For media enquiries:",
  },
  crisisPreventionCallout: {
    eyebrow: "A third option",
    heading: "Not in crisis. Not sure you're ready.",
    body:
      "Most crises are preventable. CRC PR's Crisis Prevention Consultancy and Vulnerability Assessment identifies where your organisation is exposed - before the media call comes. It's a confidential, practical review of your real risk areas, conducted by Australia's most experienced crisis advisors.",
    cta: "Learn about Crisis Prevention Consultancy at CRC PR →",
  },
  annualSummit: {
    eyebrow: "Annual event",
    heading: ["Crisis Communications", "Australia Annual Summit"],
    body:
      "The premier crisis communications event in the Oceania region. Masterclass members attend free.",
    cta: "JOIN AS A MASTERCLASS MEMBER →",
    trialNote: "Free trial for 10 days - no commitment",
  },
} as const;

export type SiteConfig = typeof siteConfig;
