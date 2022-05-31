export interface Islider {
  data: IProps[];
}

type IProps = {
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  id?: string;
};
