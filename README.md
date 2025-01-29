# 📌 PhonePe API Integration

This README outlines the steps to integrate PhonePe's Payment Gateway API into your project.

---

## 🔹 Introduction

The PhonePe Payment Gateway API enables businesses to process payments, refunds, and transaction status checks securely. It uses a checksum-based authentication mechanism for secure communication.

## ✅ Prerequisites

Before starting, ensure the following:

- **PhonePe Merchant Account**: [Sign up here](https://developer.phonepe.com/).
- **API Credentials**: `merchantId`, `saltKey`, and `saltIndex`.
- **Development Environment**:
  - Node.js version `14+`
  - Package manager (npm or yarn)
- **Postman**: For testing API requests.
- **Callback URL**: A publicly accessible endpoint for receiving callbacks.

## ✅ Environment Configuration

Create a `.env` file in your project directory:

```env
PHONEPE_UAT_URL=https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay
PHONEPE_PROD_URL=https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay
REDIRECT_UAT_URL=https://webhook.site/redirect-url
REDIRECT_PROD_URL=https://webhook.site/redirect-url
CALLBACK_UAT_URL=https://webhook.site/callback-url
CALLBACK_PROD_URL=https://webhook.site/callback-url
MERCHANT_ID=<your-merchant-id>
SALT_KEY=<your-salt-key>
SALT_INDEX=<your-salt-index>
```

## 🔗 Sample Request for Pay Page

```
{
  "merchantId": "PGTESTPAYUAT",
  "merchantTransactionId": "MT7850590068188104",
  "merchantUserId": "MUID123",
  "amount": 10000,
  "redirectUrl": "https://webhook.site/redirect-url",
  "redirectMode": "REDIRECT",
  "callbackUrl": "https://webhook.site/callback-url",
  "mobileNumber": "9999999999",
  "paymentInstrument": {
    "type": "PAY_PAGE"
  }
}
```

## 🔹 Request Signing

---

How to Calculate X-Verify/Checksum

Header PhonePe requires that every request includes a signed checksum for security.

Formula : `SHA256(Base64 encoded payload + API Endpoint + saltKey) + "###" + saltIndex`

1. **Steps to Generate Checksum**  
   Convert the JSON payload to a Base64 string:
   ```
   const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
   ```
2. **Concatenate with API Endpoint & Salt Key**  
   `dataToHash = base64Payload + "/pg/v1/pay" + saltKey`

3. **Hash using SHA-256**

   ```
   const crypto = require('crypto');
   const apiEndpoint = "/pg/v1/pay";
   const saltKey = "your-salt-key";
   const saltIndex = "your-salt-index";

   const dataToHash = base64Payload + apiEndpoint + saltKey;
   const checksum = crypto.createHash('sha256').update(dataToHash).digest('hex');
   ```

4. **Include the Checksum**
   Add the generated checksum to the X-VERIFY header in your API request.

   Example header:
   `X-VERIFY: checksum + "###" + saltIndex`

**Example Computation:**

```arduino
SHA256(Base64Payload + "/pg/v1/pay" + SaltKey) + "###" + SaltIndex
```

## 🔹 References

- 📄 [PhonePe Developer Documentation](https://developer.phonepe.com/)
