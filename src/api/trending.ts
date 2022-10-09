import {httpApi} from "./httpApi";

type MediaType = 'all' | 'movie' | 'tv' | 'person'
type TimeWindow = 'day' | 'week'

export const getTrending = (mediaType: MediaType, timeWindow: TimeWindow) => {
  return httpApi.get(`/trending/${mediaType}/${timeWindow}`)
}