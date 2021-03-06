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
    instance = new Brand4impactJavascriptClient.UserApi();
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

  describe('UserApi', function() {
    describe('changeUserPassword', function() {
      it('should call changeUserPassword successfully', function(done) {
        //uncomment below and update the code to test changeUserPassword
        //instance.changeUserPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('confirmUser', function() {
      it('should call confirmUser successfully', function(done) {
        //uncomment below and update the code to test confirmUser
        //instance.confirmUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUser', function() {
      it('should call getUser successfully', function(done) {
        //uncomment below and update the code to test getUser
        //instance.getUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsers', function() {
      it('should call getUsers successfully', function(done) {
        //uncomment below and update the code to test getUsers
        //instance.getUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inviteUser', function() {
      it('should call inviteUser successfully', function(done) {
        //uncomment below and update the code to test inviteUser
        //instance.inviteUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resetUserPassword', function() {
      it('should call resetUserPassword successfully', function(done) {
        //uncomment below and update the code to test resetUserPassword
        //instance.resetUserPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchUser', function() {
      it('should call switchUser successfully', function(done) {
        //uncomment below and update the code to test switchUser
        //instance.switchUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUser', function() {
      it('should call updateUser successfully', function(done) {
        //uncomment below and update the code to test updateUser
        //instance.updateUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUserExt', function() {
      it('should call updateUserExt successfully', function(done) {
        //uncomment below and update the code to test updateUserExt
        //instance.updateUserExt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
