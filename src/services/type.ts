export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}
export type Post={
    userId:number,
    id:number,
    title:string,
    body:string
}
export type Todo={
    userId: number,
    id:number,
    title:string,
    completed:boolean
}