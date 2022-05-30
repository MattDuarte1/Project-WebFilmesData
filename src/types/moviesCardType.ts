type Iresults = {
  title: string;
  backdrop_path: string;
  id: string;
};

export interface Imovies {
  page: number;
  total_pages: number;
  results: Iresults[];
}

export interface ImoviesCards {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  movies: Imovies;
  cardRef: React.RefObject<HTMLUListElement>;
  title: string;
  titleCategory?: string;
}
