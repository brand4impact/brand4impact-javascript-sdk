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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.brand4impact.client.invoker/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.brand4impact.client.invoker/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Brand4impactJavascriptClient);
  }
}(this, function(expect, Brand4impactJavascriptClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Brand4impactJavascriptClient.AssetApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AssetApi', function() {
    describe('getAsset', function() {
      it('should call getAsset successfully', function(done) {
        //uncomment below and update the code to test getAsset
        //instance.getAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssets', function() {
      it('should call getAssets successfully', function(done) {
        //uncomment below and update the code to test getAssets
        //instance.getAssets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
