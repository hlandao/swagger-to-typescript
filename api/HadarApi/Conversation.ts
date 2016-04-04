/// <reference path="api.d.ts" />

namespace HadarApi {
    'use strict';

    export interface Conversation {

        "BenefId": string;

        "FullName": string;

        /**
         * benef mobile number
         */
        "MobileNo": string;

        "OperationType": OperationType;

        "Amount": string;

        /**
         * P2P ID of counterparty if exist, if not, empty string
         */
        "P2pReceiver": string;

        "TransactionDate": string;

        /**
         * Temenos clusterfuck
         */
        "PrimaryKey"?: string;

        /**
         * Temenos clusterfuck
         */
        "Sender"?: string;
    }

}
