import ProjectsPipeline from '@/components/ProjectsPipeline';

export const metadata = {
  title: 'Kenya PPP Projects & Investment Opportunities | ZuriConsult',
  description:
    'Explore public-private partnership (PPP), infrastructure and investment opportunities in Kenya across energy, water, healthcare, life sciences, transport and logistics.',
  alternates: { canonical: '/projects' },
};

export default function Projects() {
  return <ProjectsPipeline />;
}
