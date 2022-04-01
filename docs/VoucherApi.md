# Brand4impactJavascriptClient.VoucherApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadVoucherQr**](VoucherApi.md#downloadVoucherQr) | **GET** /rest/platform/voucher/{token}/qr | Download the voucher QR image
[**downloadVouchersFile**](VoucherApi.md#downloadVouchersFile) | **GET** /rest/platform/voucher/campaign/{campaignToken}/file | Download a set of voucher&#39;s links file
[**downloadVouchersQr**](VoucherApi.md#downloadVouchersQr) | **GET** /rest/platform/voucher/campaign/{campaignToken}/qr | Download a set of voucher QR images
[**getVoucher**](VoucherApi.md#getVoucher) | **GET** /rest/platform/voucher/{token} | Get a single voucher
[**getVouchers**](VoucherApi.md#getVouchers) | **GET** /rest/platform/voucher/campaign/{campaignToken} | Get a set of vouchers



## downloadVoucherQr

> String downloadVoucherQr(token)

Download the voucher QR image

This method returns a QR image of the voucher within your tenant to be able to access the donation graphically  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.VoucherApi();
let token = "token_example"; // String | 
apiInstance.downloadVoucherQr(token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

**String**

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadVouchersFile

> String downloadVouchersFile(campaignToken, opts)

Download a set of voucher&#39;s links file

This method returns a set of voucher&#39;s links file within your tenant    [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)[![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png &#39;pagination&#39;)](http://localhost:8080/backend/blog/home#pagination)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.VoucherApi();
let campaignToken = "campaignToken_example"; // String | The unique token for the campaign.
let opts = {
  'status': "status_example", // String | The status of the voucher. Possible values: Active or Inactive
  'min': 56, // Number | Min value of the voucher
  'max': 56 // Number | Max value of the voucher
};
apiInstance.downloadVouchersFile(campaignToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignToken** | **String**| The unique token for the campaign. | 
 **status** | **String**| The status of the voucher. Possible values: Active or Inactive | [optional] 
 **min** | **Number**| Min value of the voucher | [optional] 
 **max** | **Number**| Max value of the voucher | [optional] 

### Return type

**String**

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadVouchersQr

> String downloadVouchersQr(campaignToken, opts)

Download a set of voucher QR images

This method returns a set of voucher QR images within your tenant    [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)[![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png &#39;pagination&#39;)](http://localhost:8080/backend/blog/home#pagination)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.VoucherApi();
let campaignToken = "campaignToken_example"; // String | The unique token for the campaign.
let opts = {
  'status': "status_example", // String | The status of the voucher. Possible values: Active or Inactive
  'min': 56, // Number | Min value of the voucher
  'max': 56 // Number | Max value of the voucher
};
apiInstance.downloadVouchersQr(campaignToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignToken** | **String**| The unique token for the campaign. | 
 **status** | **String**| The status of the voucher. Possible values: Active or Inactive | [optional] 
 **min** | **Number**| Min value of the voucher | [optional] 
 **max** | **Number**| Max value of the voucher | [optional] 

### Return type

**String**

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVoucher

> PlatformVoucher getVoucher(token)

Get a single voucher

This method returns a specific voucher within your tenant  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.VoucherApi();
let token = "token_example"; // String | 
apiInstance.getVoucher(token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

[**PlatformVoucher**](PlatformVoucher.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVouchers

> PlatformVoucherItemWrapper getVouchers(campaignToken, opts)

Get a set of vouchers

This method returns a set of vouchers within your tenant    [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)[![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png &#39;pagination&#39;)](http://localhost:8080/backend/blog/home#pagination)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.VoucherApi();
let campaignToken = "campaignToken_example"; // String | The unique token for the campaign.
let opts = {
  'status': "status_example", // String | The status of the voucher. Possible values: Active or Inactive
  'min': 56, // Number | Min value of the voucher
  'max': 56, // Number | Max value of the voucher
  'page': 56, // Number | The number of the page. Possible values: 0 to unlimited
  'size': 56 // Number | The number of items inside a page. Possible values: 1 to 100
};
apiInstance.getVouchers(campaignToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignToken** | **String**| The unique token for the campaign. | 
 **status** | **String**| The status of the voucher. Possible values: Active or Inactive | [optional] 
 **min** | **Number**| Min value of the voucher | [optional] 
 **max** | **Number**| Max value of the voucher | [optional] 
 **page** | **Number**| The number of the page. Possible values: 0 to unlimited | [optional] 
 **size** | **Number**| The number of items inside a page. Possible values: 1 to 100 | [optional] 

### Return type

[**PlatformVoucherItemWrapper**](PlatformVoucherItemWrapper.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

