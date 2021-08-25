// Mostly copied from https://github.com/ixofoundation/ixo-apimodule/blob/master/src/common/dummyData.ts


module.exports = ownerDid => ({
  "@context": "https://schema.ixo.foundation/entity:2383r9riuew",
  "@type": "Project",
  schemaVersion: "1.0.0",
  name: "Yet Another Test Project",
  description: "Some Short Description",
  logo: "https://cellnode-pandora.ixo.world/public/sbujb0xg0dgkeljwtnc",
  image: "https://cellnode-pandora.ixo.world/public/sbujb0xg0dgkeljwtnc",
  imageDescription: "Some Image Description",
  location: "AR",
  sdgs: ["5", "7"],
  startDate: "2020-09-17T00:00:00.000Z",
  endDate: "2020-10-23T00:00:00.000Z",
  status: "CREATED",
  stage: "Planning",
  relayerNode: "xxx",
  version: {
    versionNumber: "1.0.5",
    effectiveDate: "2020-09-15T00:00:00.000Z",
    notes: "Some version notes"
  },
  terms: {
    "@type": "OnceOffFee",
    paymentTemplateId: "payment:template:1234567890"
  },
  privacy: {
    pageView: "Private",
    entityView: "Visible",
    credentials: [{
      credential: "ege",
      issuer: ownerDid,
    }]
  },
  creator: {
    displayName: "Creator Display Name",
    location: "AD",
    email: "ert@dfssdf.com",
    website: "https://blah.com",
    mission: "Some mission",
    id: ownerDid,
    credentialId: ownerDid,
    logo: "https://cellnode-pandora.ixo.world/public/8520qk1ckqvkelkjfeg"
  },
  owner: {
    displayName: "Owner Display Name",
    location: "AQ",
    email: "eeeert@dfssdf.com",
    website: "https://eerer.com",
    mission: "another mission",
    id: ownerDid,
    logo: "https://cellnode-pandora.ixo.world/public/9uqcsf7qsfjkelkkkt9"
  },
  ddoTags: [{
    category: "Project Type",
    tags: ["Index", "Accreditation", "Accountability", "Insurance Bond"]
  }, {
    category: "SDG",
    tags: ["SDG3 – Good Health and Well-being", "SDG15 – Life on Land", "SDG16 – Peace, Justice and Strong Institutions", "SDG17 – Partnerships for Goals"]
  }, {
    category: "Stage",
    tags: ["Planning"]
  }],
  displayCredentials: {
    "@context": "https://www.w3.org/2018/credentials/v1",
    items: [{
      credential: "somecredential1",
      badge: "https://somebadge.com"
    }, {
      credential: "somecredential2",
      badge: "https://anotherbadge.com"
    }]
  },
  page: {
    cid: "r0d19cfngnkkxju8rf",
    version: "1.0.0"
  },
  entityClaims: {
    "@context": "https://schema.ixo.world/claims:3r08webu2eou",
    items: [
      {
        "@id": "did:ixo:HTGfJJZBhbxrE1S1ejWS6W",
        visibility: "Public",
        title: "Test all controls",
        description: "Test for ixo mobile application",
        targetMin: 1,
        targetMax: 600,
        startDate: "2020-10-08T00:00:00.000Z",
        endDate: "2020-11-30T00:00:00.000Z",
        goal: "Tests",
        agents: [],
        claimEvaluation: [],
        claimApproval: [],
        claimEnrichment: []
      }
    ]
  },
  claims: {
    "@context": "https://schema.ixo.world/claims:3r08webu2eou",
    items: []
  },
  linkedEntities: [{
    "@type": "Investment",
    id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdqq"
  }, {
    "@type": "Oracle",
    id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdtt"
  }],
  fees: {
    "@context": "https://schema.ixo.world/fees/ipfs3r08webu2eou",
    items: [],
  },
  stake: {
    "@context": "https://schema.ixo.world/staking/ipfs3r08webu2eou",
    items: [{
      "@type": "PerformanceGuarantee",
      id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdvv",
      denom: "IXO",
      stakeAddress: "abcccsdfsdfdsfdsfsdf",
      minStake: 12,
      slashCondition: "FailedDispute",
      slashFactor: 45,
      slashAmount: 66,
      unbondPeriod: 23
    }]
  },
  nodes: {
    "@context": "https://schema.ixo.world/nodes/ipfs3r08webu2eou",
    items: [{
      "@type": "CellNode",
      id: "ixo cell node",
      serviceEndpoint: "https://cellnode-pandora.ixo.world"
    }, {
      "@type": "IBCNode",
      id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdbb"
    }, {
      "@type": "CellNode",
      id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdzz"
    }]
  },
  funding: {
    "@context": "https://schema.ixo.world/funding/ipfs3r08webu2eou",
    items: [{
      "@type": "AlphaBond",
      id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdzzzz"
    }]
  },
  keys: {
    "@context": "https://www.w3.org/ns/did/v1",
    items: [{
      purpose: "Encryption",
      "@type": "JwsVerificationKey2020",
      controller: "did:sov:CYCc2xaJKrp8Yt947Nc6jdbbbbb",
      keyValue: "eEUR",
      dateCreated: "2020-09-18T00:00:00.000Z",
      dateUpdated: "2020-10-28T00:00:00.000Z",
      signature: "somesignature"
    }]
  },
  service: [{
    "@type": "DIDAgent",
    id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdbbbnn",
    serviceEndpoint: "https://someurl",
    description: "some short description",
    publicKey: "somepubkey",
    properties: "otherparams"
  }],
  data: [{
    "@type": "PersonalDataPod",
    id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdbgfd",
    serviceEndpoint: "https://blah.com",
    properties: "otherparams"
  }]
})
