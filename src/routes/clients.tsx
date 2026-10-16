import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, CTA } from '@/components/site';
import { clients, ksbWide, rwaSector49, metroHospital, haryanaTourism, surajkundMela, ksbFront } from '@/lib/site-data';
import { pageHead } from '@/lib/seo';
const projects=[
 {name:'KSB',image:ksbWide,description:'Exhibition stand and product showcase'},
 {name:'Catch',image:rwaSector49,description:'Outdoor advertising visibility'},
 {name:'Metro Group of Hospitals',image:metroHospital,description:'Community centre outdoor branding'},
 {name:'Haryana Tourism',image:haryanaTourism,description:'Tourism and festival promotion'},
 {name:'Residents Welfare Association, Sector 49',image:rwaSector49,description:'Community entry signage'},
 {name:'Surajkund Diwali Mela',image:surajkundMela,description:'Outdoor event promotion'},
 {name:'KSB Exhibition',image:ksbFront,description:'Exhibition stall branding'},
];
export const Route=createFileRoute('/clients')({head:()=>pageHead('Our Clients & Projects','A selection of Brand Thrills advertising, exhibition, outdoor, and event promotion projects.'),component:Clients});
function Clients(){return <><PageIntro eyebrow="Our clients" title="Real work. Real-world visibility." description="Explore selected project photographs and brand marks from advertising, exhibition, outdoor, and event promotion work."/><section className="section"><div className="wrap"><div className="bt-client-projects bt-client-projects-page">{projects.map(c=><article className="bt-client-card" key={c.name}><img src={c.image} alt={`${c.name} project`} loading="lazy"/><div><h3>{c.name}</h3><p>{c.description}</p></div></article>)}</div><h2 className="bt-logos-title">Brand logos</h2><div className="bt-client-logos bt-client-logos-page">{clients.map(c=><div key={c.name}><img src={c.image} alt={`${c.name} logo`} loading="lazy"/><span>{c.name}</span></div>)}</div></div></section><CTA/></>}
