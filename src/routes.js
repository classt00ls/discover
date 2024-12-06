import React from 'react';
import VerifyToken from './views/common/ConfirmToken';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const DialogFlow = React.lazy(() => import('./views/ia/dialogflow/DialogFlow'));
const OpenAI = React.lazy(() => import('./views/ia/openai/OpenAI'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/verify', name: 'Dashboard', element: VerifyToken },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/discover/dialogflow', name: 'Collapse', element: DialogFlow },
  { path: '/discover/openai', name: 'Collapse', element: OpenAI }
]

export default routes
