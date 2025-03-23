const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema(
  {
    name: String,
    value: String,
    items: [this],
  },
  { _id: false }
);

const credentialSchema = new mongoose.Schema(
  {
    overview: {
      issued: Date,
      expires: Date,
      status: String,
      metadata: {
        issuer: {
          name: String,
        },
        credDef: {
          name: String,
          description: String,
        },
      },
    },
    details: [claimSchema],
  },
  {
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

module.exports = mongoose.model("Credential", credentialSchema);
