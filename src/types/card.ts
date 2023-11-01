export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type Host = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
};

export type Card = {
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
    description: string;
    bedrooms: number;
    goods: string[];
    host: Host;
    images: string[];
    maxAdults: number;
};

export type Cards = Card[];