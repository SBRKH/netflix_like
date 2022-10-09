import React, {Suspense, useEffect} from "react";
import {Sheet} from "../../core/Sheet";
import {useQuery} from "@tanstack/react-query";
import {getTrending} from "../../../api/trending";
import {HomeSuspense} from "./HomeSuspense";
import {Typography} from "../../core/Typography";
import {Card} from "../../core/Card";
import {CardCover} from "../../core/CardCover";
import {CardContent} from "../../core/CardContent";
import {getPosterPath} from "../../../utils/TMDBUtils";
import {Chip} from "../../core/Chip";
import {getMovieGenders, getTvGenders} from "../../../api/gender";

const HomeCmp = () => {
  const {data, isLoading} = useQuery<any>(['trending'], () => getTrending('all', 'week'));
  const {data: tvGenderData} = useQuery<any>(['tvGender'], () => getTvGenders());
  const {data: moviesGenderData} = useQuery<any>(['moviesGender'], () => getMovieGenders());

  useEffect(() => {
    console.log("data==", data, tvGenderData, moviesGenderData);
  }, [data, tvGenderData, moviesGenderData]);

  return (
    <Sheet sx={{display: "flex"}}>
      <Sheet sx={{display: "flex", flexDirection: "column"}}>
        <Typography typography={"h5"} fontWeight={"bold"} sx={{marginLeft: 2}}>
          Tendances Films & Séries
        </Typography>
        <Sheet sx={{display: "flex", overflowX: "scroll"}}>
          {
            !isLoading && data.results.map((result: any, index: number) => (
              <Card
                key={index}
                sx={{height: '280px', width: 250, margin: 2, '--Card-radius': 0}}>
                <CardCover>
                  <img
                    src={getPosterPath(result.poster_path)}
                    loading="lazy"
                    alt="img"
                  />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                  }}
                />
                <CardContent sx={{
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignContent: 'flex-start',
                  justifyContent: 'flex-end',
                }}>
                  <Sheet sx={{flexDirection: "row", backgroundColor: "transparent"}}>
                    {
                      result.genre_ids.map((genre: number, index: number) => (
                        <Chip variant={"outlined"}
                              key={index}
                              sx={{borderColor: "#fff", color: "#fff", marginRight: 1, marginBottom: 1}}>
                          {
                            result.media_type === "movie" ?
                              moviesGenderData.genres.find((mgd: any) => mgd.id === genre).name :
                              tvGenderData.genres.find((tgd: any) => tgd.id === genre).name
                          }
                        </Chip>
                      ))
                    }
                  </Sheet>
                  <Typography sx={{color: "#fff"}} typography={"body2"} fontWeight={"bold"}>
                    {result.media_type === "movie" ? result.original_title : result.name}
                  </Typography>
                </CardContent>
              </Card>
            ))
          }
        </Sheet>
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