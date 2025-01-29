import { gql } from 'graphql-tag';

export const typeDefs = gql`
  # Payment Request Input
  input PaymentRequestInput {
    merchantId: String!
    merchantTransactionId: String!
    merchantUserId: String!
    amount: Int!
    redirectUrl: String!
    redirectMode: String!
    callbackUrl: String!
    mobileNumber: String
    paymentInstrument: PaymentInstrumentInput!
  }

  # Payment Instrument Input
  input PaymentInstrumentInput {
    type: String!
  }

  # Payment Redirect Info
  type RedirectInfo {
    url: String!
    method: String!
  }

  # Instrument Response
  type InstrumentResponse {
    type: String!
    redirectInfo: RedirectInfo!
  }

  # Payment Data Response
  type PaymentData {
    merchantId: String!
    merchantTransactionId: String!
    instrumentResponse: InstrumentResponse!
  }

  # Final Payment Response
  type PaymentResponse {
    success: Boolean!
    code: String!
    message: String!
    data: PaymentData!
  }

  # Checksum Response
  type ChecksumResponse {
    checksum: String!
  }

  # Queries
  type Query {
    getTransactionStatus(merchantTransactionId: String!): PaymentResponse!
  }

  # Mutations
  type Mutation {
    initiatePayment(input: PaymentRequestInput!): PaymentResponse!
    generateChecksum(payload: String!, apiEndpoint: String!): ChecksumResponse!
  }
`;
