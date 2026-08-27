export const site = {
  name: "Shipfront",
  url: "https://www.myshipfront.com",
  email: "info@myshipfront.com",
  addressLine: "1933 S. Broadway, Los Angeles CA 90007",
  address: {
    name: "Shipfront",
    street: "1933 S. Broadway",
    cityLine: "Los Angeles, CA 90007",
  },
  hours: {
    weekdays: "Monday to Friday: 9 am to 5 pm",
    weekend: "Saturday to Sunday: Appointment only",
  },
  footerLine: "1933 S. Broadway, Los Angeles CA 90007 | info@myshipfront.com",
  builtBy: "Built by David T Phung",
} as const;

export const hero = {
  eyebrow: "Warehousing & Fulfillment Solutions",
  headlineLine1: "You Sell. We Ship.",
  headlineLine2: "eCommerce at Scale",
  headline: "You Sell. We Ship. eCommerce at Scale",
  body: "Shipfront helps eCommerce merchants scale by taking care of their logistics needs, so that they can focus on growing their business.",
} as const;

export const customerSuccess = {
  copy: "Customer-success is our obsession, with dedicated account managers for every merchant and industry-leading capabilities across temperature control, same-day delivery, FBA prep, and much more.",
} as const;

export const services = {
  warehousing: {
    title: "WAREHOUSING",
    copy: "Our warehouses provide the necessary space, security, temperature-control, and FDA compliant capabilities to store your products before shipping them to customers. Our inventory management system tracks all items across every SKU to know where they are located, how long they have been there, and the quantity on hand. We actively forecast inventory demand to keep your supply chain running optimally.",
  },
  fulfillment: {
    title: "FULFILLMENT",
    copy: "We build custom workflows to pick, pack, label, and ship your products exactly how you would like. That means working with any carrier across traditional partners, as well as the most innovative companies in last-mile and same-day delivery. We get your products to your customers, quickly and accurately.",
    capabilities:
      "Inbound | Kitting | Storage | FBA Prep | Outbound | Last-Mile Delivery | Same-Day Delivery",
  },
  integrations: {
    title: "ECOMMERCE INTEGRATIONS",
    copy: "Shipfront is built on the Flowspace Warehouse Management System (WMS) - an innovative software solution for managing the needs of today's warehousing & fulfillment operations. Through the WMS, Shipfront integrates with partners across the supply chain ecosystem - from eCommerce platforms to same-day delivery services.",
  },
  location: {
    title: "LOCATION IS EVERYTHING",
    copy: "Situated in downtown L.A., next to the 10, 110, and 101 freeways - Shipfront is perfectly positioned to serve your eCommerce business. Not only do we inbound your products efficiently, we also deliver them quickly to your customers through our strong carrier and same-day delivery integrations.",
    note: "Easy access to interstate freeways, courier depots, train stations, and airports",
  },
} as const;

export const capabilityList = [
  "Inbound",
  "Kitting",
  "Storage",
  "FBA Prep",
  "Outbound",
  "Last-Mile Delivery",
  "Same-Day Delivery",
] as const;

export const howItWorks = {
  headline: "Fulfillment looks and feels complicated, but Shipfront will make it easy!",
  steps: [
    { title: "Find a cool product" },
    { title: "Get it manufactured" },
    { title: "Ship inventory from supplier to Shipfront" },
    { title: "Shipfront receives and inventories" },
    { title: "Integrate sales channels" },
    { title: "We ship" },
    { title: "Happy Customers!" },
  ],
} as const;

export const quote = {
  title: "Fast & Easy Quotes",
  body: "Please take a moment to give us some information. We have expert agents standing by to take care of your logistics needs.",
  submit: "Send",
  success:
    "Thank you for your interest, one of our agent will reach out to you shortly!",
  previewNote: "Quote preview. Nothing was sent.",
  cta: "Get a Quote",
} as const;

export const contactPage = {
  title: "Call or Visit Us Today",
} as const;

export const quoteFields = [
  { name: "name", title: "Name", type: "name", required: true },
  { name: "email", title: "Email", type: "email", required: true },
  { name: "phone", title: "Phone", type: "phone", required: true },
  { name: "company", title: "Company Name", type: "text", required: false },
  { name: "website", title: "Website", type: "website", required: false },
  { name: "message", title: "Message", type: "textarea", required: false },
] as const;

export const network = {
  heading: "How Shipfront moves with you",
  visualName: "SHIPFRONT NETWORK",
  workflowLabel: "ILLUSTRATIVE WORKFLOW",
  nodes: [
    { id: "store", label: "STORE", copy: "Integrate sales channels" },
    { id: "inventory", label: "INVENTORY", copy: "Shipfront receives and inventories." },
    {
      id: "fulfillment",
      label: "FULFILLMENT",
      copy: "We build custom workflows to pick, pack, label, and ship your products exactly how you would like.",
    },
    {
      id: "quality",
      label: "QUALITY CHECK",
      copy: "We get your products to your customers, quickly and accurately.",
    },
    {
      id: "carrier",
      label: "CARRIER",
      copy: "Working with any carrier across traditional partners, as well as the most innovative companies in last-mile and same-day delivery.",
    },
    { id: "customer", label: "CUSTOMER", copy: "Happy Customers!" },
  ],
  statuses: [
    "ORDER SIGNAL RECEIVED",
    "INVENTORY RESERVED",
    "PICK LIST CREATED",
    "LABEL GENERATED",
    "FULFILLMENT COMPLETE",
  ],
} as const;

export const flowLabels = [
  "ORDER RECEIVED",
  "INVENTORY ALLOCATED",
  "PICKING",
  "PACKED",
  "IN TRANSIT",
  "DELIVERED",
] as const;
