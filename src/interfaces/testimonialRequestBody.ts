export interface testimonialCreateRequestBody {
    photoUrl?: string,
    name: string,
    post: string,
    description: string,
}

type testimonialUpdate<T> =  {[K in keyof T]: T[K]}
export type testimonialUpdateRequestBody = testimonialUpdate<testimonialCreateRequestBody>;

    
