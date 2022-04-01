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
import PlatformCompany from '../com.brand4impact.client.model/PlatformCompany';
import PlatformCompanyCreate from '../com.brand4impact.client.model/PlatformCompanyCreate';
import PlatformCompanyCreateAdmin from '../com.brand4impact.client.model/PlatformCompanyCreateAdmin';
import PlatformCompanyCreateLegal from '../com.brand4impact.client.model/PlatformCompanyCreateLegal';
import PlatformCompanyUpdate from '../com.brand4impact.client.model/PlatformCompanyUpdate';
import PlatformCompanyUpdateLegal from '../com.brand4impact.client.model/PlatformCompanyUpdateLegal';
import PlatformCompanyUpdateTopic from '../com.brand4impact.client.model/PlatformCompanyUpdateTopic';
import RestError from '../com.brand4impact.client.model/RestError';

/**
* Company service.
* @module com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi
* @version 0.0.1
*/
export default class CompanyApi {

    /**
    * Constructs a new CompanyApi. 
    * @alias module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi
    * @class
    * @param {module:com.brand4impact.client.invoker/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.brand4impact.client.invoker/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCompany operation.
     * @callback module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi~createCompanyCallback
     * @param {String} error Error message, if any.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Company
     * Register a new company allows you to start to have visibility that your deserves, being visible to brand4impact users and opting to donate among a bunch of projects
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompanyCreate} company 
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompanyCreateLegal} legal 
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompanyCreateAdmin} admin 
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi~createCompanyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany}
     */
    createCompany(company, legal, admin, callback) {
      let postBody = null;
      // verify the required parameter 'company' is set
      if (company === undefined || company === null) {
        throw new Error("Missing the required parameter 'company' when calling createCompany");
      }
      // verify the required parameter 'legal' is set
      if (legal === undefined || legal === null) {
        throw new Error("Missing the required parameter 'legal' when calling createCompany");
      }
      // verify the required parameter 'admin' is set
      if (admin === undefined || admin === null) {
        throw new Error("Missing the required parameter 'admin' when calling createCompany");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'company': company,
        'legal': legal,
        'admin': admin
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = PlatformCompany;
      return this.apiClient.callApi(
        '/rest/platform/company', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCompany operation.
     * @callback module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi~getCompanyCallback
     * @param {String} error Error message, if any.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your Company
     * This method returns the Company inside your tenant (theres no need to know the Company token)  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png 'security')](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png 'multi-tenant')](http://localhost:8080/backend/blog/home#multitenant)
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi~getCompanyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany}
     */
    getCompany(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = PlatformCompany;
      return this.apiClient.callApi(
        '/rest/platform/company', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCompany operation.
     * @callback module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi~updateCompanyCallback
     * @param {String} error Error message, if any.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Company data
     * This method updates any data for the Company  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png 'security')](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png 'multi-tenant')](http://localhost:8080/backend/blog/home#multitenant)
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompanyUpdate} company 
     * @param {File} logo 
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi~updateCompanyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany}
     */
    updateCompany(company, logo, callback) {
      let postBody = null;
      // verify the required parameter 'company' is set
      if (company === undefined || company === null) {
        throw new Error("Missing the required parameter 'company' when calling updateCompany");
      }
      // verify the required parameter 'logo' is set
      if (logo === undefined || logo === null) {
        throw new Error("Missing the required parameter 'logo' when calling updateCompany");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'company': company,
        'logo': logo
      };

      let authNames = ['BearerAuthentication'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = PlatformCompany;
      return this.apiClient.callApi(
        '/rest/platform/company', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCompanyLegal operation.
     * @callback module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi~updateCompanyLegalCallback
     * @param {String} error Error message, if any.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update legal Company info
     * This method updates the legal info for your Company  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png 'security')](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png 'multi-tenant')](http://localhost:8080/backend/blog/home#multitenant)
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompanyUpdateLegal} legal 
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi~updateCompanyLegalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany}
     */
    updateCompanyLegal(legal, callback) {
      let postBody = null;
      // verify the required parameter 'legal' is set
      if (legal === undefined || legal === null) {
        throw new Error("Missing the required parameter 'legal' when calling updateCompanyLegal");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'legal': legal
      };

      let authNames = ['BearerAuthentication'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = PlatformCompany;
      return this.apiClient.callApi(
        '/rest/platform/company/legal', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCompanyTopic operation.
     * @callback module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi~updateCompanyTopicCallback
     * @param {String} error Error message, if any.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update selected topics for your Company
     * This method updates to which topics they can donate the vouchers of their campaigns  [![security](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/shield-check.png 'security')](http://localhost:8080/backend/blog/home#seguridad)[![multi-tenant](https://b4i.ams3.digitaloceanspaces.com/statics/swagger/users.png 'multi-tenant')](http://localhost:8080/backend/blog/home#multitenant)
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompanyUpdateTopic} sdg 
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi~updateCompanyTopicCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany}
     */
    updateCompanyTopic(sdg, callback) {
      let postBody = null;
      // verify the required parameter 'sdg' is set
      if (sdg === undefined || sdg === null) {
        throw new Error("Missing the required parameter 'sdg' when calling updateCompanyTopic");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'sdg': sdg
      };

      let authNames = ['BearerAuthentication'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = PlatformCompany;
      return this.apiClient.callApi(
        '/rest/platform/company/topic', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}