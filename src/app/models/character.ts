export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: OriginOrLocation
    location: OriginOrLocation
    image: string
    episode?: string[] | null
    url: string
    created: string
}

interface OriginOrLocation {
    name: string
    url: string
}