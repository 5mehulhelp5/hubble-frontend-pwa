/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Media } from './Media';

/**
 * Added since version: 6.0.0.0
 */
export type PaymentMethod = {
    id?: string;
    name: string;
    readonly distinguishableName?: string;
    description?: string;
    position?: number;
    active?: boolean;
    afterOrderEnabled?: boolean;
    customFields?: any;
    mediaId?: string;
    /**
     * Runtime field, cannot be used as part of the criteria.
     */
    readonly synchronous?: boolean;
    /**
     * Runtime field, cannot be used as part of the criteria.
     */
    readonly asynchronous?: boolean;
    /**
     * Runtime field, cannot be used as part of the criteria.
     */
    readonly prepared?: boolean;
    /**
     * Runtime field, cannot be used as part of the criteria.
     */
    readonly refundable?: boolean;
    readonly createdAt: string;
    readonly updatedAt?: string;
    translated?: any;
    media?: Media;
};

