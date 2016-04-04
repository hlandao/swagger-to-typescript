/// <reference path="api.d.ts" />

namespace HadarApi {
    'use strict';

    export interface BeneficiaryDetailsResponse extends IrisResponse {

        "AccountNo": string;

        "BankNo": string;

        "BeneficiaryID": string;

        "BranchNo": string;

        "FullName": string;

        "OwningCustomer": string;
    }

}
