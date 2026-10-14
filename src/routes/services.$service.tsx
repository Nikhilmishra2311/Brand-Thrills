import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { Check, ArrowUpRight } from 'lucide-react';
import { PageIntro, CTA } from '@/components/site';
import { services } from '@/lib/site-data';
import { pageHead } from '@/lib/seo';
import { Button } from '@/components/ui/button';
export const Route=createFileRoute('/services/$service')({loader:({params})=>{const service=services.find(s=>s.slug===params.service);if(!service)throw notFound();return service},head:({loaderData})=>pageHead(loaderData?.title??'Service unavailable',loaderData?.description??'Explore advertising services from Brand Thrills.'),component:Service});
function Service(){const s=Route.useLoaderData();return <><PageIntro eyebrow={s.title} title={s.short} description={s.description}/><section className="section"><div className="wrap body-grid"><div><div className="eyebrow mb-5">Our capabilities</div><h2>{s.title},<br/>from idea to execution.</h2><p>{s.detail}</p><div className="capability-list">{s.items.map(t=><div key={t}><Check size={16}/>{t}</div>)}</div><Button variant="agency" asChild className="mt-9"><Link to="/contact" search={{service:s.title}}>Discuss your campaign<ArrowUpRight/></Link></Button></div><img src={s.image} alt={s.title+' illustrative concept'} width={1280} height={896} className="editorial-image"/></div></section><CTA/></>}
