import React, {useEffect} from "react";
import {useColorScheme} from "@mui/joy/styles";
import {Sheet} from "../core/Sheet";
import {MainAppBar} from "./MainAppBar";
import {MainRouter} from "../core/router/MainRouter";

export const Main = () => {
  const {setMode} = useColorScheme();

  useEffect(() => {
    setMode("dark");
  }, []);

  return (
    <Sheet sx={{
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
    }}>
        <MainAppBar />
        <MainRouter />
    </Sheet>
  )
}