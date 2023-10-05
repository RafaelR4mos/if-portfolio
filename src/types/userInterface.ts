export interface IuserData {
  userData: {
    name: string;
    occupation: string;
    shortDescription: string;
    email: string;
    projects: project[];
    socialMediaLink: socialMedia;
  };
}

export type project = {
  id: number;
  title: string;
  year: number;
  category: string;
  description: string;
  repoURL: string;
  deployURL: string;
  projectImgSrc: string;
};

export type socialMedia = {
  github?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
};
