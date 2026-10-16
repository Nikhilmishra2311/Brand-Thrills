import hero from '@/assets/city-billboard.jpg';
import outdoor from '@/assets/outdoor.jpg';
import activation from '@/assets/activation.jpg';
import event from '@/assets/event.jpg';
import rwaSector49 from '@/assets/rwa-sector-49-entry.jpg';
import metroHospital from '@/assets/metro-hospital-community-centre.jpg';
import ksbWide from '@/assets/ksb-exhibition-stand-wide.jpg';
import ksbInteraction from '@/assets/ksb-exhibition-stand-interaction.jpg';
import ksbFront from '@/assets/ksb-exhibition-stand-front.jpg';
import surajkundMela from '@/assets/surajkund-diwali-mela-outdoor.jpg';
import haryanaTourism from '@/assets/haryana-tourism-mela-promotion.jpg';
import coca from '@/assets/cocacola.asset.json';
import dabur from '@/assets/dabur.asset.json';
import mother from '@/assets/mother-dairy.asset.json';
import reliance from '@/assets/reliance.asset.json';
import adani from '@/assets/adani.asset.json';
import jindal from '@/assets/jindal.asset.json';

import posterEvent from '@/assets/poster-event.jpg';
import posterOutdoor from '@/assets/poster-outdoor.jpg';
import posterExhibition from '@/assets/poster-exhibition.jpg';
import posterShop from '@/assets/poster-shop-branding.jpg';
import posterInshop from '@/assets/poster-inshop-branding.jpg';
import poster3d from '@/assets/poster-3d-letter-board.jpg';
import posterVehicle from '@/assets/poster-vehicle-branding.jpg';

export { hero, outdoor, activation, event, rwaSector49, metroHospital, ksbWide, ksbInteraction, ksbFront, surajkundMela, haryanaTourism };
export const clients = [{ name:'Coca-Cola',image:coca.url },{name:'Dabur',image:dabur.url},{name:'Mother Dairy',image:mother.url},{name:'Reliance',image:reliance.url},{name:'Adani Wilmar',image:adani.url},{name:'Jindal Steel',image:jindal.url}];
export const services = [
 {slug:'events',title:'Event Management',short:'Make every moment memorable.',description:'Corporate events, product launches, exhibitions, and promotions designed to put your brand centre stage.',image:posterEvent,items:['Corporate events','Product launches','Exhibitions & stalls','Dealer meets','Community events','Mela and festival promotions'],detail:'From corporate gatherings to public melas and exhibitions, we coordinate visual branding, production, and on-ground details that make every event work for your brand.'},
 {slug:'atl',title:'Outdoor Advertising',short:'Big ideas. Bigger presence.',description:'Hoardings, billboards, unipoles, transit media, and high-visibility outdoor campaigns.',image:posterOutdoor,items:['Outdoor & billboards','Hoardings and unipoles','Transit media','Wall wraps','Airport branding','Campaign planning'],detail:'Put your brand where people notice it. We help plan and execute outdoor campaigns with strong visibility across relevant markets.'},
 {slug:'btl',title:'Exhibition Stall',short:'Real experiences. Real connections.',description:'Creative and customized exhibition stall design, fabrication, and brand experiences.',image:posterExhibition,items:['Stall design','Fabrication','Branding and graphics','Product displays','Visitor engagement','On-ground execution'],detail:'We bring exhibition spaces to life with branded structures, graphics, displays, and coordinated on-ground execution.'},
 {slug:'shop-branding',title:'Shop Branding',short:'Make your storefront stand out.',description:'Retail branding, signage, storefront design, and visual merchandising.',image:posterShop,items:['Shop front signage','Store fascia and signboards','Retail identity','Window graphics','Storefront design','Visual merchandising'],detail:'We help shops and retail businesses stand out with clear storefront branding, signboards, and visual elements that make them easier to notice and remember.'},
 {slug:'inshop-branding',title:'Inshop Branding',short:'Bring your brand to life inside.',description:'In-shop displays, branding, point-of-sale materials, and retail experience solutions.',image:posterInshop,items:['In-store displays','Point-of-sale branding','Product display units','Wall graphics','Retail branding','Promotional displays'],detail:'From shelves to walls and display counters, we create branded retail environments that help customers discover products and engage with your brand.'},
 {slug:'signage-3d-letters',title:'3D Letter Board',short:'Get noticed day and night.',description:'LED signage, glow sign boards, 3D letters, ACP work, and premium signboards.',image:poster3d,items:['3D letter boards','LED signage','Glow sign boards','ACP work','Acrylic signage','Wayfinding signs'],detail:'We design and produce signage that makes your business easy to find and gives your space a distinctive, professional identity.'},
 {slug:'vehicle-branding',title:'Vehicle Branding',short:'Take your brand on the road.',description:'Car, van, bus, and fleet branding solutions that turn vehicles into moving visibility.',image:posterVehicle,items:['Vehicle wraps','Fleet branding','Car graphics','Van branding','Commercial vehicle graphics'],detail:'Vehicle branding helps your message travel. We plan and produce graphics for individual vehicles and fleets, tailored to your campaign and brand identity.'},
 {slug:'printing',title:'Flex, Vinyl & Print',short:'Print made to make an impact.',description:'Flex, vinyl, banners, standees, backdrops, and large-format print solutions.',image:metroHospital,items:['Flex printing','Vinyl printing and wraps','Large-format printing','Banners','Standees','Campaign backdrops'],detail:'We support campaigns with practical, high-visibility print production—from banners and flex to vinyl graphics and large-format outdoor materials.'},
 {slug:'company-promotion',title:'Company Promotion',short:'Keep your brand in circulation.',description:'Corporate gifting, promotional items, office branding, and complete branding solutions.',image:ksbFront,items:['Promotional merchandise','Corporate branding','Office branding','Campaign collateral','Branded giveaways','Integrated promotions'],detail:'We bring company promotion together with branded materials and campaign support that keep your identity consistent across events, offices, and customer touchpoints.'},
];
export const cities=['New Delhi','Gurugram','Ludhiana','Jammu','Solan','Kanpur','Dehradun','Jaipur','Patna','Pune','Ahmedabad','Kolkata','Hyderabad','Bengaluru'];
export const departments=[{title:'OOH Planning & Buying',description:'Finding the right places for your brand to be seen, with media planning and buying built around your audience.'},{title:'BTL & Market Activations',description:'Turning brand strategy into real-world experiences through retail and on-ground execution.'},{title:'ATL, Radio & Print',description:'Connecting the dots across broadcast and print to give your message a consistent voice.'},{title:'Digital Team',description:'Bringing brands to life across digital media and social platforms.'},{title:'R&D & Strategy',description:'Combining research and fresh thinking to find the right approach for every campaign.'},{title:'Design & Production',description:'Designers, print specialists, and outdoor teams who carry every idea through to execution.'}];
