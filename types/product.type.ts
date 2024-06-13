export interface Product {
    id: number
    name: string
    collection: number
    price: number
    color: number
    front_image: string
    back_image: string
    category: number
    quantity?: number
    size?: string
}

export interface Collection {
    id: number
    name: string
    description?: string
    start_date?: string
    finish_date?: string
    main_img: string
    cover_img_1: string
    cover_img_2: string
    tbl_gallery: any[]
    tbl_product: Product[]
    tbl_collection_slider: any[]
}

export interface Category {
    id: number
    name: string
}

export interface Color {
    id: number
    name: string
    hex?: string
}