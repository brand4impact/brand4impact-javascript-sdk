# Brand4impactJavascriptClient.TopicApi

All URIs are relative to *http://localhost:8080/backend*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTopic**](TopicApi.md#getTopic) | **GET** /rest/platform/topic/{token} | Get a single topic
[**getTopics**](TopicApi.md#getTopics) | **GET** /rest/platform/topic | Get a set of topics



## getTopic

> PlatformTopic getTopic(token)

Get a single topic

This method returns a specific topic  A topic refers to the 17th SDG objectives [(United Nations)](https://sdgs.un.org/goals)  

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.TopicApi();
let token = "token_example"; // String | The unique token for the topic.
apiInstance.getTopic(token, (error, data, response) => {
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
 **token** | **String**| The unique token for the topic. | 

### Return type

[**PlatformTopic**](PlatformTopic.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTopics

> PlatformTopicItemWrapper getTopics(opts)

Get a set of topics

This method returns all the topics according the filters  A topic refers to the 17th SDG objectives [(United Nations)](https://sdgs.un.org/goals)    [![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png &#39;pagination&#39;)](http://localhost:8080/backend/blog/home#pagination)

### Example

```javascript
import Brand4impactJavascriptClient from 'brand4impact-javascript-client';

let apiInstance = new Brand4impactJavascriptClient.TopicApi();
let opts = {
  'titleLike': "titleLike_example", // String | The name of the filter
  'page': 56, // Number | The number of the page. Possible values: 0 to unlimited
  'size': 56, // Number | The number of items inside a page. Possible values: 1 to 100
  'sort': "sort_example" // String | The order direction for sorted results. Possible values: ASC or DESC
};
apiInstance.getTopics(opts, (error, data, response) => {
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
 **titleLike** | **String**| The name of the filter | [optional] 
 **page** | **Number**| The number of the page. Possible values: 0 to unlimited | [optional] 
 **size** | **Number**| The number of items inside a page. Possible values: 1 to 100 | [optional] 
 **sort** | **String**| The order direction for sorted results. Possible values: ASC or DESC | [optional] 

### Return type

[**PlatformTopicItemWrapper**](PlatformTopicItemWrapper.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

