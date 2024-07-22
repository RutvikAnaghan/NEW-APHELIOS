import {
  FiDollarSign,
  FiCompass,
  FiCommand,
  FiBox,
} from "../assets/icons/vander";
import {
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaApple,
  FaAndroid,
  FaReact,
  FaShopify,
  FaWordpress,
  FaMagento,
  FaAmazon,
  FaGooglePay,
  FaPaypal,
  FaBootstrap,
  FaAngular,
} from "react-icons/fa";
import {
  SiDotnet,
  SiFlutter,
  SiOpencollective,
  SiEbay,
  SiSalesforce,
} from "react-icons/si";
import {
  FiGlobe,
  FiSmartphone,
  FiMonitor,
  FiShoppingCart,
  FiHeart,
  FiBook,
  FiHome,
  FiTruck,
  FiPlay,
  FiPhoneCall,
  FiCoffee,
  FiMapPin,
  FiCreditCard,FiCode, FiServer, FiLayers, FiLink,FiDatabase, FiGrid, FiCloud, FiPhone, FiPackage, FiTablet,
} from "react-icons/fi";

import client1 from "../assets/images/team/01.jpg";
import client2 from "../assets/images/team/02.jpg";
import client3 from "../assets/images/team/03.jpg";
import client4 from "../assets/images/team/04.jpg";
import client5 from "../assets/images/team/05.jpg";
import client6 from "../assets/images/team/06.jpg";
import client7 from "../assets/images/team/07.jpg";

import blog1 from "../assets/images/blog/01.jpg";
import blog2 from "../assets/images/blog/02.jpg";
import blog3 from "../assets/images/blog/03.jpg";

import company1 from "../assets/images/team/amazon.svg";
import company2 from "../assets/images/team/google.svg";
import company3 from "../assets/images/team/lenovo.svg";
import company4 from "../assets/images/team/paypal.svg";
import company5 from "../assets/images/team/shopify.svg";
import company6 from "../assets/images/team/spotify.svg";

