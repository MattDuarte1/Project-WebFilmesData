export type IMoviesSearch = {
  page: string;
  total_pages: string;
  total_results: string;
  results: Iresults[];
};

export type Iresults = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  overview: string;
  release_date: string;
  backdrop_path: string;
};
