export type Project = {
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'ui';
  type: string;
  githubUrl: string;
  liveUrl: string;
};

export type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
