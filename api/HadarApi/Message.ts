/// <reference path="api.d.ts" />

namespace HadarApi {
    'use strict';

    export interface Message {

        "Amount": string;

        "OperationType": OperationType;

        /**
         * Reason of the transaction (used to be called reason)
         */
        "PaymentDetailsMvGroup"?: string;

        /**
         * free text
         */
        "FreeTextMvGroup"?: string;

        "OperationDateTime": string;

        "OperationStatus": OperationStatus;

        /**
         * The value date. the date when the trasaction will be final and processed
         */
        "ExposerDate"?: string;

        /**
         * Asmahta number
         */
        "TxnReference": string;
    }

}
