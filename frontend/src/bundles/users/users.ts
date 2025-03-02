import { config } from '~/framework/config/config.js';
import { http } from '~/framework/http/http.js';
import { storage } from '~/framework/storage/storage.js';

import { UserApi } from './users-api.js';

const userApi = new UserApi({
    baseUrl: config.ENV.API.ORIGIN_URL,
    storage,
    http,
});

export { userApi };
export {
    type UserGetAllItemResponseDto,
    type UserGetAllResponseDto,
    type UserLoadRequestDto,
    type UserLoadResponseDto,
    type UserSignInRequestDto,
    type UserSignInResponseDto,
    type UserSignUpRequestDto,
    type UserSignUpResponseDto,
} from './types/types.js';
export {
    userSignInValidationSchema,
    userSignUpValidationSchema,
} from './validation-schemas/validation-schemas.js';
