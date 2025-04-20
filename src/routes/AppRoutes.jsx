import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBarWithSidebar from '../comp/appbar'; // الـ Layout الرئيسي
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import User from '../pages/User';
import Sales from '../pages/Sales';
import Team from '../pages/Team';
import Clients from '../pages/Clients';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppBarWithSidebar />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users" element={<User />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}