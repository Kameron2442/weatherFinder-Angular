export interface LocWeatherDetail {
    desc: string; // location weather description
    temp: number; // location temperature
    feelLike: number;
    humidity: number; 
    clouds: number;
    windSpeed: number;
    pressure: number; 
    icon: string; // might use to add icons later
}