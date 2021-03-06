/**
 * Total API Reference
 * Este contrato se usara para generar los clientes con todos los servicios necesarios.  `!Uso exclusivo interno!`               --- 
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@brand4impact.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import PlatformVoucher from '../com.brand4impact.client.model/PlatformVoucher';
import PlatformVoucherItemWrapper from '../com.brand4impact.client.model/PlatformVoucherItemWrapper';
import RestError from '../com.brand4impact.client.model/RestError';

/**
* Voucher service.
* @module com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi
* @version 0.0.1
*/
export default class VoucherApi {

    /**
    * Constructs a new VoucherApi. 
    * @alias module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi
    * @class
    * @param {module:com.brand4impact.client.invoker/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.brand4impact.client.invoker/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the downloadVoucherQr operation.
     * @callback module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi~downloadVoucherQrCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download the voucher QR image
     * This method returns a QR image of the voucher within your tenant to be able to access the donation graphically  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png 'security')](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png 'multi-tenant')](http://localhost:8080/backend/blog/home#multitenant)
     * @param {String} token 
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi~downloadVoucherQrCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    downloadVoucherQr(token, callback) {
      let postBody = null;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling downloadVoucherQr");
      }

      let pathParams = {
        'token': token
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuthentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/rest/platform/voucher/{token}/qr', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the downloadVouchersFile operation.
     * @callback module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi~downloadVouchersFileCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a set of voucher's links file
     * This method returns a set of voucher's links file within your tenant    [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png 'security')](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png 'multi-tenant')](http://localhost:8080/backend/blog/home#multitenant)[![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png 'pagination')](http://localhost:8080/backend/blog/home#pagination)
     * @param {String} campaignToken The unique token for the campaign.
     * @param {Object} opts Optional parameters
     * @param {String} opts.status The status of the voucher. Possible values: Active or Inactive
     * @param {Number} opts.min Min value of the voucher
     * @param {Number} opts.max Max value of the voucher
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi~downloadVouchersFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    downloadVouchersFile(campaignToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'campaignToken' is set
      if (campaignToken === undefined || campaignToken === null) {
        throw new Error("Missing the required parameter 'campaignToken' when calling downloadVouchersFile");
      }

      let pathParams = {
        'campaignToken': campaignToken
      };
      let queryParams = {
        'status': opts['status'],
        'min': opts['min'],
        'max': opts['max']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuthentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/rest/platform/voucher/campaign/{campaignToken}/file', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the downloadVouchersQr operation.
     * @callback module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi~downloadVouchersQrCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a set of voucher QR images
     * This method returns a set of voucher QR images within your tenant    [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png 'security')](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png 'multi-tenant')](http://localhost:8080/backend/blog/home#multitenant)[![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png 'pagination')](http://localhost:8080/backend/blog/home#pagination)
     * @param {String} campaignToken The unique token for the campaign.
     * @param {Object} opts Optional parameters
     * @param {String} opts.status The status of the voucher. Possible values: Active or Inactive
     * @param {Number} opts.min Min value of the voucher
     * @param {Number} opts.max Max value of the voucher
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi~downloadVouchersQrCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    downloadVouchersQr(campaignToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'campaignToken' is set
      if (campaignToken === undefined || campaignToken === null) {
        throw new Error("Missing the required parameter 'campaignToken' when calling downloadVouchersQr");
      }

      let pathParams = {
        'campaignToken': campaignToken
      };
      let queryParams = {
        'status': opts['status'],
        'min': opts['min'],
        'max': opts['max']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuthentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/rest/platform/voucher/campaign/{campaignToken}/qr', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVoucher operation.
     * @callback module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi~getVoucherCallback
     * @param {String} error Error message, if any.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformVoucher} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single voucher
     * This method returns a specific voucher within your tenant  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png 'security')](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png 'multi-tenant')](http://localhost:8080/backend/blog/home#multitenant)
     * @param {String} token 
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi~getVoucherCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformVoucher}
     */
    getVoucher(token, callback) {
      let postBody = null;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling getVoucher");
      }

      let pathParams = {
        'token': token
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuthentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PlatformVoucher;
      return this.apiClient.callApi(
        '/rest/platform/voucher/{token}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVouchers operation.
     * @callback module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi~getVouchersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformVoucherItemWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a set of vouchers
     * This method returns a set of vouchers within your tenant    [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png 'security')](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png 'multi-tenant')](http://localhost:8080/backend/blog/home#multitenant)[![pagination](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/brackets.png 'pagination')](http://localhost:8080/backend/blog/home#pagination)
     * @param {String} campaignToken The unique token for the campaign.
     * @param {Object} opts Optional parameters
     * @param {String} opts.status The status of the voucher. Possible values: Active or Inactive
     * @param {Number} opts.min Min value of the voucher
     * @param {Number} opts.max Max value of the voucher
     * @param {Number} opts.page The number of the page. Possible values: 0 to unlimited
     * @param {Number} opts.size The number of items inside a page. Possible values: 1 to 100
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi~getVouchersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformVoucherItemWrapper}
     */
    getVouchers(campaignToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'campaignToken' is set
      if (campaignToken === undefined || campaignToken === null) {
        throw new Error("Missing the required parameter 'campaignToken' when calling getVouchers");
      }

      let pathParams = {
        'campaignToken': campaignToken
      };
      let queryParams = {
        'status': opts['status'],
        'min': opts['min'],
        'max': opts['max'],
        'page': opts['page'],
        'size': opts['size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuthentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PlatformVoucherItemWrapper;
      return this.apiClient.callApi(
        '/rest/platform/voucher/campaign/{campaignToken}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
