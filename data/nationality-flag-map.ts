import { ALL_COUNTRIES } from './country-database';

// A mapping from nationality name (e.g., "Brazil") to a flag image URL.
export const NATIONALITY_FLAG_MAP: Record<string, string> = {};

ALL_COUNTRIES.forEach(country => {
    if (country.imageUrl) {
        NATIONALITY_FLAG_MAP[country.name] = country.imageUrl;
    }
});
