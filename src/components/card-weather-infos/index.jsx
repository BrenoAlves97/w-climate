import React from 'react';
import { Droplets, Wind } from 'lucide-react';

export const CardWeather = ({ data }) => {
   console.log(data);

   const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
   const date = new Date();

   return (
      <div className="flex sm:items-start items-center sm:flex-row flex-col gap-4 sm:gap-0">
         <div className="flex gap-2">
            <div className="flex items-center gap-1 self-start">
               <span>
                  <img
                     className="block rounded-lg w-8 h-8 min-h-8"
                     src={`https://flagsapi.com/${data.sys.country}/flat/64.png`}
                     alt={data.name}
                  />
               </span>

               <p className="font-medium pl-1 flex items-center text-indigo-600">
                  <span className="text-2xl">{data.name} </span>
               </p>
            </div>

            <div className="flex flex-col gap-1 pl-1">
               <p className="flex text-xl items-center gap-2 text-indigo-500">
                  {data.main.temp.toFixed(0)} <span className="font-bold text-2xl text-indigo-600"> °C</span>
               </p>

               <div className="flex gap-2 flex-col text-xs text-indigo-500">
                  <div className="flex items-center gap-1">
                     <Droplets size={20} color="#4f46e5" />
                     <span>
                        Umidade: {data.main.humidity}
                        <span className="font-bold">%</span>
                     </span>
                  </div>

                  <div className="flex items-center gap-1">
                     <Wind size={20} color="#4f46e5" />
                     <span>
                        {data.wind.speed.toFixed(0)} <span className="font-bold">km/h</span>
                     </span>
                  </div>
               </div>
            </div>
         </div>

         <div className="p-2 pt-0 sm:ml-auto text-base bg-indigo-200 rounded-lg text-indigo-700">
            <p className="flex items-center gap-1">
               <img
                  className="w-12"
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt={data.weather[0].main}
               />
               <span className="text-base">{data.weather[0].description}</span>
            </p>

            <p className="font-bold lowercase text-right">
               {days[date.getDate()]},{' '}
               <span>
                  {date.getHours()}:
                  {date.getMinutes() >= 0 && date.getMinutes() < 10
                     ? `${0 + date.getMinutes()}`
                     : `${date.getMinutes()}`}
               </span>
            </p>
         </div>
      </div>
   );
};
