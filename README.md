# PhonePe API Integration

This README outlines the steps to integrate PhonePe's Payment Gateway API into your project.

---

## Prerequisites

Before starting, ensure the following:

- **PhonePe Merchant Account**: [Sign up here](https://developer.phonepe.com/).
- **API Credentials**: `merchantId`, `saltKey`, and `saltIndex`.
- **Development Environment**:
  - Node.js version `14+`
  - Package manager (npm or yarn)
- **Postman**: For testing API requests.
- **Callback URL**: A publicly accessible endpoint for receiving callbacks.

## Environment Configuration

```
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

## Sample Request for Pay Page

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

## Request Signing
------------------

PhonePe requires requests to be signed with a checksum for security. Below are the steps to generate the checksum:

1. **Combine Data**  
   Concatenate the following in the specified order:
   - `merchantId`
   - `payload` (as a JSON string)
   - `saltKey`  

2. **Hash the Data**  
Use the SHA-256 algorithm to hash the concatenated string. You can use libraries like `crypto` in Node.js to generate the hash.  

Example:  
```javascript
const crypto = require('crypto');

const dataToHash = merchantId + JSON.stringify(payload) + saltKey;
const checksum = crypto.createHash('sha256').update(dataToHash).digest('hex');
```

3. **Include the Checksum**
    Add the generated checksum to the X-VERIFY header in your API request.
    
    Example header:
    ```X-VERIFY: checksum + "###" + saltIndex```



