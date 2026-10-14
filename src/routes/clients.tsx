import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, CTA } from '@/components/site';
import { clients } from '@/lib/site-data';
import { pageHead } from '@/lib/seo';
const more=['DS Group','Iffco Kisan','Policybazaar','IIFL','KRBL','Kirloskar','KSB Pumps','Nuvoco','Somany','JK Lakshmi Cement','Shyam Steel','Liberty','Cremica','Bikano','Bonn','Baidyanath','Campa','Zeeba Rice'];
export const Route=createFileRoute('/clients')({head:()=>pageHead('Our Clients','Explore the brands featured by Brand Thrills, including Coca-Cola, Dabur, Mother Dairy, Reliance, Adani Wilmar, and Jindal Steel.'),component:Clients});
function Clients(){return <><PageIntro eyebrow="Our clients" title="Great brands. Shared ambition." description="From household names to ambitious businesses, we bring the same care, creative thinking, and commitment to every relationship."/><section className="section"><div className="wrap"><div className="all-clients">{clients.map(c=><div className="client-cell" key={c.name}><img src={c.image} alt={c.name} width={160} height={85} loading="lazy"/></div>)}{more.map(c=><div className="client-cell" key={c}>{c}</div>)}</div></div></section><CTA/></>}
