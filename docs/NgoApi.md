# Brand4impactJavascriptClient.NgoApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNgo**](NgoApi.md#createNgo) | **POST** /rest/platform/ngo | Create a new NGO
[**getNgo**](NgoApi.md#getNgo) | **GET** /rest/platform/ngo | Get your NGO
[**updateNgo**](NgoApi.md#updateNgo) | **PUT** /rest/platform/ngo | Update NGO data
[**updateNgoBank**](NgoApi.md#updateNgoBank) | **PUT** /rest/platform/ngo/bank | Update bank NGO info
[**updateNgoLegal**](NgoApi.md#updateNgoLegal) | **PUT** /rest/platform/ngo/legal | Update legal NGO info
[**uploadNgoFiles**](NgoApi.md#uploadNgoFiles) | **PUT** /rest/platform/ngo/upload | Upload NGO files



## createNgo

> PlatformNgo createNgo(ngo, legal, admin)

Create a new NGO

Register a new NGO allows you to have visibiliy that your NGO deserves, being visible to brand4impact users, and opting for their donations

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.NgoApi();
let ngo = new Brand4impactJavascriptClient.PlatformNgoCreate(); // PlatformNgoCreate | 
let legal = new Brand4impactJavascriptClient.PlatformNgoCreateLegal(); // PlatformNgoCreateLegal | 
let admin = new Brand4impactJavascriptClient.PlatformNgoCreateAdmin(); // PlatformNgoCreateAdmin | 
apiInstance.createNgo(ngo, legal, admin, (error, data, response) => {
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
 **ngo** | [**PlatformNgoCreate**](PlatformNgoCreate.md)|  | 
 **legal** | [**PlatformNgoCreateLegal**](PlatformNgoCreateLegal.md)|  | 
 **admin** | [**PlatformNgoCreateAdmin**](PlatformNgoCreateAdmin.md)|  | 

### Return type

[**PlatformNgo**](PlatformNgo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getNgo

> PlatformNgo getNgo()

Get your NGO

This method returns the NGO inside your tenant (theres no need to know the NGO token)  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.NgoApi();
apiInstance.getNgo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PlatformNgo**](PlatformNgo.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateNgo

> PlatformNgo updateNgo(ngo, logo)

Update NGO data

This method updates any data for the NGO  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.NgoApi();
let ngo = new Brand4impactJavascriptClient.PlatformNgoUpdate(); // PlatformNgoUpdate | 
let logo = "/path/to/file"; // File | 
apiInstance.updateNgo(ngo, logo, (error, data, response) => {
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
 **ngo** | [**PlatformNgoUpdate**](PlatformNgoUpdate.md)|  | 
 **logo** | **File**|  | 

### Return type

[**PlatformNgo**](PlatformNgo.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updateNgoBank

> PlatformNgo updateNgoBank(bank)

Update bank NGO info

This method updates the bank info for your NGO  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.NgoApi();
let bank = new Brand4impactJavascriptClient.PlatformNgoUpdateBank(); // PlatformNgoUpdateBank | 
apiInstance.updateNgoBank(bank, (error, data, response) => {
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
 **bank** | [**PlatformNgoUpdateBank**](PlatformNgoUpdateBank.md)|  | 

### Return type

[**PlatformNgo**](PlatformNgo.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updateNgoLegal

> PlatformNgo updateNgoLegal(legal)

Update legal NGO info

This method updates the legal info for your NGO  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.NgoApi();
let legal = new Brand4impactJavascriptClient.PlatformNgoUpdateLegal(); // PlatformNgoUpdateLegal | 
apiInstance.updateNgoLegal(legal, (error, data, response) => {
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
 **legal** | [**PlatformNgoUpdateLegal**](PlatformNgoUpdateLegal.md)|  | 

### Return type

[**PlatformNgo**](PlatformNgo.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## uploadNgoFiles

> PlatformNgo uploadNgoFiles(file)

Upload NGO files

This method uploads documentation (files, images, ...) of a NGO  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.NgoApi();
let file = "/path/to/file"; // File | 
apiInstance.uploadNgoFiles(file, (error, data, response) => {
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
 **file** | **File**|  | 

### Return type

[**PlatformNgo**](PlatformNgo.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

