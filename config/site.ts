const urgentPathId = "urgent-path";
const readinessPathId = "readiness-path";
const masterclassPathId = "masterclass-path";

export const siteConfig = {
  brand: {
    name: "Crisis Communications Australia",
    logoText: "CRISIS COMMUNICATIONS AUSTRALIA",
    division: "A division of CRC Public Relations",
    siteUrl: "https://crisiscommunications.com.au",
  },
  phone: {
    display: "1300 182 186",
    href: "tel:1300182186",
    availability: "Urgent crisis and issue support by phone",
    responseCommitment:
      "If we miss your call, we will return it as soon as possible.",
    navLabel: "URGENT SUPPORT: 1300 182 186",
  },
  email: {
    general: "info@crcpr.com.au",
    media: "media@crcpr.com.au",
  },
  address: {
    company: "CRC Public Relations",
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
    crcPrCrisisUrl: "https://crcpr.com.au/crisis",
    crcPrContactUrl: "https://crcpr.com.au/contact/",
    crcPrPacificUrl: "https://crcpr.com.au/pacific/",
    myPrPartnerUrl: "https://myprpartner.com",
    masterclassUrl: "https://myprpartner.com/crisis-masterclass/",
    masterclassEnrolUrl: "https://myprpartner.com/product/crisis-masterclass/",
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
    professionalsTrained: "2,000+",
    industriesServed: "15+",
    clientRetention: "100%",
    continentsWorked: "Every",
  },
  masterclass: {
    price: "$340",
    billing: "per month",
    commitment: "monthly investment or annual payment",
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
  mediaOutlets: [
    "ABC",
    "New York Times",
    "Sky Business",
    "4BC",
    "The Australian",
    "Daily Mail",
    "Associated Press",
    "Australian Associated Press",
    "Fox News",
    "CBS News USA",
    "Daily Telegraph",
  ],
  scrollTargets: {
    urgent: urgentPathId,
    readiness: readinessPathId,
    masterclass: masterclassPathId,
  },
  seo: {
    title:
      "Crisis Communications Australia | Crisis & Issues Management, Planning & Training",
    description:
      "Australia's leading crisis communications and issues management consultants. Urgent crisis response from CRC Public Relations, crisis readiness planning and preparation, and professional development through the My PR Partner Crisis Masterclass.",
    keywords:
      "crisis communications australia, crisis PR, crisis management, issues management, crisis communications planning, crisis consultant australia, crisis public relations, crisis readiness",
    ogTitle: "Crisis Communications Australia",
    ogDescription:
      "Australia's leading crisis communications and issues management consultants. Urgent response, crisis readiness planning, and professional development training.",
  },
  hero: {
    eyebrow:
      "A DIVISION OF CRC PUBLIC RELATIONS, AUSTRALIA'S LEADING CRISIS & PR ADVISORY FIRM",
    heading: ["Crisis Communications", "Australia"],
    subheading: [
      "The right response, right now.",
      "The right preparation, before you need it.",
      "The right skills, for when it matters most.",
    ],
    urgentCta: "I NEED HELP NOW",
    readinessCta: "I WANT TO BE PREPARED",
    masterclassCta: "DEVELOP MY SKILLS",
    authorityCopy:
      "Backed by more than 20 years of crisis and issues management consulting. Trusted by companies, governments, industry associations, and organisations across Australia, the Pacific, and beyond.",
  },
  authorityBar: {
    label: "LYALL MERCER, AS SEEN IN",
  },
  problem: {
    heading: ["A crisis or major issue doesn't", "wait for business hours."],
    paragraphs: [
      "A data breach discovered at 2 AM. A product recall breaking on a Friday afternoon. A viral social media post that begins as a rumour and ends as a headline. A disgruntled employee. A workplace accident. A regulator on the phone.",
      "Not every challenging situation is a full-blown crisis, but even an issue can create serious reputational damage if it is not handled correctly. One of the first things we do is define whether you are facing an issue or a crisis, and then act accordingly.",
      "Your reputation, built over years, sometimes decades, can unravel in a single news cycle. The question is never if a crisis or major issue will come. The question is whether you will be ready when it does.",
    ],
    managementHeading:
      "Australia's most trusted crisis management, issues management, and communications team.",
    prompt: "Which situation describes you right now?",
    links: {
      urgent: "I'm in a crisis right now",
      readiness: "I want to be prepared before it happens",
      masterclass: "I want to develop crisis leadership skills",
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
    label: "FOR IMMEDIATE CRISIS & ISSUE RESPONSE",
    heading: ["You need help.", "Right now."],
    paragraphs: [
      "When a crisis or major issue breaks, the first 15 minutes are critical. The decisions made, or not made, in that window will define the outcome.",
      "CRC Public Relations advisers have been in the room when it matters most. Lyall Mercer and his team have managed crises and complex issues for companies, governments, industry associations, schools, faith-based organisations, legal firms, celebrities, and sporting figures across Australia, the Pacific, and internationally.",
      "We will manage the media and communications to key stakeholders. Protect your reputation. Guide every decision. And we do it with absolute confidentiality.",
    ],
    trustSignals: [
      { icon: "clock", label: "Urgent Support" },
      { icon: "lock", label: "Strict Confidentiality" },
      { icon: "phone", label: "Experienced Guidance" },
    ],
    servicesCopy:
      "CRC Public Relations also provides media strategy, issues management, reputation advisory, corporate communications, digital media, and media training.",
    servicesLinkLabel: "View full services at crcpr.com.au →",
    phoneLabel: "Call us:",
    formHeading: "Send a confidential message",
    formFields: {
      name: "Full Name",
      organisation: "Organisation",
      phone: "Phone Number",
      message: "Nature of Situation",
      messagePlaceholder:
        "Brief description - optional. We will call you to discuss.",
      submitLabel: "GET HELP NOW →",
      successMessage: "Message received.",
      errorMessage:
        "Please enter your name and phone number so we can call you quickly and confidentially.",
    },
    successState: {
      heading: "Message received.",
      body:
        "A CRC Public Relations adviser will return your call as soon as possible. If your situation is urgent, call us directly now.",
      ctaLabel: "CALL 1300 182 186",
    },
    confidentialityNote:
      "Everything shared with CRC Public Relations is treated with strict confidentiality. We do not reference client engagements without explicit written permission. Our advisors operate with exceptional and professional discretion.",
    footer:
      "A division of CRC Public Relations, trusted crisis and issues advisory across Australia, the Pacific, and internationally for more than 20 years.",
  },
  readinessPath: {
    id: readinessPathId,
    label: "FOR CRISIS READINESS & PREPARATION",
    heading: ["Be ready before", "it happens."],
    paragraphs: [
      "Most crises and major issues are preventable, or at least containable, when you have the right plan in place. CRC Public Relations helps organisations prepare before the call comes.",
      "We develop practical, workable crisis communications plans. We provide crisis prevention consultancy and vulnerability assessments to identify where your organisation is exposed. And we conduct crisis scenario exercises so your team knows exactly what to do when it matters.",
    ],
    services: [
      {
        title: "Crisis Communications Plans",
        description:
          "Practical, workable plans that ensure you and your team are ready when faced with an issue or crisis that could damage your reputation, revenue, and future viability.",
      },
      {
        title: "Crisis Prevention Consultancy",
        description:
          "We assess the risks to your reputation, identify vulnerabilities, and help you communicate your actions to stakeholders, building trust in your brand before a crisis ever arrives.",
      },
      {
        title: "Crisis Scenario Exercises",
        description:
          "Realistic scenario-based exercises that test your team's readiness and decision-making under pressure, so you are not learning on the job when it counts.",
      },
      {
        title: "Issues & Vulnerability Assessment",
        description:
          "A confidential review of your real risk areas, conducted by Australia's most experienced crisis and issues management advisers.",
      },
    ],
    primaryCta: "DISCUSS YOUR READINESS →",
    primaryCtaSubtext:
      "Confidential. No obligation. We will assess your situation and recommend the right approach.",
    footer:
      "Delivered by CRC Public Relations, with more than 20 years of frontline crisis and issues management experience.",
  },
  preparedPath: {
    id: masterclassPathId,
    label: "FOR PERSONAL & TEAM CRISIS LEADERSHIP",
    heading: ["Develop crisis", "leadership skills."],
    paragraphs: [
      "Whether you are a communications professional, business leader, executive team member, school principal, or a HR or marketing manager, the ability to lead through a crisis or major issue is a career-defining skill.",
      "The My PR Partner Crisis Masterclass gives you and your team the practical skills to prepare for, manage, and recover from any reputational crisis or issue, with expert guidance shaped by frontline Australian experience.",
      "This is not theory. This is war-room methodology, made accessible.",
    ],
    highlights: [
      "Exclusive Crisis Ready® 12-month course - presented by Melissa Agnes, Crisis Ready Institute USA",
      "Australian context, local law, media landscape, and real case studies",
      "From $340/month, with the option to pay monthly or annually.",
    ],
    melissaLabel: "In partnership with",
    melissaHeading: "Crisis Ready® Institute USA",
    melissaBody:
      "The Crisis Ready® 12-month course is presented exclusively for Australasia by Melissa Agnes - global authority on crisis leadership, whose model is taught at Harvard University and has been used to train NATO, the Pentagon, and organisations on every continent.",
    badge: "Powered by CRC Public Relations",
    primaryCta: "VIEW MASTERCLASS OPTIONS →",
    primaryCtaSubtext:
      "Monthly investment from $340, with annual payment options available.",
    secondaryPrefix: "Not ready to commit?",
    secondaryLink: "Download our free Crisis Readiness Checklist →",
    footer:
      "Founded by Lyall Mercer and Barbara Gorogh. Backed by more than 20 years of real crisis advisory work across Australia, the Pacific, and internationally.",
  },
  leadMagnet: {
    eyebrow: "FREE DOWNLOAD",
    heading: ["The Crisis Readiness", "Checklist"],
    paragraphs: [
      "Used by Australian communications teams, HR managers, and executive leaders. 27 questions to assess your organisation's real crisis readiness, with an action plan for every gap.",
      "Prepared by CRC Public Relations. Delivered instantly.",
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
    trustSignal:
      "Powered by CRC Public Relations, Australia's Crisis Communications Experts",
  },
  lyall: {
    eyebrow: "GUIDED BY EXPERIENCE",
    heading: ["Experienced counsel", "when it matters most."],
    paragraphs: [
      "Lyall Mercer began his career as a journalist, writing for some of Australia's leading newspapers. That foundation, understanding exactly how media thinks, moves, and decides what becomes a story, is what makes his approach to crisis communications unlike any other.",
      "Over the past 25 years, Lyall has built a reputation across Australasia as a leader in corporate public relations, reputation and issues management, and crisis communications. His clients include national and international companies, governments, senior executives, politicians, celebrities, and sporting figures, and he has worked with clients and media on every continent.",
      "He has guided organisations through royal commissions, high-profile legal cases, serious allegations, political controversies, industrial relations crises, and social media firestorms. He has coordinated international media conferences and trained corporate and non-profit leaders across Australia, the USA, and Canada.",
      "His commentary on crisis and reputation has appeared on ABC, Sky Business, The Australian, Daily Mail, Associated Press, Australian Associated Press, Fox News, CBS News USA, 4BC, the Daily Telegraph, and the New York Times.",
    ],
    quote:
      "\"You have 15 minutes to respond to an emerging crisis before you start to lose control of the message.\"",
    attribution: "Lyall Mercer",
    urgentLink: "WORK WITH LYALL DIRECTLY →",
    readinessLink: "PREPARE YOUR ORGANISATION →",
    masterclassLink: "EXPLORE THE MASTERCLASS →",
    placeholderInitials: "LM",
    imageAlt:
      "Lyall Mercer, founder of CRC Public Relations and crisis communications adviser",
    statLabels: [
      { value: "25+", label: "YEARS EXPERIENCE" },
      { value: "2,000+", label: "PROFESSIONALS TRAINED" },
      { value: "EVERY", label: "CONTINENT WORKED" },
    ],
  },
  caseStudies: {
    eyebrow: "Proven outcomes",
    heading: ["We have been in the room", "when it mattered most."],
    body: "Client identities are protected. Outcomes are real.",
    confidentialityNote:
      "All client details are withheld at client request. CRC Public Relations does not reference engagements without explicit written permission.",
    cards: [
      {
        context: "National Industry Association",
        challenge: "Regulatory threat",
        description:
          "Developed and coordinated an intense public advocacy campaign during a period of acute regulatory pressure that threatened the entire industry. Media strategy and stakeholder communications supported the client's government relations.",
        outcomeBadge: "Legislation Amended",
      },
      {
        context: "Private Education Group",
        challenge: "Reputation crisis",
        description:
          "Managed the complete media response and parent and staff communications strategy during a high-profile reputational incident. Containment achieved. Minimal adverse coverage sustained.",
        outcomeBadge: "Zero Enrolment Loss",
      },
      {
        context: "Government",
        challenge: "International relations",
        description:
          "Strategic counsel on stakeholder and media engagement during a sensitive international issue. Communications strategy aligned across multiple governments and countries.",
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
        name: "National Education Association",
        role: "",
        company: "",
      },
      {
        accent: "teal",
        quote:
          "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
        name: "Peter W.",
        role: "Managing Director",
        company: "National Industry Association",
      },
      {
        accent: "gold",
        quote:
          "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
        name: "Hamish W.",
        role: "Director",
        company: "National Restaurant Group",
      },
    ],
    footer:
      "\"100% of our consulting clients would recommend CRC Public Relations to a peer.\" CRC Public Relations Client Survey",
  },
  differentiation: {
    eyebrow: "THE CRISIS COMMS AUSTRALIA DIFFERENCE",
    heading: [
      "Not just a course. Not just a retainer.",
      "The only ecosystem of its kind.",
    ],
    cards: [
      {
        icon: "building",
        title: "Decades of Real Cases",
        body:
          "Not US content. Not academic theory. Australian crises, international media, real legal and regulatory pressure - taught by practitioners who have been there. Lyall Mercer began his career as a journalist, giving him an understanding of media that no course can replicate.",
      },
      {
        icon: "users",
        title: "Three Paths. One Trusted Ecosystem.",
        body:
          "Whether you need immediate crisis support, practical crisis readiness planning for your organisation, or professional development for your team, this ecosystem brings advisory, preparation, and training together in one place.",
      },
      {
        icon: "dollar",
        title: "Practical Skills. Real-World Depth.",
        body:
          "The Crisis Masterclass gives leaders and communications professionals access to practical, practitioner-led training with real-world depth, grounded in Australian and international experience.",
      },
      {
        icon: "globe",
        title: "Every Sector. Every Continent.",
        body:
          "From ASX companies and government departments to schools, faith-based organisations, sporting bodies, and organisations across the Pacific region and beyond, CRC Public Relations has advised clients across every sector and worked with media on every continent.",
      },
    ],
  },
  finalCta: {
    eyebrow: "THE DECISION",
    heading: "Choose Your Path.",
    body:
      "There is no wrong answer. Only the answer you choose before a crisis or major issue strikes, or the one you're forced to make when it already has.",
    urgentLabel: "I NEED URGENT HELP",
    readinessLabel: "I WANT TO BE PREPARED",
    masterclassLabel: "DEVELOP MY SKILLS",
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
          "A crisis communications consultant advises organisations before, during, and after a crisis or major issue. Before a crisis, they assess vulnerabilities, build crisis communications plans, and run training and simulation exercises. During a crisis, they coordinate the media response, manage messaging across all stakeholder groups, advise spokespeople, and guide executive decision-making in real time. After a crisis, they manage reputation recovery and analyse what can be improved for next time.",
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
        question:
          "How much does crisis PR and crisis communications advice cost in Australia?",
        answer:
          "The cost of crisis communications support in Australia varies significantly depending on the scale and duration of the situation. Boutique crisis PR firms typically charge between $5,000 and $20,000 per month for ongoing retainer arrangements. For specific crisis incidents, project-based engagements are common. CRC Public Relations provides confidential consultations to discuss the right approach for your situation - contact us directly on 1300 182 186.",
        schemaAnswer:
          "Boutique crisis PR firms typically charge between $5,000 and $20,000 per month for ongoing retainer arrangements. CRC Public Relations provides confidential consultations to discuss the right approach for your situation - contact us directly on 1300 182 186.",
      },
      {
        question: "What is the difference between a crisis and an issue?",
        answer:
          "Not every challenging situation is a full-blown crisis. An issue is a problem that, if not managed, could escalate and cause reputational damage, but it may still be containable with the right strategy. A crisis is an acute situation that has already broken publicly and requires immediate, coordinated response. Issues management is proactive - identifying and addressing problems before they escalate. Crisis communications is reactive - it kicks in when the situation demands an immediate response. CRC Public Relations helps organisations with both.",
        schemaAnswer:
          "An issue is a problem that could cause reputational damage but may be containable with the right strategy. A crisis is an acute situation requiring immediate response. Issues management is proactive; crisis communications is reactive. CRC Public Relations helps with both.",
      },
      {
        question:
          "What crisis readiness and preparation services does CRC Public Relations offer?",
        answer:
          "CRC Public Relations offers a comprehensive suite of crisis readiness services: crisis communications plans tailored to your organisation, crisis prevention consultancy and vulnerability assessments, crisis scenario exercises, media training for spokespeople, and ongoing issues management advisory. These services help organisations prepare before a crisis or major issue arrives, so your team knows exactly what to do when it matters.",
        schemaAnswer:
          "CRC Public Relations offers crisis communications plans, crisis prevention consultancy, vulnerability assessments, crisis scenario exercises, media training, and issues management advisory to prepare organisations before a crisis arrives.",
      },
      {
        question: "What is the My PR Partner Crisis Masterclass?",
        answer:
          "The My PR Partner Crisis Masterclass is a 12-month online professional development program that gives communications professionals, HR managers, school leaders, SME owners, and executive teams the practical skills to lead through a crisis or major issue. It features the exclusive Crisis Ready® course presented by Melissa Agnes of the Crisis Ready Institute USA, quarterly live webinars, monthly Q&A sessions, and fortnightly training resources from Lyall Mercer. The program is backed by more than 20 years of frontline crisis consulting experience and is available exclusively in Australasia through My PR Partner.",
        schemaAnswer:
          "The My PR Partner Crisis Masterclass is a 12-month professional development program featuring the exclusive Crisis Ready® course by Melissa Agnes of the Crisis Ready Institute USA, backed by more than 20 years of frontline crisis consulting experience. Available exclusively in Australasia.",
      },
      {
        question: "Does CRC Public Relations work with organisations outside Australia?",
        answer:
          "CRC Public Relations has worked with clients and media on every continent. The firm has particular depth of experience across Australia and New Zealand as well as the Pacific Islands region, having advised governments and organisations. The Pacific region includes Cook Islands, Fiji, Papua New Guinea, Samoa, Tonga, Marshall Islands, Kiribati, Micronesia, Solomon Islands and Vanuatu. Lyall Mercer and the CRC Public Relations team are available by phone or video link anywhere in the world, anytime.",
        schemaAnswer:
          "CRC Public Relations has worked with clients and media on every continent. The firm has particular depth of experience across Australia and New Zealand as well as the Pacific Islands region, having advised governments and organisations across Cook Islands, Fiji, Papua New Guinea, Samoa, Tonga, Marshall Islands, Kiribati, Micronesia, Solomon Islands and Vanuatu.",
      },
    ],
  },
  footer: {
    ecosystemLabel: "OUR ECOSYSTEM",
    quickActionsLabel: "QUICK ACTIONS",
    contactLabel: "CONTACT",
    contactForm: {
      intro: "Get in contact",
      emailLabel: "Email address",
      requestLabel: "Contact request",
      requestPlaceholder: "Tell us briefly how we can help.",
      submitLabel: "Send request",
      successMessage: "Thanks. We will be in touch shortly.",
      errorMessage: "Please enter your email address and a short request.",
    },
    ecosystemLinks: [
      {
        label: "CRC Public Relations, Corporate & Crisis Advisory",
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
      readiness: "Discuss Crisis Readiness",
      leadMagnet: "Download Crisis Readiness Checklist",
      masterclass: "View the Crisis Masterclass",
    },
    description:
      "A division of CRC Public Relations - trusted crisis, issues management, and corporate communications advisory across Australia, the Pacific, and internationally.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
