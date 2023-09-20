export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type CardProps = {
    id: string;
    title: string;
    price: number;
    type: string;
    previewImage?: string;
    isFavorite: boolean;
    isPremium?: boolean;
    rating: number;
    city: {
		name: string;
		location: Location;
	};
    location: Location;     
}

export type Host = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type FullCardProps = CardProps & {
    description: string;
    bedrooms: number;
    goods: string[];
    host: Host;
    images: string[];
    maxAdults: number;
}
