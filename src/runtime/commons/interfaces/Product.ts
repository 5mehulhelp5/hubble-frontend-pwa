import { Media } from './Media'

export interface Manufacturer {
    id: string
}

export interface Price {
    regularPrice: number
    specialPrice: number | null
}

export interface Product {
    id: string,
    name: string,
    description?: string,
    sku: string,
    url: string,
    media?: Media[] | Media,
    active: boolean,
    stock: number,
    price: Price,
    deliveryTime?: string,
    manufacturer?: Manufacturer,
    metaTitle?: string,
    metaDescription?: string
}
