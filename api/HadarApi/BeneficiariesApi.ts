/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace HadarApi {
    'use strict';

    export class BeneficiariesApi {
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
         * Get beneficiary details for customer and beneficiary id
         * 
         * @param customerId The id of the customer that creates the payment.
         * @param beneficiaryId The id of the beneficiary that we want to fetch.
         */
        public getBeneficiaryDetails (customerId: string, beneficiaryId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<BeneficiaryDetailsResponse> {
            const localVarPath = this.basePath + '/p2p/ben/{customerId}/beneficiary/{beneficiaryId}'
                .replace('{' + 'customerId' + '}', String(customerId))
                .replace('{' + 'beneficiaryId' + '}', String(beneficiaryId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'customerId' is set
            if (!customerId) {
                throw new Error('Missing required parameter customerId when calling getBeneficiaryDetails');
            }
            // verify required parameter 'beneficiaryId' is set
            if (!beneficiaryId) {
                throw new Error('Missing required parameter beneficiaryId when calling getBeneficiaryDetails');
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
