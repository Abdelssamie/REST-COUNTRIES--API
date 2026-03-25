export type Country = {
  flags?: {
    svg: string;
  };
  name: {
    common: string;
    nativeName: {
      [lang: string]:{
        common: string;
      }
    };
  };
  population?: number;
  region?: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies: {
    [currency: string]: {
      name: string;
    }
  };
  languages: {
    [lang:string]: string;
  };
  borders?: string[];
}