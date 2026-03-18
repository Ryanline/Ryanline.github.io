export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  createdAt: string;
  category: string;
  summary: string;
  coverImage?: string;
  sourcePdf?: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'cloud-computing-origins-history-services',
    title:
      'The Origin, History, Features, Services, Major Players, Competitors, and Examples of Successful Implementation of Cloud Computing',
    createdAt: 'Oct 2, 2024',
    category: 'Research',
    summary:
      'A research essay tracing how cloud computing emerged from time-sharing and networked computing into the service models and major platforms that shape modern software delivery.',
    coverImage: '/images/blog/cloud-blog.svg',
    sourcePdf: '/blog/research-project-1.pdf',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'This essay looks at cloud computing from both a historical and practical angle. It starts by defining cloud computing and its common service models, then traces the ideas and technologies that made it possible, from early time-sharing systems to internet-era infrastructure.',
          'The paper also follows the rise of the major providers and closes by looking at large-scale implementations that show why cloud computing became such a dominant model for modern software and operations.',
        ],
      },
      {
        heading: 'What Cloud Computing Includes',
        paragraphs: [
          'A central point in the paper is that cloud computing is not just one product, but a family of services delivered over the internet. The essay breaks that down into storage, desktop, software, platform, and infrastructure services, each serving a different role for organizations and developers.',
          'That distinction matters because cloud adoption is often discussed broadly, while in practice the value comes from very specific service types. Storage services support backup and flexibility, SaaS reduces client-side maintenance, PaaS helps developers ship applications faster, and IaaS gives users configurable computing resources without owning physical hardware.',
        ],
      },
      {
        heading: 'Historical Foundations',
        paragraphs: [
          'One of the strongest themes in the essay is that cloud computing did not suddenly appear in the 2000s. Its roots go much deeper, especially in time-sharing, distributed computing, packet switching, ARPA research, and the broader evolution of networked systems.',
          'The paper highlights how ideas from people like J. C. R. Licklider and work at institutions like MIT created the conceptual groundwork for shared computing resources. That lineage makes cloud computing feel less like a single invention and more like the long-term convergence of multiple strands of computing history.',
        ],
      },
      {
        heading: 'From ASPs to the Big Three',
        paragraphs: [
          'The essay identifies application service providers as an important step toward modern cloud computing, especially in the way they hosted software for remote use before SaaS became mainstream. From there, it tracks the shift into the cloud era through the growth of AWS, Microsoft Azure, and Google Cloud.',
          'By comparing launches like S3, EC2, Azure Blob Storage, Google Cloud Storage, and later platform services, the paper shows how the industry matured from isolated hosted offerings into a broad, competitive ecosystem. It also points to later developments such as autoscaling, container orchestration, and hybrid cloud platforms that expanded both capability and accessibility.',
        ],
      },
      {
        heading: 'Real-World Implementation',
        paragraphs: [
          'The final throughline of the essay is practical adoption. Examples like Netflix, Spotify, and Coca-Cola help ground the research in recognizable implementations, showing how cloud computing supports scale, agility, and global service delivery in real organizations.',
          'That practical framing gives the paper a useful balance. It is not only a history of the cloud, but also an explanation of why its service model became so influential for businesses and software teams.',
        ],
      },
    ],
  },
];
