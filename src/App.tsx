import React from 'react';
import {CssVarsProvider, StyledEngineProvider} from '@mui/joy/styles';
import {Main} from "./components/app/Main";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          <BrowserRouter>
            <Main/>
          </BrowserRouter>
        </CssVarsProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}