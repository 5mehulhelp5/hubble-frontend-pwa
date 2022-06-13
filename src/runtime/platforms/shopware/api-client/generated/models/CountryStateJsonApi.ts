/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { resource } from './resource';

/**
 * Added since version: 6.0.0.0
 */
export type CountryStateJsonApi = (resource & {
    id?: string;
    countryId: string;
    shortCode: string;
    name: string;
    position?: number;
    active?: boolean;
    customFields?: any;
    readonly createdAt: string;
    readonly updatedAt?: string;
    translated?: any;
});

