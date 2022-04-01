# Brand4impactJavascriptClient.SecurityApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJWTToken**](SecurityApi.md#getJWTToken) | **GET** /security/jwt | get JWT token



## getJWTToken

> SecurityUser getJWTToken()

get JWT token

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';
let defaultClient = Brand4impactJavascriptClient.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuthentication
let BasicAuthentication = defaultClient.authentications['BasicAuthentication'];
BasicAuthentication.username = 'YOUR USERNAME';
BasicAuthentication.password = 'YOUR PASSWORD';

let apiInstance = new Brand4impactJavascriptClient.SecurityApi();
apiInstance.getJWTToken((error, data, response) => {
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

[**SecurityUser**](SecurityUser.md)

### Authorization

[BasicAuthentication](../README.md#BasicAuthentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

