import { HttpStatus } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';

import { errorStatusMessages } from 'const';

import { ErrorService } from '../error.service';

describe('ErrorService', () => {
  let service: ErrorService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorService],
    }).compile();

    service = module.get<ErrorService>(ErrorService);
  });

  describe('when throwUnprocessableError is called', () => {
    const testError = {
      message: errorStatusMessages[HttpStatus.UNPROCESSABLE_ENTITY],
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    };

    test('an array of errors for the username field should be returned, when one error is passed', () => {
      try {
        service.throwUnprocessableError({ username: 'username is too short' });
      } catch (error) {
        expect(error.response).toStrictEqual({ ...testError, errors: { username: ['username is too short'] } });
      }
    });

    test('an array of errors for the username field should be returned, when an error array is passed', () => {
      try {
        service.throwUnprocessableError({ username: ['username is invalid'] });
      } catch (error) {
        expect(error.response).toStrictEqual({ ...testError, errors: { username: ['username is invalid'] } });
      }
    });
  });
});
