# Brand4impactJavascriptClient.ProjectApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProject**](ProjectApi.md#createProject) | **POST** /rest/platform/project | Create a new project
[**getProject**](ProjectApi.md#getProject) | **GET** /rest/platform/project/{token} | Get a single project
[**getProjects**](ProjectApi.md#getProjects) | **GET** /rest/platform/project | Get a set of projects
[**switchProject**](ProjectApi.md#switchProject) | **PUT** /rest/platform/project/{token}/switch | Switch project status
[**updateProject**](ProjectApi.md#updateProject) | **PUT** /rest/platform/project/{token} | Update a project



## createProject

> PlatformProject createProject(project, primaryImage, secondaryImage)

Create a new project

This method creates a new project within a NGO  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.ProjectApi();
let project = new Brand4impactJavascriptClient.PlatformProjectCreate(); // PlatformProjectCreate | 
let primaryImage = "/path/to/file"; // File | 
let secondaryImage = "/path/to/file"; // File | 
apiInstance.createProject(project, primaryImage, secondaryImage, (error, data, response) => {
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
 **project** | [**PlatformProjectCreate**](PlatformProjectCreate.md)|  | 
 **primaryImage** | **File**|  | 
 **secondaryImage** | **File**|  | 

### Return type

[**PlatformProject**](PlatformProject.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getProject

> PlatformProject getProject(token)

Get a single project

This method returns a specific project within your tenant  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.ProjectApi();
let token = "token_example"; // String | The unique token for the campaign.
apiInstance.getProject(token, (error, data, response) => {
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

[**PlatformProject**](PlatformProject.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjects

> PlatformProjectItemWrapper getProjects(opts)

Get a set of projects

This method returns a set of projects within your tenant    [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)[![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png &#39;pagination&#39;)](http://localhost:8080/backend/blog/home#pagination)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.ProjectApi();
let opts = {
  'descriptionLike': "descriptionLike_example", // String | 
  'country': "country_example", // String | The country
  'topicToken': "topicToken_example", // String | The topicToken
  'page': 56, // Number | The number of the page. Possible values: 0 to unlimited
  'size': 56, // Number | The number of items inside a page. Possible values: 1 to 100
  'sort': "sort_example" // String | The order direction for sorted results. Possible values: ASC or DESC
};
apiInstance.getProjects(opts, (error, data, response) => {
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
 **descriptionLike** | **String**|  | [optional] 
 **country** | **String**| The country | [optional] 
 **topicToken** | **String**| The topicToken | [optional] 
 **page** | **Number**| The number of the page. Possible values: 0 to unlimited | [optional] 
 **size** | **Number**| The number of items inside a page. Possible values: 1 to 100 | [optional] 
 **sort** | **String**| The order direction for sorted results. Possible values: ASC or DESC | [optional] 

### Return type

[**PlatformProjectItemWrapper**](PlatformProjectItemWrapper.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## switchProject

> PlatformProject switchProject(token)

Switch project status

This method switch the status of a specific project  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.ProjectApi();
let token = "token_example"; // String | 
apiInstance.switchProject(token, (error, data, response) => {
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

[**PlatformProject**](PlatformProject.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProject

> PlatformProject updateProject(token, project, primaryImage, secondaryImage)

Update a project

This method updates an existing project  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.ProjectApi();
let token = "token_example"; // String | 
let project = new Brand4impactJavascriptClient.PlatformProjectUpdate(); // PlatformProjectUpdate | 
let primaryImage = "/path/to/file"; // File | 
let secondaryImage = "/path/to/file"; // File | 
apiInstance.updateProject(token, project, primaryImage, secondaryImage, (error, data, response) => {
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
 **project** | [**PlatformProjectUpdate**](PlatformProjectUpdate.md)|  | 
 **primaryImage** | **File**|  | 
 **secondaryImage** | **File**|  | 

### Return type

[**PlatformProject**](PlatformProject.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

