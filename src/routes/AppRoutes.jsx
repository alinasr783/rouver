import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBarWithSidebar from '../comp/appbar'; // الـ Layout الرئيسي
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppBarWithSidebar />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}