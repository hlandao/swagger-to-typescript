/// <reference path="api.d.ts" />

namespace HadarApi {
    'use strict';

    export interface CreatePaymentRequestResponse {

        "customerId": string;

        "BookDate"?: string;

        "CptyAcctNo"?: string;

        "CptyBnk"?: string;

        "CptyBrch"?: string;

        "CptyFullName"?: string;

        "DataId": string;

        "Frequency"?: string;

        "Id"?: string;

        "NoOfPayments"?: string;

        "P2pCustId"?: string;

        "P2pMobile"?: string;

        "StatusCode"?: string;

        "StatusDescrip"?: string;

        "TransFreeText"?: string;

        "TransReason"?: string;

        "TransRefId"?: string;

        "UnrestrTokenAmt"?: string;

        "ValueDate"?: string;
    }

}
