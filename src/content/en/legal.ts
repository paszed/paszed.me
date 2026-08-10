export const legal = {
  imprint: {
    title: "Imprint",
    description: "Legal information about Alapworks.",
    sections: [
      {
        title: "Business information",
        body: [
          "Alapworks",
          "Vienna, Austria",
          "Email: hello@alapworks.com",
        ],
      },
      {
        title: "Responsible for content",
        body: [
          "The operator of Alapworks is responsible for the content published on this website.",
        ],
      },
    ],
  },

  privacy: {
    title: "Privacy Policy",
    description: "Information about how we handle personal data.",
    sections: [
      {
        title: "General information",
        body: [
          "We process personal data only where necessary to operate this website, respond to enquiries, and provide requested services.",
        ],
      },
      {
        title: "Contact",
        body: [
          "When you contact us by email, the information you provide is used to respond to your enquiry and handle the related communication.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms",
    description: "General information about using our services.",
    sections: [
      {
        title: "Services",
        body: [
          "The scope, deliverables, pricing, and applicable conditions of individual projects are agreed separately with each client.",
        ],
      },
      {
        title: "Contact",
        body: [
          "Please contact us if you have questions about a specific project or engagement.",
        ],
      },
    ],
  },

  legal: {
    title: "Legal",
    description: "Legal information and policies.",
  },
} as const;
