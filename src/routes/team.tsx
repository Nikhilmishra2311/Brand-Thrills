import { createFileRoute } from '@tanstack/react-router';
import { Users, Target, Radio, Monitor, Lightbulb, PenTool } from 'lucide-react';
import { PageIntro, CTA } from '@/components/site';
import { departments } from '@/lib/site-data';
import { pageHead } from '@/lib/seo';
const icons=[Target,Users,Radio,Monitor,Lightbulb,PenTool];
export const Route=createFileRoute('/team')({head:()=>pageHead('Our Teams','Discover the Brand Thrills teams behind outdoor media, retail activations, radio and print, digital, strategy, design, and production.'),component:Team});
function Team(){return <><PageIntro eyebrow="Our team" title="Many talents. One team." description="Strategists, designers, media specialists, and on-ground experts. More than 40 professionals united by a passion for building brands."/><section className="section"><div className="wrap"><div className="department-grid">{departments.map((d,i)=>{const Icon=icons[i] ?? Users;return <article className="department" key={d.title}><Icon size={29}/><h3>{d.title}</h3><p>{d.description}</p></article>})}</div></div></section><CTA/></>}
