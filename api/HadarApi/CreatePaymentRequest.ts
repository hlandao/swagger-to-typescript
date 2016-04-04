/// <reference path="api.d.ts" />

namespace HadarApi {
    'use strict';

    export interface CreatePaymentRequest {

        /**
         * Transaction amount
         */
        "Amount": string;

        /**
         * UnrestrToken
         */
        "UnrestrToken"?: string;

        /**
         * Transaction reason.
         */
        "TransReason": string;

        /**
         * Transaction free text (aka message).
         */
        "TransFreeText"?: string;

        /**
         * Counterparty mobile phone.
         */
        "P2pMobile"?: string;

        /**
         * Counterparty customer ID.
         */
        "P2pCustId"?: string;

        /**
         * Counterparty beneficiary ID.
         */
        "BenefId"?: string;

        /**
         * Account number when creating bank wire payment.
         */
        "CptyAcctNo"?: string;

        /**
         * Bank number when creating bank wire payment.
         */
        "CptyBnk"?: string;

        /**
         * Branch number when creating bank wire payment.
         */
        "CptyBrch"?: string;

        /**
         * Beneficiary name when creating bank wire payment.
         */
        "CptyFullName"?: string;
    }

}
