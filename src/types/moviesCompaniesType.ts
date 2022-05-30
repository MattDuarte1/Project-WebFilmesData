type Icompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export interface IData {
  companiesMovies: Icompanies[];
  url: string;
}
