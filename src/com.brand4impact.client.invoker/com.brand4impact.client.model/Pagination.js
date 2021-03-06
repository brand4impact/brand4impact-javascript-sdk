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
import ApiSort from './ApiSort';

/**
 * The Pagination model module.
 * @module com.brand4impact.client.invoker/com.brand4impact.client.model/Pagination
 * @version 0.0.1
 */
class Pagination {
    /**
     * Constructs a new <code>Pagination</code>.
     * @alias module:com.brand4impact.client.invoker/com.brand4impact.client.model/Pagination
     */
    constructor() { 
        
        Pagination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.brand4impact.client.invoker/com.brand4impact.client.model/Pagination} obj Optional instance to populate.
     * @return {module:com.brand4impact.client.invoker/com.brand4impact.client.model/Pagination} The populated <code>Pagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pagination();

            if (data.hasOwnProperty('pages')) {
                obj['pages'] = ApiClient.convertToType(data['pages'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('elements')) {
                obj['elements'] = ApiClient.convertToType(data['elements'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiSort.constructFromObject(data['sort']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} pages
 */
Pagination.prototype['pages'] = undefined;

/**
 * @member {Number} size
 */
Pagination.prototype['size'] = undefined;

/**
 * @member {Number} elements
 */
Pagination.prototype['elements'] = undefined;

/**
 * @member {module:com.brand4impact.client.invoker/com.brand4impact.client.model/ApiSort} sort
 */
Pagination.prototype['sort'] = undefined;






export default Pagination;

