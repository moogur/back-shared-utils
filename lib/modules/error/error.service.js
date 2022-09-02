var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getValidationErrorMessageForResponseFront } from '../../utils';
let ErrorService = class ErrorService {
    throwUnprocessableError(errors) {
        throw new HttpException(getValidationErrorMessageForResponseFront(errors), HttpStatus.UNPROCESSABLE_ENTITY);
    }
};
ErrorService = __decorate([
    Injectable()
], ErrorService);
export { ErrorService };
//# sourceMappingURL=error.service.js.map