import React, {Suspense} from 'react'
import { Routes, Route } from 'react-router-dom';
import { ScaleFade} from '@chakra-ui/react'
import routes from './PageRoutes';
import Loader from '../utils/Loader';
import AppRoutes from './PageRoutes';

export default function AppRouter() {
  return (
    // <>
    //   <Suspense fallback={<Loader />}>
    //     <ScaleFade initialScale={0.9} in="true">
    //       <AppRoutes />
    //     </ScaleFade>
    //   </Suspense>
    // </>
    <Routes>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            //children={route.children}
            element={
              <Suspense fallback={<Loader />}>
                <ScaleFade initialScale={0.9} in="true" key={route.path}>
                  <route.element children={route.children}/>
                </ScaleFade>
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
}
