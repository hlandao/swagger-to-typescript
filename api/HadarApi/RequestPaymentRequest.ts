/// <reference path="api.d.ts" />

namespace HadarApi {
    'use strict';

    export interface RequestPaymentRequest {

        "payersList": Array<Payer>;

        "Amount"?: number;

        "transactionFreeText"?: string;
    }

}
