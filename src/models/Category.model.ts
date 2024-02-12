export interface Category {
    id: number;
    name: string;
    image: string;  
}

export enum Categories {
    clothes = 1,
    electronics = 2,
    furnitures = 3, 
    shoes = 4,
    miscelaneous = 5,
}