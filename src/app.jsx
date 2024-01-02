import React from 'react';
import { Toaster } from 'react-hot-toast';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export const App = () => {
   return (
      <>
         <Toaster
            position="bottom-right"
            reverseOrder={false}
            toastOptions={{
               style: {
                  fontSize: '.875rem',
               },
               duration: 1500,
            }}
         />
         <RouterProvider router={router} />
      </>
   );
};
