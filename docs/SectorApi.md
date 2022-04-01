# Brand4impactJavascriptClient.SectorApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSector**](SectorApi.md#getSector) | **GET** /rest/platform/sector/{token} | Get a single sector
[**getSectors**](SectorApi.md#getSectors) | **GET** /rest/platform/sector | Get a set of sectors



## getSector

> PlatformSector getSector(token)

Get a single sector

This method returns a specific sector and represents principals industries  

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.SectorApi();
let token = "token_example"; // String | The unique token for the sector.
apiInstance.getSector(token, (error, data, response) => {
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
 **token** | **String**| The unique token for the sector. | 

### Return type

[**PlatformSector**](PlatformSector.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSectors

> PlatformSectorItemWrapper getSectors(opts)

Get a set of sectors

This method returns all the sectors according the filters and represents principals industries    [![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png &#39;pagination&#39;)](http://localhost:8080/backend/blog/home#pagination)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.SectorApi();
let opts = {
  'page': 56, // Number | The number of the page. Possible values: 0 to unlimited
  'size': 56, // Number | The number of items inside a page. Possible values: 1 to 100
  'sort': "sort_example" // String | The order direction for sorted results. Possible values: ASC or DESC
};
apiInstance.getSectors(opts, (error, data, response) => {
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

[**PlatformSectorItemWrapper**](PlatformSectorItemWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

