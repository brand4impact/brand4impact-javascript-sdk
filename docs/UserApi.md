# Brand4impactJavascriptClient.UserApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeUserPassword**](UserApi.md#changeUserPassword) | **PUT** /rest/platform/user/{token}/changepassword | Change user&#39;s password
[**confirmUser**](UserApi.md#confirmUser) | **POST** /rest/platform/user/{token} | Activate a user
[**getUser**](UserApi.md#getUser) | **GET** /rest/platform/user/{token} | Get a single user
[**getUsers**](UserApi.md#getUsers) | **GET** /rest/platform/user | Get a set of users
[**inviteUser**](UserApi.md#inviteUser) | **POST** /rest/platform/user/invite | Invite a new user
[**resetUserPassword**](UserApi.md#resetUserPassword) | **PUT** /rest/platform/user/resetpassword | Reset user&#39;s password
[**switchUser**](UserApi.md#switchUser) | **PUT** /rest/platform/user/{token}/switch | Switch user&#39;s status
[**updateUser**](UserApi.md#updateUser) | **PUT** /rest/platform/user/{token} | Update user data
[**updateUserExt**](UserApi.md#updateUserExt) | **PUT** /rest/platform/user/{token}/ext | Update sensitive user data



## changeUserPassword

> PlatformUser changeUserPassword(token, user)

Change user&#39;s password

This method updates the password of a specific user  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.UserApi();
let token = "token_example"; // String | 
let user = new Brand4impactJavascriptClient.PlatformUserChangePassword(); // PlatformUserChangePassword | 
apiInstance.changeUserPassword(token, user, (error, data, response) => {
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
 **user** | [**PlatformUserChangePassword**](PlatformUserChangePassword.md)|  | 

### Return type

[**PlatformUser**](PlatformUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## confirmUser

> PlatformUser confirmUser(token, user)

Activate a user

This method activate an invited user in the Company/NGO  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.UserApi();
let token = "token_example"; // String | 
let user = new Brand4impactJavascriptClient.PlatformUserConfirm(); // PlatformUserConfirm | 
apiInstance.confirmUser(token, user, (error, data, response) => {
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
 **user** | [**PlatformUserConfirm**](PlatformUserConfirm.md)|  | 

### Return type

[**PlatformUser**](PlatformUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getUser

> PlatformUser getUser(token)

Get a single user

This method returns a specific user within your tenant  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.UserApi();
let token = "token_example"; // String | 
apiInstance.getUser(token, (error, data, response) => {
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

[**PlatformUser**](PlatformUser.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> PlatformUserItemWrapper getUsers(opts)

Get a set of users

This method returns a set of users within your tenant    [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)[![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png &#39;pagination&#39;)](http://localhost:8080/backend/blog/home#pagination)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.UserApi();
let opts = {
  'firstnameLike': "firstnameLike_example", // String | The name of the filter
  'page': 56, // Number | The number of the page. Possible values: 0 to unlimited
  'size': 56, // Number | The number of items inside a page. Possible values: 1 to 100
  'sort': "sort_example" // String | The order direction for sorted results. Possible values: ASC or DESC
};
apiInstance.getUsers(opts, (error, data, response) => {
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
 **firstnameLike** | **String**| The name of the filter | [optional] 
 **page** | **Number**| The number of the page. Possible values: 0 to unlimited | [optional] 
 **size** | **Number**| The number of items inside a page. Possible values: 1 to 100 | [optional] 
 **sort** | **String**| The order direction for sorted results. Possible values: ASC or DESC | [optional] 

### Return type

[**PlatformUserItemWrapper**](PlatformUserItemWrapper.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inviteUser

> PlatformUser inviteUser(user)

Invite a new user

This method invites a user to join a Company/NGO  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.UserApi();
let user = new Brand4impactJavascriptClient.PlatformUserInvite(); // PlatformUserInvite | 
apiInstance.inviteUser(user, (error, data, response) => {
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
 **user** | [**PlatformUserInvite**](PlatformUserInvite.md)|  | 

### Return type

[**PlatformUser**](PlatformUser.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## resetUserPassword

> PlatformUser resetUserPassword(user)

Reset user&#39;s password

This method reset the password of a specific user by sending an email to the user with a link to reset the password  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.UserApi();
let user = new Brand4impactJavascriptClient.PlatformUserResetPassword(); // PlatformUserResetPassword | 
apiInstance.resetUserPassword(user, (error, data, response) => {
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
 **user** | [**PlatformUserResetPassword**](PlatformUserResetPassword.md)|  | 

### Return type

[**PlatformUser**](PlatformUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## switchUser

> PlatformUser switchUser(token)

Switch user&#39;s status

This method updates the user status, possible values are: active|inactive  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.UserApi();
let token = "token_example"; // String | 
apiInstance.switchUser(token, (error, data, response) => {
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

[**PlatformUser**](PlatformUser.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> PlatformUser updateUser(token, user)

Update user data

This method updates personal data for a user  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.UserApi();
let token = "token_example"; // String | 
let user = new Brand4impactJavascriptClient.PlatformUserUpdate(); // PlatformUserUpdate | 
apiInstance.updateUser(token, user, (error, data, response) => {
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
 **user** | [**PlatformUserUpdate**](PlatformUserUpdate.md)|  | 

### Return type

[**PlatformUser**](PlatformUser.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updateUserExt

> PlatformUser updateUserExt(token, user)

Update sensitive user data

This method updates sensitive user data  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png &#39;security&#39;)](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png &#39;multi-tenant&#39;)](http://localhost:8080/backend/blog/home#multitenant)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuthentication
let BearerAuthentication = defaultClient.authentications['BearerAuthentication'];
BearerAuthentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Brand4impactJavascriptClient.UserApi();
let token = "token_example"; // String | 
let user = new Brand4impactJavascriptClient.PlatformUserUpdateExt(); // PlatformUserUpdateExt | 
apiInstance.updateUserExt(token, user, (error, data, response) => {
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
 **user** | [**PlatformUserUpdateExt**](PlatformUserUpdateExt.md)|  | 

### Return type

[**PlatformUser**](PlatformUser.md)

### Authorization

[BearerAuthentication](../README.md#BearerAuthentication)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

