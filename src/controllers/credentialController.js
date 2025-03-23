const Credential = require("../models/Credential");
const sampleData = require("../common/sampleData");

exports.getAllCredentials = async (req, res) => {
  try {
    const credentials = await Credential.find();
    res.json(credentials);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch credentials." });
  }
};

exports.getCredentialById = async (req, res) => {
  try {
    const credential = await Credential.findById(req.params.id);
    if (!credential)
      return res.status(404).json({ error: "Credential not found." });
    res.json(credential);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID format." });
  }
};

exports.deleteCredentialById = async (req, res) => {
  try {
    const result = await Credential.findByIdAndDelete(req.params.id);
    if (!result)
      return res.status(404).json({ error: "Credential not found." });
    res.json({ message: "Credential deleted." });
  } catch (err) {
    res.status(400).json({ error: "Invalid ID format." });
  }
};

exports.createCredential = async (req, res) => {
  try {
    const date = new Date();
    const sampleData = {
      overview: {
        issued: date,
        expires: new Date("2024-08-26"),
        status: "expired",
        metadata: {
          issuer: {
            name: "Issuer name",
          },
          credDef: {
            name: `Cred name ${Math.random().toString().slice(-3)}`,
            description: "Cred description",
          },
        },
      },
      details: [
        { name: "First name", value: "Barbara" },
        { name: "Last name", value: "Roberts" },
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
    };
    const newCredential = new Credential(sampleData);
    const saved = await newCredential.save();
    res.status(201).json(saved);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to create credential.", details: err.message });
  }
};

exports.seedSampleData = async () => {
  const count = await Credential.countDocuments();
  if (count > 0) return;

  await Credential.insertMany(sampleData.credentials);
  console.log("Sample credentials inserted");
};

exports.resetDatabase = async (req, res) => {
  try {
    await Credential.collection.drop();
    await exports.seedSampleData();
    res.json({ message: "All credentials reset." });
  } catch (err) {
    res.status(500).json({ error: "Failed to reset database." });
  }
};
