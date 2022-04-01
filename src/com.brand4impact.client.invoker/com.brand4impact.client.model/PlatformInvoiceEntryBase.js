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
 * The PlatformInvoiceEntryBase model module.
 * @module com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformInvoiceEntryBase
 * @version 0.0.1
 */
class PlatformInvoiceEntryBase {
    /**
     * Constructs a new <code>PlatformInvoiceEntryBase</code>.
     * @alias module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformInvoiceEntryBase
     */
    constructor() { 
        
        PlatformInvoiceEntryBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformInvoiceEntryBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformInvoiceEntryBase} obj Optional instance to populate.
     * @return {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformInvoiceEntryBase} The populated <code>PlatformInvoiceEntryBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformInvoiceEntryBase();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} value
 */
PlatformInvoiceEntryBase.prototype['value'] = undefined;

/**
 * @member {String} key
 */
PlatformInvoiceEntryBase.prototype['key'] = undefined;






export default PlatformInvoiceEntryBase;
