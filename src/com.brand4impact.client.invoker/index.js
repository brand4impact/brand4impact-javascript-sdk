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


import ApiClient from './ApiClient';
import ApiSort from './com.brand4impact.client.model/ApiSort';
import Pagination from './com.brand4impact.client.model/Pagination';
import PlatformAsset from './com.brand4impact.client.model/PlatformAsset';
import PlatformAssetItem from './com.brand4impact.client.model/PlatformAssetItem';
import PlatformAssetItemWrapper from './com.brand4impact.client.model/PlatformAssetItemWrapper';
import PlatformCampaign from './com.brand4impact.client.model/PlatformCampaign';
import PlatformCampaignItem from './com.brand4impact.client.model/PlatformCampaignItem';
import PlatformCampaignItemWrapper from './com.brand4impact.client.model/PlatformCampaignItemWrapper';
import PlatformCompany from './com.brand4impact.client.model/PlatformCompany';
import PlatformCompanyAddress from './com.brand4impact.client.model/PlatformCompanyAddress';
import PlatformCompanyLegal from './com.brand4impact.client.model/PlatformCompanyLegal';
import PlatformCompanyLegalAddress from './com.brand4impact.client.model/PlatformCompanyLegalAddress';
import PlatformCountry from './com.brand4impact.client.model/PlatformCountry';
import PlatformCurrency from './com.brand4impact.client.model/PlatformCurrency';
import PlatformInvoice from './com.brand4impact.client.model/PlatformInvoice';
import PlatformInvoiceEntry from './com.brand4impact.client.model/PlatformInvoiceEntry';
import PlatformInvoiceEntryBase from './com.brand4impact.client.model/PlatformInvoiceEntryBase';
import PlatformInvoiceItem from './com.brand4impact.client.model/PlatformInvoiceItem';
import PlatformInvoiceItemWrapper from './com.brand4impact.client.model/PlatformInvoiceItemWrapper';
import PlatformLanguage from './com.brand4impact.client.model/PlatformLanguage';
import PlatformNgo from './com.brand4impact.client.model/PlatformNgo';
import PlatformNgoAddress from './com.brand4impact.client.model/PlatformNgoAddress';
import PlatformNgoLegal from './com.brand4impact.client.model/PlatformNgoLegal';
import PlatformNgoLegalAddress from './com.brand4impact.client.model/PlatformNgoLegalAddress';
import PlatformProject from './com.brand4impact.client.model/PlatformProject';
import PlatformProjectItem from './com.brand4impact.client.model/PlatformProjectItem';
import PlatformProjectItemWrapper from './com.brand4impact.client.model/PlatformProjectItemWrapper';
import PlatformRole from './com.brand4impact.client.model/PlatformRole';
import PlatformSector from './com.brand4impact.client.model/PlatformSector';
import PlatformSectorItem from './com.brand4impact.client.model/PlatformSectorItem';
import PlatformSectorItemWrapper from './com.brand4impact.client.model/PlatformSectorItemWrapper';
import PlatformTopic from './com.brand4impact.client.model/PlatformTopic';
import PlatformTopicItem from './com.brand4impact.client.model/PlatformTopicItem';
import PlatformTopicItemWrapper from './com.brand4impact.client.model/PlatformTopicItemWrapper';
import PlatformUser from './com.brand4impact.client.model/PlatformUser';
import PlatformUserItem from './com.brand4impact.client.model/PlatformUserItem';
import PlatformUserItemWrapper from './com.brand4impact.client.model/PlatformUserItemWrapper';
import PlatformVoucher from './com.brand4impact.client.model/PlatformVoucher';
import PlatformVoucherItem from './com.brand4impact.client.model/PlatformVoucherItem';
import PlatformVoucherItemWrapper from './com.brand4impact.client.model/PlatformVoucherItemWrapper';
import PlatformZone from './com.brand4impact.client.model/PlatformZone';
import RestError from './com.brand4impact.client.model/RestError';
import SecurityUser from './com.brand4impact.client.model/SecurityUser';
import AssetApi from './com.brand4impact.client.api/AssetApi';
import CampaignApi from './com.brand4impact.client.api/CampaignApi';
import CompanyApi from './com.brand4impact.client.api/CompanyApi';
import InvoiceApi from './com.brand4impact.client.api/InvoiceApi';
import NgoApi from './com.brand4impact.client.api/NgoApi';
import ProjectApi from './com.brand4impact.client.api/ProjectApi';
import SectorApi from './com.brand4impact.client.api/SectorApi';
import SecurityApi from './com.brand4impact.client.api/SecurityApi';
import TopicApi from './com.brand4impact.client.api/TopicApi';
import UserApi from './com.brand4impact.client.api/UserApi';
import UtilsApi from './com.brand4impact.client.api/UtilsApi';
import VoucherApi from './com.brand4impact.client.api/VoucherApi';


