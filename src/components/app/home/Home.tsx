import React, {Suspense, useEffect} from "react";
import {Sheet} from "../../core/Sheet";
import {useQuery} from "@tanstack/react-query";
import {getTrending} from "../../../api/trending";
import {HomeSuspense} from "./HomeSuspense";
import {Typography} from "../../core/Typography";
import {Card} from "../../core/Card";
import { CardCover } from "../../core/CardCover";
import {CardContent} from "../../core/CardContent";
import {getPosterPath} from "../../../utils/TMDBUtils";

const HomeCmp = () => {
  const {data, isLoading} = useQuery<any>(['test'], () => getTrending('all', 'week'));

  useEffect(() => {
    console.log("data==", data);
  }, [data]);

  return (
    <Sheet sx={{
      display: "flex",
      overflow: "scroll"
    }}>
      <Sheet sx={{
        display: "flex",
      }}>
        {
          !isLoading &&
          data.results.map((result: any, index: number) => (
            <Card
              key={index}
              sx={{ height: '280px', width: 250, margin: 2 }}>
              <CardCover>
                <img
                  src={getPosterPath(result.poster_path)}
                  loading="lazy"
                  alt=""
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography sx={{color: "#fff"}}>{result.media_type === "movie" ? result.original_title : result.name}</Typography>
              </CardContent>
            </Card>
          ))
        }
      </Sheet>
    </Sheet>
  )
}

export const Home = () => {
  return (
    <Suspense fallback={<HomeSuspense/>}>
      <HomeCmp/>
    </Suspense>
  );
}