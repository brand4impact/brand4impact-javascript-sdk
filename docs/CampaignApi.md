# Brand4impactJavascriptClient.CampaignApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCampaign**](CampaignApi.md#createCampaign) | **POST** /rest/platform/campaign | Create a new campaign
[**getCampaign**](CampaignApi.md#getCampaign) | **GET** /rest/platform/campaign/{token} | Get a single campaign
[**getCampaigns**](CampaignApi.md#getCampaigns) | **GET** /rest/platform/campaign | Get a set of campaigns
[**switchCampaign**](CampaignApi.md#switchCampaign) | **PUT** /rest/platform/campaign/{token}/switch | Switch campaign status
[**updateCampaign**](CampaignApi.md#updateCampaign) | **PUT** /rest/platform/campaign/{token} | Update a campaign



## createCampaign

> PlatformCampaign createCampaign(campaign, primaryImage, secondaryImage)

Create a new campaign

This method creates a new campaign within a Company  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.CampaignApi();
let campaign = new Brand4impactJavascriptClient.PlatformCampaignCreate(); // PlatformCampaignCreate | 
let primaryImage = "/path/to/file"; // File | 
let secondaryImage = "/path/to/file"; // File | 
apiInstance.createCampaign(campaign, primaryImage, secondaryImage, (error, data, response) => {
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
 **campaign** | [**PlatformCampaignCreate**](PlatformCampaignCreate.md)|  | 
 **primaryImage** | **File**|  | 
 **secondaryImage** | **File**|  | 

### Return type

[**PlatformCampaign**](PlatformCampaign.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getCampaign

> PlatformCampaign getCampaign(token)

Get a single campaign

This method returns a specific campaign within your tenant  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.CampaignApi();
let token = "token_example"; // String | The unique token for the campaign.
apiInstance.getCampaign(token, (error, data, response) => {
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
 **token** | **String**| The unique token for the campaign. | 

### Return type

[**PlatformCampaign**](PlatformCampaign.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaigns

> PlatformCampaignItemWrapper getCampaigns(opts)

Get a set of campaigns

This method returns a set of campaigns within your tenant    [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)[![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png &#39;pagination&#39;)](http://localhost:8080/backend/blog/home#pagination)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.CampaignApi();
let opts = {
  'titleFilter': "titleFilter_example", // String | The name of the filter
  'page': 56, // Number | The number of the page. Possible values: 0 to unlimited
  'size': 56, // Number | The number of items inside a page. Possible values: 1 to 100
  'sort': "sort_example" // String | The order direction for sorted results. Possible values: ASC or DESC
};
apiInstance.getCampaigns(opts, (error, data, response) => {
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
 **titleFilter** | **String**| The name of the filter | [optional] 
 **page** | **Number**| The number of the page. Possible values: 0 to unlimited | [optional] 
 **size** | **Number**| The number of items inside a page. Possible values: 1 to 100 | [optional] 
 **sort** | **String**| The order direction for sorted results. Possible values: ASC or DESC | [optional] 

### Return type

[**PlatformCampaignItemWrapper**](PlatformCampaignItemWrapper.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## switchCampaign

> PlatformCampaign switchCampaign(token)

Switch campaign status

This method switch the status of a specific campaign  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.CampaignApi();
let token = "token_example"; // String | 
apiInstance.switchCampaign(token, (error, data, response) => {
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

[**PlatformCampaign**](PlatformCampaign.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCampaign

> PlatformCampaign updateCampaign(token, campaign, primaryImage, secondaryImage)

Update a campaign

This method updates an existing campaign  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.CampaignApi();
let token = "token_example"; // String | 
let campaign = new Brand4impactJavascriptClient.PlatformCampaignUpdate(); // PlatformCampaignUpdate | 
let primaryImage = "/path/to/file"; // File | 
let secondaryImage = "/path/to/file"; // File | 
apiInstance.updateCampaign(token, campaign, primaryImage, secondaryImage, (error, data, response) => {
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
 **campaign** | [**PlatformCampaignUpdate**](PlatformCampaignUpdate.md)|  | 
 **primaryImage** | **File**|  | 
 **secondaryImage** | **File**|  | 

### Return type

[**PlatformCampaign**](PlatformCampaign.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

