import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Home } from './pages/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="light" />
    </>
  );
}
