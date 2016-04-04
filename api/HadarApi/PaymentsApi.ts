/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace HadarApi {
    'use strict';

    export class PaymentsApi {
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
         * 
         * Createa a new P2P customer
         * @param customerDetails The details of the P2P customer to create
         */
        public createCustomer (customerDetails: CreateCustomerRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<CreateCustomerResponse> {
            const localVarPath = this.basePath + '/p2p/customer';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'customerDetails' is set
            if (!customerDetails) {
                throw new Error('Missing required parameter customerDetails when calling createCustomer');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: customerDetails,
                
                
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
         * Create a payments for the given customer.
         * @param customerId The id of the customer that creates the payment.
         * @param paymentRequest The create payment request.
         */
        public createPayment (customerId: string, paymentRequest: CreatePaymentRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<CreatePaymentResponse> {
            const localVarPath = this.basePath + '/customers/{customerId}/pay'
                .replace('{' + 'customerId' + '}', String(customerId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'customerId' is set
            if (!customerId) {
                throw new Error('Missing required parameter customerId when calling createPayment');
            }
            // verify required parameter 'paymentRequest' is set
            if (!paymentRequest) {
                throw new Error('Missing required parameter paymentRequest when calling createPayment');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: paymentRequest,
                
                
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
         * Request a payment from counterparties
         * @param customerId The id of the customer that requests the payment
         * @param requestPaymentRequest The request payment request
         */
        public requestPayment (customerId: string, requestPaymentRequest: RequestPaymentRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<CreatePaymentRequestResponse> {
            const localVarPath = this.basePath + '/customers/{customerId}/request'
                .replace('{' + 'customerId' + '}', String(customerId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'customerId' is set
            if (!customerId) {
                throw new Error('Missing required parameter customerId when calling requestPayment');
            }
            // verify required parameter 'requestPaymentRequest' is set
            if (!requestPaymentRequest) {
                throw new Error('Missing required parameter requestPaymentRequest when calling requestPayment');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: requestPaymentRequest,
                
                
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
