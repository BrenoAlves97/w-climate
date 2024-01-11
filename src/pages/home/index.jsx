import React from 'react';
import { Search } from 'lucide-react';
import { SyncLoader } from 'react-spinners';
import { toast } from 'react-hot-toast';

import { CardWeather } from '../../components/card-weather-infos';

import img01 from '../../assets/img-01.svg';

export const Home = () => {
   const [cityName, setCityName] = React.useState('');
   const [data, setData] = React.useState(null);
   const [loading, setLoading] = React.useState(false);

   const handleChange = (city) => {
      setCityName(city);
   };

   const fetchData = async (city) => {
      try {
         setLoading(true);
         const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86b1c3ed511d8a9afe3630370a557740&lang=pt_br&units=metric`,
            {
               method: 'GET',
            },
         );

         if (!(response.status === 200)) {
            return toast.error('Cidade não encontrada');
         }

         const json = await response.json();
         json && setData(json);
      } catch (error) {
         setData(null);
      } finally {
         setLoading(false);
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (cityName === '') return toast.error('Insira o nome de cidade...');

      await fetchData(cityName);
      setCityName('');
   };

   return (
      <>
         <div className="w-full h-screen bg-gray-100">
            <div className="w-full max-w-3xl mx-auto mt-16">
               <div className="overflow-hidden flex flex-col items-center justify-center select-none">
                  <div className="w-44 h-44 rounded-full">
                     <img className="w-44 h-44 rounded-full border-2 border-gray-200" src={img01} alt="Imagem" />
                  </div>
                  <p className="font-bold text-gray-800  text-center mt-6">Saiba como está o clima em sua cidade</p>
               </div>
            </div>

            <div className="w-full max-w-xl mx-auto p-6">
               {loading && !data && (
                  <div className="mt-12 w-full flex items-center justify-center p-4">
                     <SyncLoader size={8} color="#111827" />
                  </div>
               )}

               {!data && !loading && (
                  <form className="mt-12 w-full" onSubmit={handleSubmit}>
                     <div className="w-full flex gap-[.1rem] overflow-hidden">
                        <input
                           type="text"
                           className="flex-1 p-2 outline-none duration-200 rounded-md text-gray-600 border-2 border-transparent hover:border-gray-600 focus:border-gray-600"
                           placeholder="Ex: Vitória"
                           value={cityName}
                           onChange={({ target }) => handleChange(target.value)}
                        />
                        <button className="bg-white flex items-center justify-center outline-none p-2 overflow-hidden duration-200 rounded-md border-2 border-transparent hover:border-gray-600">
                           <Search size={20} color="#111827" />
                        </button>
                     </div>
                  </form>
               )}

               {!loading && data && (
                  <div className="mt-12 w-full rounded-lg p-1">
                     <CardWeather data={data} />

                     <p className="mt-10 text-center font-medium text-gray-500 select-none">
                        Realizar nova{' '}
                        <button
                           onClick={() => setData(null)}
                           className="font-bold hover:text-gray-600 duration-200 uppercase"
                        >
                           busca...
                        </button>
                     </p>
                  </div>
               )}
            </div>
         </div>
      </>
   );
};
