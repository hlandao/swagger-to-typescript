/// <reference path="api.d.ts" />

namespace HadarApi {
    'use strict';

    export interface ResetPasswordRequest {

        "bankDetails": BankDetails;

        "creditCardDetails": FullCreditCardDetails;

        "socialSecurityId": string;

        "newPassword": string;
    }

}
