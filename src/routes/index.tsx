import { createFileRoute } from '@tanstack/react-router';
import { Home } from '@/components/home';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/')({
  head: () => pageHead('Integrated Advertising & Brand Experiences', 'Brand Thrills is a full-service New Delhi advertising agency connecting brands across India through outdoor, ATL, BTL, innovations, and corporate events.'),
  component: Home,
});
