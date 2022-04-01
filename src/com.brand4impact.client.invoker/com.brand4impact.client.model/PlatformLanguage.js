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
 * The PlatformLanguage model module.
 * @module com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformLanguage
 * @version 0.0.1
 */
class PlatformLanguage {
    /**
     * Constructs a new <code>PlatformLanguage</code>.
     * @alias module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformLanguage
     */
    constructor() { 
        
        PlatformLanguage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformLanguage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformLanguage} obj Optional instance to populate.
     * @return {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformLanguage} The populated <code>PlatformLanguage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformLanguage();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PlatformLanguage.prototype['name'] = undefined;

/**
 * @member {String} code
 */
PlatformLanguage.prototype['code'] = undefined;






export default PlatformLanguage;
