import React from 'react';
import { Droplets, Wind } from 'lucide-react';

export const CardWeather = ({ data }) => {
   console.log(data);
   const date = new Date();

   const optionsDate = { weekday: 'long', timeZone: 'UTC' };
   const formatter = Intl.DateTimeFormat('pt-BR', optionsDate);

   const optionsHour = { hour: 'numeric', minute: 'numeric', hour12: false };
   const formatterHour = Intl.DateTimeFormat('pt-BR', optionsHour);

   return (
      <div className="flex flex-col items-center p-2">
         <p className="text-gray-800 text-center text-3xl sm:text-4xl mb-4">{data.name}</p>

         <div className="flex text-center gap-4 flex-col sm:flex-row items-center justify-center sm:justify-between w-full">
            <div className="sm:text-left">
               <p className="text-xl font-bold">{data.main.temp.toFixed(0)} °C</p>
               <p>Umidade: {data.main.humidity}%</p>
               <p>Vento: {data.wind.speed.toFixed(0)}km/h</p>
            </div>

            <div className="flex-1 sm:text-right sm:self-end">
               <p className="text-xl font-bold">Clima</p>
               <p className="text-base">{data.weather[0].description}</p>
               <p className="lowercase text-gray-800 font-bold">
                  {formatter.format(date)}, <span>{formatterHour.format(date)}</span>
               </p>
            </div>
         </div>
      </div>
   );
};
