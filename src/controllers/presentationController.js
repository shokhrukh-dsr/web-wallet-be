exports.getPresentation = async (_req, res) => {
  res.json({
    allRequestedFields: ["First name", "GPA.Math", "Date of birth"],
    inputs: [
      {
        inputId: "1",
        requestedFields: ["First name"],
        credentials: [
          {
            overview: {
              id: "cred1",
              issued: new Date("2023-12-13"),
              expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
              status: "active",
              metadata: {
                issuer: {
                  name: "University",
                },
                credDef: {
                  name: "Diploma",
                  description: "Proof of completion",
                },
              },
            },
            details: [
              { name: "First name", value: "John", selected: true },
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
              id: "cred2",
              issued: new Date("2023-08-26"),
              expires: new Date("2024-08-26"),
              status: "expired",
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
              { name: "First name", value: "John", selected: true },
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
        ],
      },
      {
        inputId: "2",
        requestedCredType: "Diploma",
        requestedFields: ["GPA.Math"],
        credentials: [
          {
            overview: {
              id: "cred3",
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
                    selected: true,
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
              id: "cred4",
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
                    selected: true,
                  },
                  {
                    name: "OS",
                    value: "4.5",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        inputId: "3",
        requestedCredType: "ID card",
        requestedFields: ["Date of birth"],
        credentials: [
          {
            overview: {
              id: "cred5",
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
              {
                name: "Date of birth",
                value: new Date("1992-03-16"),
                selected: true,
              },
              {
                name: "Address",
                items: [
                  {
                    name: "City",
                    value: "Agrabah",
                  },
                  {
                    name: "Street",
                    items: [
                      { name: "Number", value: "13" },
                      { name: "Name", value: "Merchant's dream" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
};

exports.submitPresentation = async (_req, res) => {
  res.send();
};
