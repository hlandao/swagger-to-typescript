/// <reference path="api.d.ts" />

namespace HadarApi {
    'use strict';

    export interface VerifyCustomerRequest {

        /**
         * customer id
         */
        "P2pCustId": string;

        /**
         * Customer mobile number
         */
        "P2pMobile": string;

        /**
         * Customer bank account number
         */
        "P2pAcctNo": string;

        /**
         * Customer bank number
         */
        "P2pBankNo": string;

        /**
         * Customer branch number
         */
        "P2pBranchNo": string;

        /**
         * Customer national Id number
         */
        "P2pIdNo": string;
    }

}
