/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace HadarApi {
    'use strict';

    export class HistoryApi {
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
         * Get conversations history for customer
         * Get conversations history for customer to display all customer conversations in a list before digging in
         * @param customerId The id of the customer that creates the payment.
         */
        public getConversationsHistory (customerId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<GetHistoryResponse> {
            const localVarPath = this.basePath + '/p2p/customer/{customerId}/historyList'
                .replace('{' + 'customerId' + '}', String(customerId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'customerId' is set
            if (!customerId) {
                throw new Error('Missing required parameter customerId when calling getConversationsHistory');
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
         * Get transaction history for counter party
         * Get transaction history for customer to display all customer transaction in a list after digging in
         * @param customerId The id of the customer that creates the payment.
         * @param counterpartyId The counterpartys id
         */
        public getCounterpartyHistory (customerId: string, counterpartyId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<GetCounterpartyHistoryResponse> {
            const localVarPath = this.basePath + '/p2p/customer/{customerId}/history/{counterpartyId}'
                .replace('{' + 'customerId' + '}', String(customerId))
                .replace('{' + 'counterpartyId' + '}', String(counterpartyId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'customerId' is set
            if (!customerId) {
                throw new Error('Missing required parameter customerId when calling getCounterpartyHistory');
            }
            // verify required parameter 'counterpartyId' is set
            if (!counterpartyId) {
                throw new Error('Missing required parameter counterpartyId when calling getCounterpartyHistory');
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
    }
}
