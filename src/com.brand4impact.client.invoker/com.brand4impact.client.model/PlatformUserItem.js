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
 * The PlatformUserItem model module.
 * @module com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformUserItem
 * @version 0.0.1
 */
class PlatformUserItem {
    /**
     * Constructs a new <code>PlatformUserItem</code>.
     * @alias module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformUserItem
     */
    constructor() { 
        
        PlatformUserItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformUserItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformUserItem} obj Optional instance to populate.
     * @return {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformUserItem} The populated <code>PlatformUserItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformUserItem();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
PlatformUserItem.prototype['token'] = undefined;

/**
 * @member {String} id
 */
PlatformUserItem.prototype['id'] = undefined;

/**
 * @member {String} firstname
 */
PlatformUserItem.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
PlatformUserItem.prototype['lastname'] = undefined;

/**
 * @member {String} email
 */
PlatformUserItem.prototype['email'] = undefined;

/**
 * @member {String} status
 */
PlatformUserItem.prototype['status'] = undefined;

/**
 * @member {Array.<String>} roles
 */
PlatformUserItem.prototype['roles'] = undefined;






export default PlatformUserItem;