/**
* Javascript SDK for Brand4Impact.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Brand4impactJavascriptClient = require('com.brand4impact.client.invoker/index'); // See note below*.
* var xxxSvc = new Brand4impactJavascriptClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Brand4impactJavascriptClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['com.brand4impact.client.invoker/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Brand4impactJavascriptClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Brand4impactJavascriptClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module com.brand4impact.client.invoker/index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:com.brand4impact.client.invoker/ApiClient}
     */
    ApiClient,

    /**
     * The ApiSort model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/ApiSort}
     */
    ApiSort,

    /**
     * The Pagination model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/Pagination}
     */
    Pagination,

    /**
     * The PlatformAsset model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformAsset}
     */
    PlatformAsset,

    /**
     * The PlatformAssetItem model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformAssetItem}
     */
    PlatformAssetItem,

    /**
     * The PlatformAssetItemWrapper model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformAssetItemWrapper}
     */
    PlatformAssetItemWrapper,

    /**
     * The PlatformCampaign model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCampaign}
     */
    PlatformCampaign,

    /**
     * The PlatformCampaignItem model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCampaignItem}
     */
    PlatformCampaignItem,

    /**
     * The PlatformCampaignItemWrapper model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCampaignItemWrapper}
     */
    PlatformCampaignItemWrapper,

    /**
     * The PlatformCompany model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompany}
     */
    PlatformCompany,

    /**
     * The PlatformCompanyAddress model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompanyAddress}
     */
    PlatformCompanyAddress,

    /**
     * The PlatformCompanyLegal model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompanyLegal}
     */
    PlatformCompanyLegal,

    /**
     * The PlatformCompanyLegalAddress model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCompanyLegalAddress}
     */
    PlatformCompanyLegalAddress,

    /**
     * The PlatformCountry model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCountry}
     */
    PlatformCountry,

    /**
     * The PlatformCurrency model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformCurrency}
     */
    PlatformCurrency,

    /**
     * The PlatformInvoice model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformInvoice}
     */
    PlatformInvoice,

    /**
     * The PlatformInvoiceEntry model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformInvoiceEntry}
     */
    PlatformInvoiceEntry,

    /**
     * The PlatformInvoiceEntryBase model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformInvoiceEntryBase}
     */
    PlatformInvoiceEntryBase,

    /**
     * The PlatformInvoiceItem model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformInvoiceItem}
     */
    PlatformInvoiceItem,

    /**
     * The PlatformInvoiceItemWrapper model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformInvoiceItemWrapper}
     */
    PlatformInvoiceItemWrapper,

    /**
     * The PlatformLanguage model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformLanguage}
     */
    PlatformLanguage,

    /**
     * The PlatformNgo model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformNgo}
     */
    PlatformNgo,

    /**
     * The PlatformNgoAddress model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformNgoAddress}
     */
    PlatformNgoAddress,

    /**
     * The PlatformNgoLegal model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformNgoLegal}
     */
    PlatformNgoLegal,

    /**
     * The PlatformNgoLegalAddress model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformNgoLegalAddress}
     */
    PlatformNgoLegalAddress,

    /**
     * The PlatformProject model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformProject}
     */
    PlatformProject,

    /**
     * The PlatformProjectItem model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformProjectItem}
     */
    PlatformProjectItem,

    /**
     * The PlatformProjectItemWrapper model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformProjectItemWrapper}
     */
    PlatformProjectItemWrapper,

    /**
     * The PlatformRole model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformRole}
     */
    PlatformRole,

    /**
     * The PlatformSector model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformSector}
     */
    PlatformSector,

    /**
     * The PlatformSectorItem model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformSectorItem}
     */
    PlatformSectorItem,

    /**
     * The PlatformSectorItemWrapper model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformSectorItemWrapper}
     */
    PlatformSectorItemWrapper,

    /**
     * The PlatformTopic model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformTopic}
     */
    PlatformTopic,

    /**
     * The PlatformTopicItem model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformTopicItem}
     */
    PlatformTopicItem,

    /**
     * The PlatformTopicItemWrapper model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformTopicItemWrapper}
     */
    PlatformTopicItemWrapper,

    /**
     * The PlatformUser model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformUser}
     */
    PlatformUser,

    /**
     * The PlatformUserItem model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformUserItem}
     */
    PlatformUserItem,

    /**
     * The PlatformUserItemWrapper model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformUserItemWrapper}
     */
    PlatformUserItemWrapper,

    /**
     * The PlatformVoucher model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformVoucher}
     */
    PlatformVoucher,

    /**
     * The PlatformVoucherItem model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformVoucherItem}
     */
    PlatformVoucherItem,

    /**
     * The PlatformVoucherItemWrapper model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformVoucherItemWrapper}
     */
    PlatformVoucherItemWrapper,

    /**
     * The PlatformZone model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/PlatformZone}
     */
    PlatformZone,

    /**
     * The RestError model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/RestError}
     */
    RestError,

    /**
     * The SecurityUser model constructor.
     * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.model/SecurityUser}
     */
    SecurityUser,

    /**
    * The AssetApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/AssetApi}
    */
    AssetApi,

    /**
    * The CampaignApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/CampaignApi}
    */
    CampaignApi,

    /**
    * The CompanyApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/CompanyApi}
    */
    CompanyApi,

    /**
    * The InvoiceApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/InvoiceApi}
    */
    InvoiceApi,

    /**
    * The NgoApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/NgoApi}
    */
    NgoApi,

    /**
    * The ProjectApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/ProjectApi}
    */
    ProjectApi,

    /**
    * The SectorApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/SectorApi}
    */
    SectorApi,

    /**
    * The SecurityApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/SecurityApi}
    */
    SecurityApi,

    /**
    * The TopicApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/TopicApi}
    */
    TopicApi,

    /**
    * The UserApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/UserApi}
    */
    UserApi,

    /**
    * The UtilsApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/UtilsApi}
    */
    UtilsApi,

    /**
    * The VoucherApi service constructor.
    * @property {module:com.brand4impact.client.invoker/com.brand4impact.client.api/VoucherApi}
    */
    VoucherApi
};