# <p align="center" style="font-size: 30px; font-weight: bold; color: cyan;">Shared utils for backend applications</p>

## Описание

Разные вспомогательные утилиты для сервисов бекенда. Написаны на typescript для nestjs и typeorm.

Необходимо наличие данных npm пакетов

```npm
"@nestjs/common": "^9.0.0",
"@nestjs/swagger": "^6.1.0",
"class-transformer": "^0.5.1",
"class-validator": "^0.13.2",
"lodash": "^4.17.21",
"swagger-ui-express": "^4.5.0",
"typeorm": "^0.3.9"
```

## Компоненты

### `configs`

Базовые конфиги

- `baseCookieConfig` - конфиг для кук
- `baseOrmconfig` - конфиг typeorm

### `const`

Разные константы для всех сервисов

- `invalidCharacter` - символ, который добавляется, если нужно сделать поле не валидным, например при удалении пользователя, поля email, username, password помечаются этом символом
- `minDateIso, minDateTimestamp` - минимально возможная дата
- `maxDateIso, maxDateTimestamp` - максимально возможная дата
- `errorStatusMessages` - стандартные сообщения об ошибках для используемых http ответов
- `unauthorizedErrorTypeSwagger, internalServerErrorTypeSwagger, unprocessableEntityErrorSwagger, badRequestErrorSwagger` - стандартные сообщения об ошибках для использования в свагере

### `dto`

Общие dto

Список

- `BaseRequestFrontSortingAndPagination` - базовая dto для описания фильтрации, сортировки и пагинации
- `OnlyIdDto` - базовая dto с одним параметром id

### `entity`

Базовые сущности базы данных

- `AbstractEntity` - включает в себя id, дату создания и дату обновления сущности

### `exceptions`

Классы исключений, на основе Error

- `ActionWithFileException` - используется, в случае, ошибок с файловой системой
- `NoValidServiceTokenException` - используется, если системный токен не валиден
- `NoValidUserTokenException` - используется, если пользовательский или админский токен не валиден
- `DecodeTokenException` - используется, если произошла ошибка при декодировании токена

### `modules`

Общие nestjs модули

- `ErrorModule` - модуль ошибок

### `pipes`

Общие nestjs пайпы

- `BackendValidationPipe` - валидационный пайп для фходящих значений, форматирующий ошибки в формат - Record\<string, string[]\>

### `swagger`

Общие swagger утилиты, типы и тд. используемые для генерации

- `ApiOkResponsePaginated` - позволяет отобразить ответ с использованием пагинации
- `BadRequestError`, `InternalServerError`, `UnauthorizedError`, `UnprocessableEntityError` - типы которые, описывают общие http ошибки
- `GetResult` - если нужно возвратить результат успешности выполнения запроса
- `OnlyId`, `OnlyNullableId` - базовый тип с одним параметром id
- `Paginated` - базовый generic тип описывает возвращаемый ответ где используется пагинация
- `Pagination` - тип описывающий объект пагинации

### `types`

Дополнительные типы, enum и тд.

- `UserStatusEnum` - пользовательские статусы
- `SortingEnum` - варианты сортировки
- `WorkModeEnum` - список режимов, в которых может работать приложение
- `UserEnum` - типы пользователя
- `ProcessEnvironmentKeys` - список всех ключей (process.env) во всех сервисах

```typescript
  Port = 'PORT',
  DatabaseHost = 'DB_HOST',
  DatabasePort = 'DB_PORT',
  DatabaseUser = 'DB_USER',
  DatabasePassword = 'DB_PASSWORD',
  DatabaseBase = 'DB_BASE',
  Mode = 'MODE',
  RedisSocketPath = 'REDIS_SOCKET_PATH',
  RedisUrl = 'REDIS_URL',
  RedisPassword = 'REDIS_PASSWORD',
  AdminUser = 'ADMIN_USER',
  AdminPassword = 'ADMIN_PASSWORD',
  AdminSecret = 'ADMIN_SECRET',
  UserSecret = 'USER_SECRET',
  ServiceToken = 'SERVICE_TOKEN',
  AppVersion = 'APP_VERSION',
```

- `GenderEnum` - пол пользователя или другого живого существа

- `TupleUnion` - возвращает кортеж, в котором нужно описать все ключи по одному разу

### `utils`

Разные полезные функции

- `setVariablesOutOfEnvironmentString`, `setEnvironments`, `saveEnvironmentsInFile` - работа с env файлами
- `exec` - возвращает результат выполнения переданной команды, на языке bash
- `getCacheConfig` - возвращает cash настройки для typeorm
- `getISODate`, `getNullableISODate`, `getTimestamp` - работа с датой
- `getEntity` - декоратор, возвращает либо сущность, либо поле из этой сущность
- `getValidationErrorMessageForResponseFront` - форматирует переданные ошибки в один используемый формат - Record\<string, string[]\>
- `authGuardHelper` - защитник, используется если нужно работать с авторизованным пользователем
- `setupSwagger` - устанавливает настройки свагера
- `getPaginationObject` - возвращает объект пагинации для отправки на фронт
- `preparePagination`, `prepareSorting`, `prepareLike`, `prepareBetween` - форматирует данные для использования в методах поиска typeorm по базе данных

### `validation`

Разные функции используемые при валидации с class-validator или при трансформации данных с class-transformer.

- `getTransformToTimestamp` - преобразует дату из iso формата в timestamp
