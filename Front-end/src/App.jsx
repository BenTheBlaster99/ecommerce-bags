import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Index from "./pages/Index";
import { Toaster } from "./components/ui/Toaster";

console.log('app.jsx is being executed');

const queryClient = new QueryClient();

function App() {
  console.log('app componet rendeing');
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toaster />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
