export interface Project {
	slug: string;
	isSideProject: boolean;
	title: string;
	description: string;
	dateRange?: string;
	industry?: string;
	services?: string;
	heroImage?: string;
	contentImage?: string;
	overview?: string;
	role?: string;
	challenge?: string;
	solution?: string;
	dataCards?: Array<{percentage: string, label: string}>;
	galleryImages?: string[];
	galleryTitle?: string;
	tags?: string[];
}

export const projects: Project[] = [
	{
		slug: 'movistar-prosegur-alarms',
		isSideProject: false,
		title: 'Movistar Prosegur Alarms',
		description: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		dateRange: '2023 - Present',
		industry: 'Security & services',
		services: 'UX/UI · Communication strategy · Data driven',
		heroImage: '/placeholder-hero.jpg',
		contentImage: '/placeholder-content.jpg',
		overview: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		role: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		challenge: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		solution: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		dataCards: [
			{ percentage: '50%', label: 'Security' },
			{ percentage: '50%', label: 'Energy' },
			{ percentage: '50%', label: 'Telco' },
			{ percentage: '50%', label: 'Automotive' },
			{ percentage: '50%', label: 'AI' }
		],
		tags: ['UX/UI', 'Performance analysis', 'Product strategy', 'Team management', 'Benchmarking', 'Communication strategy', 'Mentoring', 'Data driven', 'Design System']
	},
	{
		slug: 'selectra',
		isSideProject: false,
		title: 'Selectra',
		description: 'Colaboration in full cycle product design. From research and discovery to validation and go into production of MVPs optimizing performance.',
		dateRange: '2023 - Present',
		industry: 'Security & services',
		services: 'UX/UI · Communication strategy · Data driven',
		heroImage: '/placeholder-hero.jpg',
		contentImage: '/placeholder-content.jpg',
		overview: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		role: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		challenge: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		solution: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		dataCards: [
			{ percentage: '50%', label: 'Security' },
			{ percentage: '50%', label: 'Energy' },
			{ percentage: '50%', label: 'Telco' },
			{ percentage: '50%', label: 'Automotive' },
			{ percentage: '50%', label: 'AI' }
		],
		tags: ['UX/UI','Performance analysis','Communication strategy','Testing','Design System']
	},
	{
		slug: 'cupra-seat',
		isSideProject: false,
		title: 'Cupra & SEAT',
		description: 'Designed of systems for next generation radios, building scalable design foundations and visual languages that shaped future interfaces.',
		dateRange: '2023 - Present',
		industry: 'Auto industry',
		services: 'UX/UI · Communication strategy · Data driven',
		heroImage: '/placeholder-hero.jpg',
		contentImage: '/placeholder-content.jpg',
		overview: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		role: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		challenge: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		solution: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		dataCards: [
			{ percentage: '50%', label: 'Security' },
			{ percentage: '50%', label: 'Energy' },
			{ percentage: '50%', label: 'Telco' },
			{ percentage: '50%', label: 'Automotive' },
			{ percentage: '50%', label: 'AI' }
		],
		tags: ['UX/UI','Team management','Mentoring','Design System']
	},
	{
		slug: 'imagins-ai',
		isSideProject: true,
		title: 'Imagins AI',
		description: 'An AI-powered story generator that creates fully customizable illustrated books by combining text and image models. Designed to explore new ways of storytelling and visual expression.',
		dateRange: '2023 - Present',
		industry: 'AI & Creative',
		services: 'UX/UI Design · AI Integration · Product Strategy',
		heroImage: '/placeholder-hero.jpg',
		contentImage: '/placeholder-content.jpg',
		overview: 'An AI-powered story generator that creates fully customizable illustrated books by combining text and image models. Designed to explore new ways of storytelling and visual expression.',
		role: 'Led the end-to-end design of an AI-powered storytelling platform, from concept to implementation. Focused on creating intuitive interfaces for complex AI interactions.',
		challenge: 'Designing interfaces that make AI technology accessible and understandable to users while maintaining creative control and flexibility.',
		solution: 'Created a modular design system that allows users to customize every aspect of their stories while providing AI-powered suggestions and automation.',
		dataCards: [
			{ percentage: '30%', label: 'Security' },
			{ percentage: '30%', label: 'Energy' },
			{ percentage: '30%', label: 'Telco' },
			{ percentage: '30%', label: 'Automotive' },
			{ percentage: '30%', label: 'AI' }
		],
		galleryImages: ['/placeholder-gallery-1.jpg', '/placeholder-gallery-2.jpg', '/placeholder-gallery-3.jpg', '/placeholder-gallery-4.jpg'],
		galleryTitle: 'Interiorism'
	},
	{
		slug: 'roam-rider',
		isSideProject: true,
		title: 'Roam Rider',
		description: 'An app designed to give riders complete visibility and control over their journey — bringing every stage of the trip together in one seamless experience.',
		dateRange: '2024 - Present',
		industry: 'Mobility & Travel',
		services: 'UX/UI Design · Mobile App Design · User Research',
		heroImage: '/placeholder-hero.jpg',
		contentImage: '/placeholder-content.jpg',
		overview: 'An app designed to give riders complete visibility and control over their journey — bringing every stage of the trip together in one seamless experience.',
		role: 'Product designer leading the mobile app experience, focusing on creating intuitive navigation and real-time information display.',
		challenge: 'Consolidating multiple travel touchpoints into a single, cohesive experience that reduces friction and increases user confidence.',
		solution: 'Designed a unified interface that aggregates booking, navigation, and real-time updates in a single, easy-to-use mobile application.',
		dataCards: [
			{ percentage: '20%', label: 'Security' },
			{ percentage: '20%', label: 'Energy' },
			{ percentage: '20%', label: 'Telco' },
			{ percentage: '20%', label: 'Automotive' },
			{ percentage: '20%', label: 'AI' }
		]
	}
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find(project => project.slug === slug);
}