export const servicesData = [
  {
    icon: SiSalesforce,
    title: "Salesforce Development",
    tech: [
      { name: "Salesforce Development", icon: SiSalesforce },
      { name: "Salesforce Lightning", icon: SiSalesforce },
      { name: "Salesforce Vlocity", icon: SiSalesforce },
      { name: "Salesforce Sales Cloud", icon: SiSalesforce },
      { name: "Salesforce Service Cloud", icon: SiSalesforce },
    ],
    desc: "Develop specialized software solutions tailored to your unique and strategic business needs",
  },
  {
    icon: FiGlobe,
    title: "Website Development",
    tech: [
      { name: "Laravel Development", icon: FaLaravel },
      { name: "Node JS Development", icon: FaNodeJs },
      { name: ".net Development", icon: SiDotnet },
      { name: "Python Development", icon: FaPython },
    ],
    desc: "Develop your website using the latest technologies and proven tools.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    tech: [
      { name: "IOS App Development", icon: FaApple },
      { name: "Android App Development", icon: FaAndroid },
      { name: "React Native App Development", icon: FaReact },
      { name: "Flutter App Development", icon: SiFlutter },
    ],
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
  {
    icon: FiMonitor,
    title: "Web Design",
    tech: [
      { name: "Responsive Website Design", icon: FiCompass },
      { name: "Angular & AngularJS Development", icon: FaAngular },
      { name: "ReactJs Development", icon: FaReact },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
  {
    icon: FiBox,
    title: "CMS & Ecommerce Development",
    tech: [
      { name: "Shopify Development", icon: FaShopify },
      { name: "WordPress Development", icon: FaWordpress },
      { name: "Magento", icon: FaMagento },
      { name: "Opencart", icon: SiOpencollective },
      { name: "Custom Development", icon: FiCommand },
    ],
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
  {
    icon: FiShoppingCart,
    title: "Payment and shipping API integration solutions",
    tech: [
      { name: "Amazon", icon: FaAmazon },
      { name: "Google Pay", icon: FaGooglePay },
      { name: "Paypal", icon: FaPaypal },
      { name: "Woocommerce", icon: FiDollarSign },
      { name: "eBay", icon: SiEbay },
    ],
    desc: "If the distribution of letters and words is random, the reader will not be distracted from making.",
  },
];

export const clientData = [
  {
    image: client2,
    name: "Sarah J.",
    title: "Co-founder",
    desc: '" Aphelios Solutions LLP revamped our website into a modern, responsive platform. Their expertise and attention to detail are exceptional! "',
  },
  {
    image: client1,
    name: "Mark D.",
    title: "Owner",
    desc: '" Our mobile app vision was brought to life flawlessly by Aphelios Team. Delivered on time, it exceeded our expectations. "',
  },
  {
    image: client3,
    name: "Emma R.",
    title: "CEO",
    desc: '" Talented and professional, Aphelios Team delivered a beautiful and functional web solution. Their support was exceptional. "',
  },
  {
    image: client4,
    name: "John K.",
    title: "Director of Sales",
    desc: '" Top-notch mobile app development from Aphelios. Innovative solutions and great user feedback made our app a success. "',
  },
  {
    image: client5,
    name: "Laura M.",
    title: "CEO & Founder",
    desc: '" Our new website perfectly represents our brand thanks to Aphelios Solutions LLP. Their creativity and technical prowess were outstanding. "',
  },
  {
    image: client6,
    name: "David H.",
    title: "Logistics Coordinator",
    desc: '" The app developed by Aphelios Solutions LLP is user-friendly, fast, and reliable. Their professionalism and responsiveness were impressive. "',
  },
  {
    image: client7,
    name: "Jennifer L.",
    title: "Logistics Coordinator",
    desc: '" Aphelios Solutions LLP turned our ideas into a functional and appealing website. The project was completed on time and within budget. "',
  },
];

export const blogData = [
  {
    image: blog1,
    title: "Design your apps in your own way",
    desc: "This is required when, for example, the final text is not yet available.",
    date: "13th March 2023",
  },
  {
    image: blog2,
    title: "How apps is changing the IT world",
    desc: "This is required when, for example, the final text is not yet available.",
    date: "5th May 2023",
  },
  {
    image: blog3,
    title: "Smartest Applications for Business",
    desc: "This is required when, for example, the final text is not yet available.",
    date: "19th June 2023",
  },
];

export const companyLogo = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
];

export const salesforceIndustryData = [
  {
    icon: SiSalesforce,
    title: "Salesforce for Healthcare",
    desc: "Transform patient care and streamline healthcare operations with Salesforce for Healthcare. Our solutions enable healthcare providers to manage patient records, schedule appointments, and track patient interactions efficiently. We help you implement HIPAA-compliant systems that improve patient engagement and care coordination.",
  },
  {
    icon: SiSalesforce,
    title: "Salesforce for Finance",
    desc: "Enhance financial services with Salesforce for Finance. Our customized solutions help financial institutions manage customer relationships, streamline operations, and ensure compliance with industry regulations. From wealth management to loan processing, we provide tools that drive efficiency and growth.",
  },
  {
    icon: SiSalesforce,
    title: "Salesforce for Retail",
    desc: "Revolutionize the retail experience with Salesforce for Retail. Our services help retailers manage customer data, optimize supply chains, and create personalized marketing campaigns. We enable seamless integration with e-commerce platforms, providing a unified view of customer interactions across all channels.",
  },
  {
    icon: SiSalesforce,
    title: "Salesforce for Education",
    desc: "Empower educational institutions with Salesforce for Education. We provide solutions for managing student information, admissions, and alumni relations. Our services help educational institutions enhance student engagement, streamline administrative processes, and improve communication with stakeholders.",
  },
  {
    icon: SiSalesforce,
    title: "Salesforce for Non-Profits",
    desc: "Maximize impact and efficiency with Salesforce for Non-Profits. Our solutions help non-profit organizations manage donor relationships, track fundraising activities, and measure program outcomes. We provide tools that enable better resource allocation and improved stakeholder engagement.",
  },
  {
    icon: SiSalesforce,
    title: "Salesforce for Real Estate",
    desc: "Optimize property management and sales with Salesforce for Real Estate. Our customized solutions help real estate professionals manage listings, track leads, and streamline transactions. We provide tools that enhance client relationships and improve operational efficiency.",
  },
  {
    icon: SiSalesforce,
    title: "Salesforce for Manufacturing",
    desc: "Drive operational excellence with Salesforce for Manufacturing. Our solutions help manufacturers manage supply chains, track production processes, and optimize inventory. We enable real-time visibility into operations, improving decision-making and productivity.",
  },
  {
    icon: SiSalesforce,
    title: "Salesforce for Logistics",
    desc: "Enhance logistics and supply chain management with Salesforce for Logistics. Our services help logistics companies manage transportation, track shipments, and optimize routes. We provide tools that improve operational efficiency and customer satisfaction.",
  },
  {
    icon: SiSalesforce,
    title: "Salesforce for Telecom",
    desc: "Transform telecommunications with Salesforce for Telecom. Our solutions help telecom companies manage customer interactions, track service requests, and optimize network performance. We enable seamless integration with billing systems and provide tools for better customer service.",
  },
  {
    icon: SiSalesforce,
    title: "Salesforce for Insurance",
    desc: "Streamline insurance processes with Salesforce for Insurance. Our customized solutions help insurance companies manage policies, track claims, and improve customer interactions. We provide tools that enhance operational efficiency and ensure compliance with industry regulations.",
  },
];
export const WebIndustryData = [
  {
    icon: FiShoppingCart,
    title: "E-commerce Web Development",
    desc: "Revolutionize your online store with our e-commerce web development services. From Shopify and Magento development to WooCommerce integration, we create custom e-commerce solutions tailored to your business. Our payment gateway integration and shopping cart development ensure a seamless shopping experience. Enhance your product catalog management and boost sales with our e-commerce SEO services.",
  },
  {
    icon: FiHeart,
    title: "Healthcare Web Development",
    desc: "Transform patient care with our healthcare web development solutions. We design HIPAA-compliant medical websites and patient portals, integrating electronic health records (EHR) for seamless data management. Our telemedicine web apps and custom healthcare solutions enhance patient engagement and streamline healthcare operations. Trust us for secure healthcare data solutions and appointment booking systems.",
  },
  {
    icon: FiDollarSign,
    title: "Financial Web Development",
    desc: "Elevate your financial services with our specialized financial web development. We provide fintech solutions, secure online transactions, and custom financial software development. Our expertise in blockchain development, investment platforms, and regulatory compliance ensures your financial operations are efficient and secure. Enhance customer experience with our banking website designs and payment processing integration.",
  },
  {
    icon: FiBook,
    title: "Educational Web Development",
    desc: "Empower your institution with our educational web development services. We create custom e-learning platforms, online course management systems, and virtual classrooms. Our solutions for school websites, student portals, and custom LMS development improve student engagement and administrative efficiency. Enhance your educational offerings with our interactive learning tools and digital library solutions.",
  },
  {
    icon: FiHome,
    title: "Real Estate Web Development",
    desc: "Optimize your property management with our real estate web development services. We offer property listing websites, IDX integration, and real estate CRM development. Our virtual tour solutions and mortgage calculator integration enhance client engagement. With our custom real estate software, improve operational efficiency and boost your online presence with real estate SEO.",
  },
  {
    icon: FiTruck,
    title: "Logistics Web Development",
    desc: "Enhance your logistics operations with our custom logistics web development. Our solutions for supply chain management, fleet management systems, and warehouse management streamline your processes. We offer real-time tracking, inventory management systems, and EDI integration to improve operational efficiency and customer satisfaction. Leverage our logistics analytics for better decision-making.",
  },
];

export const MobileIndustryData = [
  {
    icon: FiHeart,
    title: "Healthcare Mobile App Development",
    desc: "Transform patient care with our custom healthcare mobile app development services. We specialize in creating medical apps, telemedicine platforms, and health and fitness applications that comply with HIPAA regulations. Enhance patient engagement and streamline healthcare operations with our tailored solutions.",
  },
  {
    icon: FiCreditCard,
    title: "Fintech and Banking App Development",
    desc: "Revolutionize your financial services with our fintech and banking app development expertise. We develop secure mobile payment apps, investment platforms, and cryptocurrency applications. Our solutions ensure compliance with industry regulations and drive efficiency and growth.",
  },
  {
    icon: FiShoppingCart,
    title: "E-commerce and Retail App Development",
    desc: "Boost your retail business with our e-commerce app development services. We create feature-rich mobile shopping apps, POS systems, and loyalty program applications. Seamlessly integrate with e-commerce platforms to provide a unified customer experience across all channels.",
  },
  {
    icon: FiBook,
    title: "Educational App Development",
    desc: "Empower education with our comprehensive educational app development services. We build e-learning platforms, online course apps, and school management systems. Enhance student engagement and streamline administrative processes with our innovative solutions.",
  },
  {
    icon: FiHome,
    title: "Real Estate App Development",
    desc: "Optimize your real estate business with our custom real estate app development services. We develop property management systems, real estate listing apps, and virtual tour platforms. Improve client relationships and operational efficiency with our tailored solutions.",
  },
  {
    icon: FiTruck,
    title: "Logistics and Supply Chain App Development",
    desc: "Enhance logistics and supply chain management with our specialized app development services. We create fleet management systems, delivery apps, and warehouse management solutions. Improve operational efficiency and customer satisfaction with our custom applications.",
  },
  {
    icon: FiMapPin,
    title: "Travel and Booking App Development",
    desc: "Transform the travel experience with our travel app development services. We build booking platforms, hotel management systems, and travel itinerary applications. Provide seamless travel planning and booking experiences with our innovative solutions.",
  },
  {
    icon: FiCoffee,
    title: "Food and Beverage App Development",
    desc: "Revolutionize the food and beverage industry with our custom app development services. We create food delivery platforms, restaurant management systems, and online ordering applications. Enhance customer satisfaction and streamline operations with our tailored solutions.",
  },
  {
    icon: FiPhoneCall,
    title: "Telecom App Development",
    desc: "Enhance telecommunications with our telecom app development expertise. We build mobile network management systems, VoIP applications, and customer service platforms. Improve network performance and customer interactions with our custom solutions.",
  },
  {
    icon: FiPlay,
    title: "Entertainment and Media App Development",
    desc: "Engage your audience with our entertainment and media app development services. We create video streaming platforms, music streaming apps, and gaming applications. Provide immersive entertainment experiences with our cutting-edge solutions.",
  },
];



export const SalesforceData = [
  {
    icon: FiCode,
    title: "Salesforce Lightning Development",
    desc: "Harness the power of Salesforce Lightning to create dynamic and responsive applications. Our experienced developers specialize in building Lightning components and applications that enhance user experience and streamline business processes.",
  },
  {
    icon: FiServer,
    title: "Salesforce Apex Development",
    desc: "Unlock the full potential of Salesforce with custom Apex development. Our team delivers robust and scalable solutions tailored to your specific requirements, ensuring seamless integration and enhanced functionality.",
  },
  {
    icon: FiLayers,
    title: "Salesforce Visualforce Development",
    desc: "Enhance your Salesforce applications with custom Visualforce pages. We design and develop Visualforce solutions that provide a personalized user interface and improve overall application performance.",
  },
  {
    icon: FiLink,
    title: "Salesforce API Integration",
    desc: "Integrate Salesforce with your existing systems seamlessly using our API integration services. We ensure smooth data flow and synchronization across platforms, enhancing operational efficiency and data accuracy.",
  }, 
  {
    icon: FiDatabase,
    title: "Salesforce Data Migration",
    desc: "Move your data to Salesforce with confidence. Our data migration experts handle the entire process, from planning and mapping to execution and validation, ensuring data integrity and minimal disruption to your operations.",
  },
  {
    icon: FiGrid,
    title: "Salesforce CRM Solutions",
    desc: "Optimize your customer relationship management with our Salesforce CRM solutions. We help you implement and customize Salesforce CRM to align with your business processes, improving customer engagement and satisfaction.",
  },
  {
    icon: FiCloud,
    title: "Salesforce Automation",
    desc: "Automate your business processes with Salesforce automation tools. Our team designs and implements automated workflows and processes that increase productivity, reduce errors, and save time.",
  },
  {
    icon: FiPhone,
    title: "Salesforce Mobile App Development",
    desc: "Stay connected on the go with our Salesforce mobile app development services. We create custom mobile applications that provide access to Salesforce data and functionality anytime, anywhere.",
  },
  {
    icon: FiPackage,
    title: "Salesforce App Development",
    desc: "Develop custom Salesforce applications tailored to your business needs. Our expertise in Salesforce app development ensures you get solutions that enhance your operational efficiency and drive business growth.",
  },
  {
    icon: FiBox,
    title: "Salesforce Cloud Services",
    desc: "Leverage the power of the cloud with our Salesforce cloud services. We offer comprehensive cloud solutions, including setup, configuration, and management, to ensure your Salesforce environment is secure, scalable, and high-performing.",
  },
];



export const WebDevelopmentData = [
  {
    icon: FiCode,
    title: "Laravel Development",
    desc: "Transform your business with our expert Laravel Development services. Our team crafts robust and scalable web applications using Laravel’s powerful PHP framework, ensuring secure, high-performance solutions that meet your specific needs and drive digital success.",
  },
  {
    icon: FiServer,
    title: "Node JS Development",
    desc: "Harness the power of Node JS with our custom development services. We build high-performance, real-time applications that provide seamless user experiences and handle large volumes of data efficiently, perfect for dynamic and scalable web solutions.",
  },
  {
    icon: FiDatabase,
    title: ".NET Development",
    desc: "Leverage the versatility of the .NET framework with our development services. We create secure, scalable web solutions tailored to your business requirements, enhancing performance and reliability across various platforms.",
  },
  {
    icon: FiCloud,
    title: "Python Development",
    desc: "Utilize Python for versatile and high-performance web applications. Our expert Python Development team delivers custom solutions that are both efficient and scalable, ensuring that your web applications are tailored to your unique business needs.",
  },
  {
    icon: FiPhone,
    title: "Responsive Web Design",
    desc: "Enhance user engagement with our Responsive Web Design services. We create visually stunning, mobile-friendly websites that adapt seamlessly to different devices, ensuring an optimal viewing experience for all users.",
  },
  {
    icon: FiPackage,
    title: "Angular & AngularJS Development",
    desc: "Build dynamic, single-page applications with our Angular & AngularJS Development services. We use these powerful frameworks to create interactive, high-performance web applications that meet your business goals and provide a superior user experience.",
  },
  {
    icon: FiCode,
    title: "ReactJs Development",
    desc: "Optimize your web applications with our ReactJs Development services. We create fast, interactive user interfaces using ReactJs, delivering a responsive and engaging experience that enhances your online presence and drives business growth.",
  },
  {
    icon: FiServer,
    title: "Bootstrap Web Design",
    desc: "Utilize Bootstrap for modern, responsive web design. Our team employs this popular front-end framework to develop visually appealing websites that offer a seamless user experience across various devices and screen sizes.",
  },
  {
    icon: FiDatabase,
    title: "CMS Development",
    desc: "Empower your content management with our CMS Development services. From WordPress and Magento to Shopify and Opencart, we build custom CMS solutions that streamline content management and enhance your website’s functionality.",
  },
  {
    icon: FiCloud,
    title: "Ecommerce Development",
    desc: "Boost your online sales with our Ecommerce Development services. We offer tailored solutions for platforms like Shopify, Magento, and WooCommerce, integrating payment and shipping APIs to create a smooth and efficient online shopping experience.",
  },
  {
    icon: FiPhone,
    title: "API Integration Solutions",
    desc: "Integrate essential services with our API Integration solutions. We offer seamless integration with platforms like Amazon, Google Pay, PayPal, and eBay, enhancing your website’s functionality and improving operational efficiency.",
  },
];

export const MobileAppDevelopmentData = [
  {
    icon: FiSmartphone,
    title: "iOS App Development",
    desc: "Create exceptional apps for Apple devices with our iOS App Development services. Our team focuses on delivering high-performance, user-centric applications that leverage the latest iOS technologies to provide a seamless experience for your users on iPhones and iPads.",
  },
  {
    icon: FiTablet,
    title: "Android App Development",
    desc: "Develop feature-rich applications for the Android ecosystem with our Android App Development services. We build scalable and robust apps optimized for a wide range of Android devices, ensuring a broad reach and enhanced user engagement.",
  },
  {
    icon: FiCode,
    title: "React Native App Development",
    desc: "Build high-quality, cross-platform applications with our React Native App Development services. We use React Native to create apps that offer a consistent and engaging user experience across both iOS and Android platforms, optimizing development efficiency and reducing time-to-market.",
  },
  {
    icon: FiLayers,
    title: "Flutter App Development",
    desc: "Utilize Flutter for stunning, high-performance applications with our Flutter App Development services. We design and develop visually appealing apps that run smoothly on multiple platforms, providing a native-like experience with faster development cycles and reduced costs.",
  },
];


export const WebDesignData = [
  {
    icon: FiMonitor,
    title: "Responsive Website Design",
    desc: "Design websites that look great and function seamlessly on any device with our Responsive Website Design services. We ensure that your website adapts to various screen sizes and resolutions, providing an optimal user experience across desktops, tablets, and smartphones.",
  },
  {
    icon: FiCode,
    title: "Angular & AngularJS Development",
    desc: "Build dynamic, single-page applications with Angular's robust framework. Our Angular & AngularJS Development services leverage advanced features to create interactive, high-performance web applications that meet your business needs.",
  },
  {
    icon: FiSmartphone,
    title: "ReactJs Development",
    desc: "Create interactive and user-friendly interfaces with ReactJs. Our ReactJs Development services focus on building high-quality, responsive user interfaces that enhance user engagement and streamline your web applications.",
  },
  {
    icon: FiGrid,
    title: "Bootstrap Design",
    desc: "Utilize Bootstrap for a responsive and modern design that enhances user experience. Our Bootstrap Design services provide a solid foundation for developing visually appealing and functional websites that work seamlessly across all devices.",
  },
];

export const CMS_EcommerceData = [
  {
    icon: FiCode,
    title: "Shopify Development",
    desc: "Build a powerful, user-friendly ecommerce store with Shopify's flexible platform. Our Shopify Development services create scalable and visually appealing online stores tailored to your business requirements, ensuring an exceptional shopping experience.",
  },
  {
    icon: FiCode,
    title: "WordPress Development",
    desc: "Create a dynamic website with WordPress's customizable themes and plugins. Our WordPress Development services offer tailored solutions for blogs, business sites, and online stores, providing a robust platform for content management and growth.",
  },
  {
    icon: FiCode,
    title: "Magento Development",
    desc: "Develop advanced ecommerce solutions with Magento's comprehensive features. Our Magento Development services focus on creating feature-rich online stores with enhanced scalability, flexibility, and customization options for a superior shopping experience.",
  },
  {
    icon: FiCode,
    title: "Opencart Development",
    desc: "Utilize Opencart for an efficient and scalable ecommerce platform. Our Opencart Development services provide a cost-effective solution for managing and expanding your online store with a user-friendly interface and powerful ecommerce functionalities.",
  },
  {
    icon: FiCode,
    title: "Custom CMS Development",
    desc: "Get bespoke CMS solutions tailored to your unique business needs. Our Custom CMS Development services offer flexible and scalable content management systems designed to fit your specific requirements and streamline your content management processes.",
  },
];

export const PaymentShippingAPIData = [
  {
    icon: FiSmartphone,
    title: "Amazon Integration",
    desc: "Integrate Amazon's payment gateway for a secure and reliable checkout experience. Our Amazon Integration services ensure smooth and efficient transactions, enhancing your ecommerce operations and customer satisfaction.",
  },
  {
    icon: FiSmartphone,
    title: "Google Pay Integration",
    desc: "Offer customers a fast and secure payment option with Google Pay. Our Google Pay Integration services streamline the payment process, providing a convenient and efficient checkout experience for your online store.",
  },
  {
    icon: FiSmartphone,
    title: "PayPal Integration",
    desc: "Provide a trusted payment method with PayPal's extensive features. Our PayPal Integration services enable seamless transactions and enhance your ecommerce platform's reliability and security.",
  },
  {
    icon: FiSmartphone,
    title: "Woocommerce Integration",
    desc: "Integrate Woocommerce for efficient ecommerce management and transactions. Our Woocommerce Integration services enhance your online store's functionality, providing robust features and seamless payment processing.",
  },
  {
    icon: FiSmartphone,
    title: "eBay Integration",
    desc: "Seamlessly connect with eBay for expanded marketplace capabilities. Our eBay Integration services help you manage and streamline your eBay listings, boosting your reach and sales through effective marketplace integration.",
  },
];