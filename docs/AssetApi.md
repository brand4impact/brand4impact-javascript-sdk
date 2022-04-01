# Brand4impactJavascriptClient.AssetApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAsset**](AssetApi.md#getAsset) | **GET** /rest/platform/asset/{token} | Get a single asset
[**getAssets**](AssetApi.md#getAssets) | **GET** /rest/platform/asset | Get a set of assets



## getAsset

> PlatformAsset getAsset(token)

Get a single asset

This method returns a specific asset within your tenant (asset refers to static files, like images, pdf, ...)  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.AssetApi();
let token = "token_example"; // String | The unique token for the asset.
apiInstance.getAsset(token, (error, data, response) => {
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
 **token** | **String**| The unique token for the asset. | 

### Return type

[**PlatformAsset**](PlatformAsset.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssets

> PlatformAssetItemWrapper getAssets(opts)

Get a set of assets

This method returns a set of assets within your tenant (asset refers to static files, like images, pdf, ...)    [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)[![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png &#39;pagination&#39;)](http://localhost:8080/backend/blog/home#pagination)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.AssetApi();
let opts = {
  'page': 56, // Number | The number of the page. Possible values: 0 to unlimited
  'size': 56, // Number | The number of items inside a page. Possible values: 1 to 100
  'sort': "sort_example" // String | The order direction for sorted results. Possible values: ASC or DESC
};
apiInstance.getAssets(opts, (error, data, response) => {
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
 **page** | **Number**| The number of the page. Possible values: 0 to unlimited | [optional] 
 **size** | **Number**| The number of items inside a page. Possible values: 1 to 100 | [optional] 
 **sort** | **String**| The order direction for sorted results. Possible values: ASC or DESC | [optional] 

### Return type

[**PlatformAssetItemWrapper**](PlatformAssetItemWrapper.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

