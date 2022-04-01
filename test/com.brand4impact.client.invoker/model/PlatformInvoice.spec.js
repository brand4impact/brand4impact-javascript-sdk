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
    instance = new Brand4impactJavascriptClient.PlatformInvoice();
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

  describe('PlatformInvoice', function() {
    it('should create an instance of PlatformInvoice', function() {
      // uncomment below and update the code to test PlatformInvoice
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be.a(Brand4impactJavascriptClient.PlatformInvoice);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be();
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be();
    });

    it('should have the property startdate (base name: "startdate")', function() {
      // uncomment below and update the code to test the property startdate
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be();
    });

    it('should have the property enddate (base name: "enddate")', function() {
      // uncomment below and update the code to test the property enddate
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be();
    });

    it('should have the property issuedate (base name: "issuedate")', function() {
      // uncomment below and update the code to test the property issuedate
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "clientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be();
    });

    it('should have the property clientVat (base name: "clientVat")', function() {
      // uncomment below and update the code to test the property clientVat
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be();
    });

    it('should have the property clientAddress (base name: "clientAddress")', function() {
      // uncomment below and update the code to test the property clientAddress
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be();
    });

    it('should have the property entries (base name: "entries")', function() {
      // uncomment below and update the code to test the property entries
      //var instance = new Brand4impactJavascriptClient.PlatformInvoice();
      //expect(instance).to.be();
    });

  });

}));