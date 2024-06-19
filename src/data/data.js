import { FiDollarSign, FiCompass,FiCommand, FiBox } from '../assets/icons/vander'
import { FaLaravel, FaNodeJs, FaPython, FaApple, FaAndroid, FaReact, FaShopify, FaWordpress, FaMagento, FaAmazon, FaGooglePay, FaPaypal, FaBootstrap, FaAngular } from 'react-icons/fa';
import { SiDotnet, SiFlutter, SiOpencollective, SiEbay, SiSalesforce } from 'react-icons/si';
import { FiGlobe, FiSmartphone, FiMonitor, FiShoppingCart } from 'react-icons/fi';

import client1 from '../assets/images/team/01.jpg'
import client2 from '../assets/images/team/02.jpg'
import client3 from '../assets/images/team/03.jpg'
import client4 from '../assets/images/team/04.jpg'
import client5 from '../assets/images/team/05.jpg'
import client6 from '../assets/images/team/06.jpg'

import blog1 from '../assets/images/blog/01.jpg'
import blog2 from '../assets/images/blog/02.jpg'
import blog3 from '../assets/images/blog/03.jpg'

import company1 from '../assets/images/team/amazon.svg'
import company2 from '../assets/images/team/google.svg'
import company3 from '../assets/images/team/lenovo.svg'
import company4 from '../assets/images/team/paypal.svg'
import company5 from '../assets/images/team/shopify.svg'
import company6 from '../assets/images/team/spotify.svg'


const techIcons = {
    'Laravel Development': FaLaravel,
    'Node JS Development': FaNodeJs,
    '.net Development': SiDotnet,
    'Python Development': FaPython,
    'IOS App Development': FaApple,
    'Android App Development': FaAndroid,
    'React Native App Development': FaReact,
    'Flutter App Development': SiFlutter,
    'Responsive Website Design': FiCompass,
    'Angular & AngularJS Development': FaAngular,
    'ReactJs Development': FaReact,
    'Bootstrap': FaBootstrap,
    'Shopify Development': FaShopify,
    'WordPress Development': FaWordpress,
    'Magento': FaMagento,
    'Opencart': SiOpencollective,
    'Custom Development': FiCommand,
    'Amazon': FaAmazon,
    'Google Pay': FaGooglePay,
    'Paypal': FaPaypal,
    'Woocommerce': FiDollarSign,
    'eBay': SiEbay
};

export const servicesData = [
    {
        icon: SiSalesforce,
        title: 'Salesforce Development',
        tech: [
            { name: 'Salesforce Development', icon: SiSalesforce },
            { name: 'Salesforce Lightning', icon: SiSalesforce },
            { name: 'Salesforce Vlocity', icon: SiSalesforce },
            { name: 'Salesforce Sales Cloud', icon: SiSalesforce },
            { name: 'Salesforce Service Cloud', icon: SiSalesforce },
        ],
        desc: 'Develop specialized software solutions tailored to your unique and strategic business needs'
    },
    {
        icon: FiGlobe,
        title: 'Website Development',
        tech: [
            { name: 'Laravel Development', icon: FaLaravel },
            { name: 'Node JS Development', icon: FaNodeJs },
            { name: '.net Development', icon: SiDotnet },
            { name: 'Python Development', icon: FaPython }
        ],
        desc: 'Develop your website using the latest technologies and proven tools.'
    },
    {
        icon: FiSmartphone,
        title: 'Mobile App Development',
        tech: [
            { name: 'IOS App Development', icon: FaApple },
            { name: 'Android App Development', icon: FaAndroid },
            { name: 'React Native App Development', icon: FaReact },
            { name: 'Flutter App Development', icon: SiFlutter }
        ],
        desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: FiMonitor,
        title: 'Web Design',
        tech: [
            { name: 'Responsive Website Design', icon: FiCompass },
            { name: 'Angular & AngularJS Development', icon: FaAngular },
            { name: 'ReactJs Development', icon: FaReact },
            { name: 'Bootstrap', icon: FaBootstrap }
        ],
        desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: FiBox,
        title: 'CMS & Ecommerce Development',
        tech: [
            { name: 'Shopify Development', icon: FaShopify },
            { name: 'WordPress Development', icon: FaWordpress },
            { name: 'Magento', icon: FaMagento },
            { name: 'Opencart', icon: SiOpencollective },
            { name: 'Custom Development', icon: FiCommand }
        ],
        desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: FiShoppingCart,
        title: 'Payment and shipping API integration solutions',
        tech: [
            { name: 'Amazon', icon: FaAmazon },
            { name: 'Google Pay', icon: FaGooglePay },
            { name: 'Paypal', icon: FaPaypal },
            { name: 'Woocommerce', icon: FiDollarSign },
            { name: 'eBay', icon: SiEbay }
        ],
        desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
    }
];

export const clientData = [
    {
        image:client1,
        name:'Calvin Carlo',
        title:'Manager',
        desc:'" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "'
    },
    {
        image:client2,
        name:'Christa Smith',
        title:'Manager',
        desc:'" The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "'
    },
    {
        image:client3,
        name:'Jemina CLone',
        title:'Manager',
        desc:'" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others"'
    },
    {
        image:client4,
        name:'Smith Vodka',
        title:'Manager',
        desc:'" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts "'
    },
    {
        image:client5,
        name:'Cristino Murfi',
        title:'Manager',
        desc:'" There is now an abundance of readable dummy texts. These are usually used when a text is required"'
    },
    {
        image:client6,
        name:'Cristino Murfi',
        title:'Manager',
        desc:'" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero "'
    },
]

export const blogData = [
    {
        image:blog1,
        title:'Design your apps in your own way',
        desc:'This is required when, for example, the final text is not yet available.',
        date:'13th March 2023'
    },
    {
        image:blog2,
        title:'How apps is changing the IT world',
        desc:'This is required when, for example, the final text is not yet available.',
        date:'5th May 2023'
    },
    {
        image:blog3,
        title:'Smartest Applications for Business',
        desc:'This is required when, for example, the final text is not yet available.',
        date:'19th June 2023'
    },
]

export const companyLogo = [company1, company2, company3, company4, company5, company6]