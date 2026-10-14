import hero from '@/assets/city-billboard.jpg';
import outdoor from '@/assets/outdoor.jpg';
import activation from '@/assets/activation.jpg';
import event from '@/assets/event.jpg';
import coca from '@/assets/cocacola.asset.json';
import dabur from '@/assets/dabur.asset.json';
import mother from '@/assets/mother-dairy.asset.json';
import reliance from '@/assets/reliance.asset.json';
import adani from '@/assets/adani.asset.json';
import jindal from '@/assets/jindal.asset.json';
export { hero, outdoor, activation, event };
export const clients = [{ name:'Coca-Cola',image:coca.url },{name:'Dabur',image:dabur.url},{name:'Mother Dairy',image:mother.url},{name:'Reliance',image:reliance.url},{name:'Adani Wilmar',image:adani.url},{name:'Jindal Steel',image:jindal.url}];
export const services = [
 {slug:'atl',title:'ATL & Outdoor',short:'Big ideas. Bigger presence.',description:'Put your brand where the world is watching. Outdoor, transit, print, radio, and television.',image:outdoor,items:['Outdoor & billboards','Metro & bus branding','Airport branding','TV commercials','Radio campaigns','Newspaper & magazines','Cinema advertising'],detail:'From a busy city junction to the screens in your audience’s homes, we plan and execute above-the-line campaigns that give your brand a powerful presence.'},
 {slug:'btl',title:'BTL & Activations',short:'Real experiences. Real connections.',description:'Bring your brand closer to people with retail branding, market activations, and on-ground experiences.',image:activation,items:['Retail & in-shop branding','Market activations','Product sampling','Rural promotions','Wall wraps','Wall painting','In-shop activations'],detail:'Great brands are experienced, not just seen. Our on-ground teams connect your brand with its audience through retail visibility, sampling, and engaging local activations.'},
 {slug:'innovations',title:'Innovations',short:'Anything but ordinary.',description:'Break through the noise with unconventional ideas, digital experiences, and unexpected brand moments.',image:hero,items:['Unconventional advertising','Digital media','Social media campaigns','Influencer marketing','Guerrilla marketing','Experiential concepts'],detail:'When the usual approach is not enough, we find a different way in. We bring strategy, creative thinking, and new media together to make your brand stand out.'},
 {slug:'events',title:'Corporate Events',short:'Moments that mean more.',description:'Make every gathering count. Product launches, conferences, and corporate experiences, thoughtfully delivered.',image:event,items:['Product launches','Corporate conferences','Seminars','Dealer meets','Corporate events','Event production'],detail:'From an intimate dealer meet to a large-scale launch, our team brings every detail together to create an experience that feels unmistakably yours.'},
];
export const cities=['New Delhi','Gurugram','Ludhiana','Jammu','Solan','Kanpur','Dehradun','Jaipur','Patna','Pune','Ahmedabad','Kolkata','Hyderabad','Bengaluru'];
export const departments=[{title:'OOH Planning & Buying',description:'Finding the right places for your brand to be seen, with media planning and buying built around your audience.'},{title:'BTL & Market Activations',description:'Turning brand strategy into real-world experiences through retail and on-ground execution.'},{title:'ATL, Radio & Print',description:'Connecting the dots across broadcast and print to give your message a consistent voice.'},{title:'Digital Team',description:'Bringing brands to life across digital media and social platforms.'},{title:'R&D & Strategy',description:'Combining research and fresh thinking to find the right approach for every campaign.'},{title:'Design & Production',description:'Designers, print specialists, and outdoor teams who carry every idea through to execution.'}];
