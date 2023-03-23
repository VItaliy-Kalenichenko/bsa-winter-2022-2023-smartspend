import { type Gender } from './types.js';

type UserUpdateRequestDto = Partial<{
    email?: string;
    firstName?: string;
    lastName?: string;
    sex?: Gender;
    dateOfBirth?: string;
    language?: string;
    currency?: string;
}>;

export { type UserUpdateRequestDto };
