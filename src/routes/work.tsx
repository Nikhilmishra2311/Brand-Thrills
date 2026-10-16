import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, CTA } from '@/components/site';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { rwaSector49, metroHospital, ksbWide, ksbInteraction, ksbFront, surajkundMela, haryanaTourism } from '@/lib/site-data';
import { pageHead } from '@/lib/seo';
const works=[
 {title:'Sector 49 community entry branding',category:'Outdoor',image:rwaSector49},
 {title:'Metro Hospital community-centre branding',category:'Outdoor',image:metroHospital},
 {title:'KSB exhibition brand experience',category:'Events',image:ksbWide},
 {title:'KSB exhibition visitor engagement',category:'Events',image:ksbInteraction},
 {title:'KSB exhibition stand and product display',category:'Events',image:ksbFront},
 {title:'Surajkund Diwali Mela outdoor promotion',category:'Outdoor',image:surajkundMela},
 {title:'Haryana Tourism event promotion',category:'Outdoor',image:haryanaTourism},
];
export const Route=createFileRoute('/work')({head:()=>pageHead('Brand Experiences & Capabilities','Explore illustrative outdoor advertising, retail activation, and corporate event concepts showing the range of Brand Thrills capabilities.'),component:Work});
function Work(){const [filter,setFilter]=useState('All');const [selected,setSelected]=useState<(typeof works)[number]|null>(null);return <><PageIntro eyebrow="Our work" title="Ideas made tangible." description="Explore outdoor advertising, events and exhibitions, shop and in-shop branding, signage, printing, vehicle branding, and company promotions."/><section className="section"><div className="wrap"><div className="filter-row" role="group" aria-label="Filter capabilities">{['All','Outdoor','Activations','Events'].map(f=><Button key={f} variant={filter===f?'agency':'outline'} onClick={()=>setFilter(f)} aria-pressed={filter===f}>{f}</Button>)}</div><div className="gallery-grid">{works.filter(w=>filter==='All'||w.category===filter).map(w=><article key={w.title}><Button variant="ghost" className="gallery-trigger" onClick={()=>setSelected(w)} aria-label={'View '+w.title}><img src={w.image} alt={w.title} width={1280} height={896} loading="lazy"/></Button><h3>{w.title}</h3><p>{w.category} · Brand Thrills project photo</p></article>)}</div></div></section><Dialog open={!!selected} onOpenChange={open=>{if(!open)setSelected(null)}}><DialogContent className="lightbox-content"><DialogTitle className="px-3 pt-3">{selected?.title}</DialogTitle><DialogDescription className="px-3">{selected?.category} · Brand Thrills project photo</DialogDescription>{selected&&<img src={selected.image} alt={selected.title}/>}</DialogContent></Dialog><CTA/></>}
