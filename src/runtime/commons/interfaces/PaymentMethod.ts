import { Media } from './Media'

export interface PaymentMethod {
    id: string,
    name: string,
    position: number,
    description?: string,
    media?: Media,
    synchronous?: boolean,
    asynchronous?: boolean
}
