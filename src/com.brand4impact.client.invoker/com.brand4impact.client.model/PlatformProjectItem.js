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

import ApiClient from '../ApiClient';

/**
 * The PlatformProjectItem model module.
 * @module com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformProjectItem
 * @version 0.0.1
 */
class PlatformProjectItem {
    /**
     * Constructs a new <code>PlatformProjectItem</code>.
     * @alias module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformProjectItem
     */
    constructor() { 
        
        PlatformProjectItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformProjectItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformProjectItem} obj Optional instance to populate.
     * @return {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformProjectItem} The populated <code>PlatformProjectItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformProjectItem();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('primaryImageToken')) {
                obj['primaryImageToken'] = ApiClient.convertToType(data['primaryImageToken'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('budget')) {
                obj['budget'] = ApiClient.convertToType(data['budget'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
PlatformProjectItem.prototype['token'] = undefined;

/**
 * @member {String} id
 */
PlatformProjectItem.prototype['id'] = undefined;

/**
 * @member {String} title
 */
PlatformProjectItem.prototype['title'] = undefined;

/**
 * @member {String} description
 */
PlatformProjectItem.prototype['description'] = undefined;

/**
 * @member {String} status
 */
PlatformProjectItem.prototype['status'] = undefined;

/**
 * @member {String} primaryImageToken
 */
PlatformProjectItem.prototype['primaryImageToken'] = undefined;

/**
 * @member {String} country
 */
PlatformProjectItem.prototype['country'] = undefined;

/**
 * @member {Number} budget
 */
PlatformProjectItem.prototype['budget'] = undefined;

/**
 * @member {String} currency
 */
PlatformProjectItem.prototype['currency'] = undefined;






export default PlatformProjectItem;
