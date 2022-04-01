# Brand4impactJavascriptClient.CompanyApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompany**](CompanyApi.md#createCompany) | **POST** /rest/platform/company | Create a new Company
[**getCompany**](CompanyApi.md#getCompany) | **GET** /rest/platform/company | Get your Company
[**updateCompany**](CompanyApi.md#updateCompany) | **PUT** /rest/platform/company | Update Company data
[**updateCompanyLegal**](CompanyApi.md#updateCompanyLegal) | **PUT** /rest/platform/company/legal | Update legal Company info
[**updateCompanyTopic**](CompanyApi.md#updateCompanyTopic) | **PUT** /rest/platform/company/topic | Update selected topics for your Company



## createCompany

> PlatformCompany createCompany(company, legal, admin)

Create a new Company

Register a new company allows you to start to have visibility that your deserves, being visible to brand4impact users and opting to donate among a bunch of projects

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.CompanyApi();
let company = new Brand4impactJavascriptClient.PlatformCompanyCreate(); // PlatformCompanyCreate | 
let legal = new Brand4impactJavascriptClient.PlatformCompanyCreateLegal(); // PlatformCompanyCreateLegal | 
let admin = new Brand4impactJavascriptClient.PlatformCompanyCreateAdmin(); // PlatformCompanyCreateAdmin | 
apiInstance.createCompany(company, legal, admin, (error, data, response) => {
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
 **company** | [**PlatformCompanyCreate**](PlatformCompanyCreate.md)|  | 
 **legal** | [**PlatformCompanyCreateLegal**](PlatformCompanyCreateLegal.md)|  | 
 **admin** | [**PlatformCompanyCreateAdmin**](PlatformCompanyCreateAdmin.md)|  | 

### Return type

[**PlatformCompany**](PlatformCompany.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getCompany

> PlatformCompany getCompany()

Get your Company

This method returns the Company inside your tenant (theres no need to know the Company token)  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.CompanyApi();
apiInstance.getCompany((error, data, response) => {
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

[**PlatformCompany**](PlatformCompany.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCompany

> PlatformCompany updateCompany(company, logo)

Update Company data

This method updates any data for the Company  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.CompanyApi();
let company = new Brand4impactJavascriptClient.PlatformCompanyUpdate(); // PlatformCompanyUpdate | 
let logo = "/path/to/file"; // File | 
apiInstance.updateCompany(company, logo, (error, data, response) => {
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
 **company** | [**PlatformCompanyUpdate**](PlatformCompanyUpdate.md)|  | 
 **logo** | **File**|  | 

### Return type

[**PlatformCompany**](PlatformCompany.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updateCompanyLegal

> PlatformCompany updateCompanyLegal(legal)

Update legal Company info

This method updates the legal info for your Company  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.CompanyApi();
let legal = new Brand4impactJavascriptClient.PlatformCompanyUpdateLegal(); // PlatformCompanyUpdateLegal | 
apiInstance.updateCompanyLegal(legal, (error, data, response) => {
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
 **legal** | [**PlatformCompanyUpdateLegal**](PlatformCompanyUpdateLegal.md)|  | 

### Return type

[**PlatformCompany**](PlatformCompany.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updateCompanyTopic

> PlatformCompany updateCompanyTopic(sdg)

Update selected topics for your Company

This method updates to which topics they can donate the vouchers of their campaigns  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.CompanyApi();
let sdg = new Brand4impactJavascriptClient.PlatformCompanyUpdateTopic(); // PlatformCompanyUpdateTopic | 
apiInstance.updateCompanyTopic(sdg, (error, data, response) => {
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
 **sdg** | [**PlatformCompanyUpdateTopic**](PlatformCompanyUpdateTopic.md)|  | 

### Return type

[**PlatformCompany**](PlatformCompany.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

