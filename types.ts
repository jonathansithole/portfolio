
export enum ProjectType {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  FULLSTACK = 'Fullstack',
  API = 'API'
}

export enum TechnicalFocus {
  AUTH = 'Authentication',
  PERFORMANCE = 'Performance',
  DATA = 'Data Engineering',
  UX = 'User Experience',
  SYSTEMS = 'System Design'
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  type: ProjectType;
  focus: TechnicalFocus;
  technologies: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl: string;
  imageUrl: string;
  codeSnippet: string;
  codeExplanation: string;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  problemStatement: string;
  constraints: string[];
  decisions: {
    choice: string;
    why: string;
    alternatives: string;
  }[];
  architectureDiagram?: string;
  results: {
    metric: string;
    value: string;
  }[];
  lessons: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}
