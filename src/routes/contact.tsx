import { useState, type FormEvent } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Phone, Mail, MapPin, ArrowUpRight, CircleCheck, Loader2 } from 'lucide-react';
import { PageIntro } from '@/components/site';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/seo';
import { contactSchema } from '@/lib/contact-schema';
const options=['Not sure yet','ATL & Outdoor','BTL & Activations','Innovations','Events & Promotions','Shop Branding','In-shop Branding','Signage & 3D Letter Boards','Flex, Vinyl & Print','Vehicle Branding','Company Promotion & Merchandise','Integrated Campaign'];
export const Route=createFileRoute('/contact')({validateSearch:(search:Record<string,unknown>):{service?:string}=>typeof search['service']==='string'?{service:search['service']}:{},head:()=>pageHead('Contact & Campaign Inquiries','Contact Brand Thrills in Gurugram and Ghaziabad or send an inquiry about your next advertising campaign.'),component:Contact});
function Contact(){const search=Route.useSearch();const [pending,setPending]=useState(false);const [success,setSuccess]=useState(false);const [error,setError]=useState('');async function onSubmit(e:FormEvent<HTMLFormElement>){e.preventDefault();setError('');const data=Object.fromEntries(new FormData(e.currentTarget));const parsed=contactSchema.safeParse(data);if(!parsed.success){setError(parsed.error.issues[0]?.message??'Please check your details.');return}setPending(true);try{const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (!serviceId || !templateId || !publicKey) {
  setError('The contact form is not configured yet. Please contact our team by phone or email.');
  return;
}
const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || 'Not provided',
      company: parsed.data.company || 'Not provided',
      service: parsed.data.service,
      message: parsed.data.message,
      to_email: 'brandthrillsadv@gmail.com',
      reply_to: parsed.data.email,
    },
  }),
});
if (!response.ok) {
  const responseText = await response.text();
  console.error('[contact] EmailJS send failed:', response.status, responseText.slice(0, 300));
  throw new Error('Email could not be sent');
}
setSuccess(true);}catch{setError('Your enquiry could not be sent right now. Please try again, or call our team.')}finally{setPending(false)}}return <><PageIntro eyebrow="Contact us" title="Let’s make your next move matter." description="Have a brief, a big idea, or a question? We’d love to hear it. Start a conversation with our team."/><section className="section"><div className="wrap body-grid"><div><div className="eyebrow mb-5">Start a conversation</div><h2>Good things begin<br/>with a hello.</h2><p>Tell us where you want to take your brand. We’ll help you explore the possibilities.</p><div className="contact-info"><a href="tel:+919015756134"><Phone/><div><small>Call our team</small>+91 90157 56134<br/><span className="subtle">+91 89208 06372</span></div></a><a href="mailto:brandthrillsadv@gmail.com"><Mail/><div><small>Write to us</small>brandthrillsadv@gmail.com</div></a><div><MapPin/><div><small>Our locations</small>Sukhraili, Sector 17C,<br/>Gurugram, Haryana<br/><br/>E Block, Govindpuram,<br/>Ghaziabad, Uttar Pradesh<br/><a href="https://www.google.com/maps/search/?api=1&query=Sukhraili%20Sector%2017C%20Gurugram%20Haryana" target="_blank" rel="noopener noreferrer" className="text-link mt-3">Gurugram directions<ArrowUpRight size={13}/></a><br/><a href="https://www.google.com/maps/search/?api=1&query=E%20Block%20Govindpuram%20Ghaziabad%20Uttar%20Pradesh" target="_blank" rel="noopener noreferrer" className="text-link mt-3">Ghaziabad directions<ArrowUpRight size={13}/></a></div></div></div></div>{success?<div className="success-state" role="status"><CircleCheck size={42}/><h2>Thank you for reaching out.</h2><p>Your inquiry has been received. We look forward to learning more about your brand.</p><Button variant="outline" onClick={()=>setSuccess(false)} className="mt-5">Send another inquiry<ArrowUpRight/></Button></div>:<form className="contact-form" onSubmit={onSubmit}><div className="form-pair"><label className="field">Full name *<input name="name" required minLength={2} maxLength={100} placeholder="Your name" autoComplete="name"/></label><label className="field">Email address *<input name="email" type="email" required maxLength={255} placeholder="you@company.com" autoComplete="email"/></label></div><div className="form-pair"><label className="field">Phone number<input name="phone" type="tel" maxLength={30} placeholder="+91" autoComplete="tel"/></label><label className="field">Company<input name="company" maxLength={150} placeholder="Your company" autoComplete="organization"/></label></div><label className="field">What can we help with? *<select name="service" defaultValue={options.includes(search.service??'')?search.service:'Not sure yet'}>{options.map(o=><option key={o}>{o}</option>)}</select></label><label className="field">Tell us about your project *<textarea name="message" required minLength={10} maxLength={3000} placeholder="Your goals, markets, or the idea you have in mind..."/></label><input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true"/>{error&&<p role="alert" className="form-error">{error}</p>}<div><Button variant="agency" size="lg" type="submit" disabled={pending}>{pending?<><Loader2 className="animate-spin"/>Sending...</>:<>Send your inquiry<ArrowUpRight/></>}</Button><p className="form-note">Your details are only used to respond to your inquiry.</p></div></form>}</div></section></>}
