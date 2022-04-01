# Brand4impactJavascriptClient.UtilsApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCountries**](UtilsApi.md#getCountries) | **GET** /rest/platform/utils/country | Get countries
[**getCurrencies**](UtilsApi.md#getCurrencies) | **GET** /rest/platform/utils/currency | Get currencies
[**getLanguages**](UtilsApi.md#getLanguages) | **GET** /rest/platform/utils/language | Get languages
[**getRoles**](UtilsApi.md#getRoles) | **GET** /rest/platform/utils/roles | Get roles
[**getZones**](UtilsApi.md#getZones) | **GET** /rest/platform/utils/zone | Get zones



## getCountries

> [PlatformCountry] getCountries(language)

Get countries

This method returns all the countries available, you can indicate a locale to do the search

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.UtilsApi();
let language = "language_example"; // String | List of countries
apiInstance.getCountries(language, (error, data, response) => {
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
 **language** | **String**| List of countries | 

### Return type

[**[PlatformCountry]**](PlatformCountry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrencies

> [PlatformCurrency] getCurrencies(language)

Get currencies

This method returns all the currencies available, you can indicate a locale to do the search

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.UtilsApi();
let language = "language_example"; // String | List of currencies
apiInstance.getCurrencies(language, (error, data, response) => {
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
 **language** | **String**| List of currencies | 

### Return type

[**[PlatformCurrency]**](PlatformCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLanguages

> [PlatformLanguage] getLanguages(language)

Get languages

This method returns all the languages available, you can indicate a locale to do the search

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.UtilsApi();
let language = "language_example"; // String | List of languages
apiInstance.getLanguages(language, (error, data, response) => {
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
 **language** | **String**| List of languages | 

### Return type

[**[PlatformLanguage]**](PlatformLanguage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoles

> [PlatformRole] getRoles()

Get roles

This method returns all the roles available, you can indicate a locale to do the search

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.UtilsApi();
apiInstance.getRoles((error, data, response) => {
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

[**[PlatformRole]**](PlatformRole.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZones

> [PlatformZone] getZones(language)

Get zones

This method returns all the zones available, you can indicate a locale to do the search

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.UtilsApi();
let language = "language_example"; // String | List of zones
apiInstance.getZones(language, (error, data, response) => {
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
 **language** | **String**| List of zones | 

### Return type

[**[PlatformZone]**](PlatformZone.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

