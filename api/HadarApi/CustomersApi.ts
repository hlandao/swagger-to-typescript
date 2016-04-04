/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace HadarApi {
    'use strict';

    export class CustomersApi {
        protected basePath = 'http://localhost:3020/api-iris/api.svc/IL0010001';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }

        /**
         * Change authenticated user password
         * Change authenticated user password
         * @param customerId The id of the customer that creates the payment.
         * @param changePasswordRequest The new password request
         */
        public changePassword (customerId: string, changePasswordRequest: ChangePasswordRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/customers/{customerId}/changePassword'
                .replace('{' + 'customerId' + '}', String(customerId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'customerId' is set
            if (!customerId) {
                throw new Error('Missing required parameter customerId when calling changePassword');
            }
            // verify required parameter 'changePasswordRequest' is set
            if (!changePasswordRequest) {
                throw new Error('Missing required parameter changePasswordRequest when calling changePassword');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: changePasswordRequest,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Get customer details by phone number
         * @param phoneNumber The phone number of the customer
         */
        public getCustomerByMobile (phoneNumber: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<GetCustomerByMobileEmbeded> {
            const localVarPath = this.basePath + '/p2p/customerByMobile/{phoneNumber}'
                .replace('{' + 'phoneNumber' + '}', String(phoneNumber));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'phoneNumber' is set
            if (!phoneNumber) {
                throw new Error('Missing required parameter phoneNumber when calling getCustomerByMobile');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Get the profile of a P2P customer
         * @param customerId The id of the customer
         */
        public getCustomerProfile (customerId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CustomerProfile> {
            const localVarPath = this.basePath + '/p2p/getProf/{customerId}/profile'
                .replace('{' + 'customerId' + '}', String(customerId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'customerId' is set
            if (!customerId) {
                throw new Error('Missing required parameter customerId when calling getCustomerProfile');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * Verify P2P customer for reset password
         * @param verifyCustomerRequest The verify customer request for reset password
         */
        public p2pVerifyCustomer (verifyCustomerRequest: VerifyCustomerRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<CustomerProfile> {
            const localVarPath = this.basePath + '/p2p/verifycustomer/profile';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'verifyCustomerRequest' is set
            if (!verifyCustomerRequest) {
                throw new Error('Missing required parameter verifyCustomerRequest when calling p2pVerifyCustomer');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                data: verifyCustomerRequest,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Reset password for unauthenticated user who forgot password
         * Reset password for unauthenticated user who forgot password
         * @param phoneNumber The phone number of the customer that reset the password
         * @param resetPasswordRequest The reset password request
         */
        public resetPassword (phoneNumber: string, resetPasswordRequest: ResetPasswordRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/customers/{phoneNumber}/resetPassword'
                .replace('{' + 'phoneNumber' + '}', String(phoneNumber));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'phoneNumber' is set
            if (!phoneNumber) {
                throw new Error('Missing required parameter phoneNumber when calling resetPassword');
            }
            // verify required parameter 'resetPasswordRequest' is set
            if (!resetPasswordRequest) {
                throw new Error('Missing required parameter resetPasswordRequest when calling resetPassword');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: resetPasswordRequest,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
    }
}
