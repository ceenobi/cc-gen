import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import EditCard from '../pages/EditCard';
import Profile from '../pages/Profile';
import Documentation from '../pages/Documentation';
import Introduction from '../components/Documentation/Introduction';
import HowTos from '../components/Documentation/HowTos';
import Docs from '../pages/Docs';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Signin = lazy(() => import('../pages/Signin'));
const Signup = lazy(() => import('../pages/Signup'));
const Contact = lazy(() => import('../pages/Contact'));
const Explore = lazy(() => import('../pages/Explore'));
const CardID = lazy(() => import('../pages/CardID'));

const routes = [
  {
    path: '/',
    exact: true,
    element: Home,
  },
  {
    path: 'about',
    element: About,
  },
  {
    path: 'signin',
    element: Signin,
  },
  {
    path: 'signup',
    element: Signup,
  },
  {
    path: 'contact',
    element: Contact,
  },
  {
    path: 'explore',
    element: Explore,
  },
  {
    path: 'card-details/:card_id',
    element: CardID,
  },
  {
    path: 'card-edit/:edit_id',
    element: EditCard,
  },
  {
    path: 'profile',
    element: Profile,
  },
  // {
  //   path: 'introductiontoCardvo',
  //   element: Introduction,
  // },
  {
    path: 'documentation',
    element: Documentation,
  },
];

export default routes;
