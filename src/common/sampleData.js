exports.credentials = [
  {
    overview: {
      issued: new Date("2023-12-13"),
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      status: "active",
      metadata: {
        issuer: {
          name: "Harvard",
        },
        credDef: {
          name: "Diploma",
          description: "Proof of completion",
        },
      },
    },
    details: [
      { name: "First name", value: "John" },
      { name: "Last name", value: "Doe" },
      { name: "Graduation year", value: "2013" },
      {
        name: "GPA",
        items: [
          {
            name: "Math",
            value: "4.5",
          },
          {
            name: "OS",
            value: "4.5",
          },
        ],
      },
    ],
  },
  {
    overview: {
      issued: new Date("2023-12-13"),
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      status: "active",
      metadata: {
        issuer: {
          name: "MIT",
        },
        credDef: {
          name: "Diploma",
          description: "Proof of completion",
        },
      },
    },
    details: [
      { name: "First name", value: "John" },
      { name: "Last name", value: "Doe" },
      { name: "Graduation year", value: "2011" },
      {
        name: "GPA",
        items: [
          {
            name: "Math",
            value: "4.5",
          },
          {
            name: "OS",
            value: "4.5",
          },
        ],
      },
    ],
  },
  {
    overview: {
      issued: new Date("2023-08-26"),
      expires: new Date("2024-08-26"),
      status: "active",
      metadata: {
        issuer: {
          name: "Government",
        },
        credDef: {
          name: "ID card",
          description: "Identification card",
        },
      },
    },
    details: [
      { name: "First name", value: "John" },
      { name: "Last name", value: "Doe" },
      { name: "Date of birth", value: new Date("1992-03-16") },
      {
        name: "Address",
        items: [
          {
            name: "City",
            value: "Agrabah",
          },
          {
            name: "Street",
            value: "Merchant's dream 13",
          },
        ],
      },
    ],
  },
];
