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
import Pagination from './Pagination';
import PlatformSectorItem from './PlatformSectorItem';

/**
 * The PlatformSectorItemWrapper model module.
 * @module com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformSectorItemWrapper
 * @version 0.0.1
 */
class PlatformSectorItemWrapper {
    /**
     * Constructs a new <code>PlatformSectorItemWrapper</code>.
     * @alias module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformSectorItemWrapper
     */
    constructor() { 
        
        PlatformSectorItemWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformSectorItemWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformSectorItemWrapper} obj Optional instance to populate.
     * @return {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformSectorItemWrapper} The populated <code>PlatformSectorItemWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformSectorItemWrapper();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [PlatformSectorItem]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformSectorItem>} items
 */
PlatformSectorItemWrapper.prototype['items'] = undefined;

/**
 * @member {module:com.brand4impact.client.invoker/com.brand4impact.client.model/Pagination} pagination
 */
PlatformSectorItemWrapper.prototype['pagination'] = undefined;






export default PlatformSectorItemWrapper;

