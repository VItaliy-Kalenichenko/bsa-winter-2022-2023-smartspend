import { type UserService } from '~/bundles/users/user.service.js';
import {
    type ApiHandlerResponse,
    Controller,
} from '~/common/controller/controller.js';
import { ApiPath } from '~/common/enums/enums.js';
import { getUserIdFromToken } from '~/common/helpers/get-id-from-token.helper.js';
import { HttpCode } from '~/common/http/http.js';
import { type ILogger } from '~/common/logger/logger.js';

import { UsersApiPath } from './enums/enums.js';
import { type UpdateRequestDto } from './types/update-request-dto.js';

/**
 * @swagger
 * components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          id:
 *            type: number
 *            format: number
 *            minimum: 1
 *          email:
 *            type: string
 *            format: email
 */

class UserController extends Controller {
    private userService: UserService;

    public constructor(logger: ILogger, userService: UserService) {
        super(logger, ApiPath.USERS);

        this.userService = userService;

        this.addRoute({
            path: UsersApiPath.ROOT,
            method: 'GET',
            handler: () => this.findAll(),
        });

        this.addRoute({
            path: UsersApiPath.ROOT,
            method: 'PUT',
            handler: (options) => {
                return this.update(options as UpdateRequestDto);
            },
        });
    }

    /**
     * @swagger
     * /users:
     *    get:
     *      tags: [Users]
     *      description: Returns an array of users
     *      responses:
     *        200:
     *          description: Successful operation
     *          content:
     *            application/json:
     *              schema:
     *                type: array
     *                items:
     *                  $ref: '#/components/schemas/User'
     */
    private async findAll(): Promise<ApiHandlerResponse> {
        return {
            status: HttpCode.OK,
            payload: await this.userService.findAll(),
        };
    }

    /**
     * @swagger
     * /users:
     *   put:
     *     tags:
     *       - Users
     *     description: Updates a user profile
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *                 format: email
     *                 nullable: true
     *               userProfile:
     *                 type: object
     *                 properties:
     *                   firstName:
     *                     type: string
     *                     nullable: true
     *                   lastName:
     *                     type: string
     *                     nullable: true
     *                   sex:
     *                     type: string
     *                     enum: [male, female]
     *                     nullable: true
     *                   dateOfBirth:
     *                     type: string
     *                     format: date
     *                     nullable: true
     *                   language:
     *                     type: string
     *                     nullable: true
     *                   currency:
     *                     type: string
     *                     nullable: true
     *     responses:
     *       '200':
     *         description: Successful operation
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *   components:
     *     securitySchemes:
     *       bearerAuth:
     *         type: http
     *         scheme: bearer
     */

    private async update(
        request: UpdateRequestDto,
    ): Promise<ApiHandlerResponse> {
        const userId = getUserIdFromToken(request.token);
        const updatedUser = await this.userService.update(userId, request.body);
        return {
            status: HttpCode.OK,
            payload: updatedUser,
        };
    }
}

export { UserController };
