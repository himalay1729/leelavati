export interface Article {
  id: number;
  title: string;
  author: string;
}

export interface Issue {
  id: number;
  month: string;
  year: number;
  title: string;
  articles: Article[];
}

export interface Volume {
  id: number;
  title: string;
  year: number;
  coverImage: string;
  issues: Issue[];
}

export interface Editor {
  name: string;
  odianame?: string;
  affiliation?: string;
  role?: string;
  bio?: string;
  photoUrl?: string;
}

export interface MagazineDB {
  volumes: Volume[];
}
