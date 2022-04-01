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
 * The PlatformNgoAddress model module.
 * @module com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformNgoAddress
 * @version 0.0.1
 */
class PlatformNgoAddress {
    /**
     * Constructs a new <code>PlatformNgoAddress</code>.
     * @alias module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformNgoAddress
     */
    constructor() { 
        
        PlatformNgoAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformNgoAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformNgoAddress} obj Optional instance to populate.
     * @return {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformNgoAddress} The populated <code>PlatformNgoAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformNgoAddress();

            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('other')) {
                obj['other'] = ApiClient.convertToType(data['other'], 'String');
            }
            if (data.hasOwnProperty('postalcode')) {
                obj['postalcode'] = ApiClient.convertToType(data['postalcode'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} street
 */
PlatformNgoAddress.prototype['street'] = undefined;

/**
 * @member {String} other
 */
PlatformNgoAddress.prototype['other'] = undefined;

/**
 * @member {String} postalcode
 */
PlatformNgoAddress.prototype['postalcode'] = undefined;

/**
 * @member {String} city
 */
PlatformNgoAddress.prototype['city'] = undefined;

/**
 * @member {String} country
 */
PlatformNgoAddress.prototype['country'] = undefined;






export default PlatformNgoAddress;

