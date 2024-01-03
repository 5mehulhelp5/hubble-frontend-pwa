import { type HblShippingMethod } from '@/utils/types/HblShippingMethod'
import { type HblPaymentMethod } from '@/utils/types/HblPaymentMethod'

export interface HblSession {
    sessionToken: string | null,
    currency?: string,
    language?: string,
    maintenance?: boolean,
    shippingMethod?: HblShippingMethod,
    paymentMethod?: HblPaymentMethod
}
