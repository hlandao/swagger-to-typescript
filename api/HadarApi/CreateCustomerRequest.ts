/// <reference path="api.d.ts" />

namespace HadarApi {
    'use strict';

    export interface CreateCustomerRequest {

        "MobileNumber": string;

        "CustFullName": string;

        /**
         * Customer National ID number
         */
        "CustNatId": string;

        /**
         * Bank and branch number combined
         */
        "BankSortCode": string;

        "FullAcctNo": string;

        "CcToken": string;

        "CcExpiryDate": string;

        "CcFirstSix": string;

        "CcLastFour": string;

        "TermsAccepted": string;

        "TacVersion": string;

        "customerId"?: string;

        /**
         * excisting LDB customer ID
         */
        "CustLink": string;

        "BlmP2pCustomer"?: string;
    }

}
