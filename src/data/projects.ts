export interface Project {
	slug: string;
	iconImage?: string;
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
	type?: string;
}

export const projects: Project[] = [
	{
		slug: 'movistar-prosegur-alarms',
		iconImage: '/projects/prosegur/prosegur-icon.svg',
		isSideProject: false,
		title: 'Movistar Prosegur Alarms',
		description: 'Redesigning Movistar Prosegur Alarms self-service experience to increase customer satisfaction and reduce support calls.\n\nI led e2e design initiatives, from identifying opportunities through data and app performance analysis to delivering new in-app features, defining user journeys, and orchestrating launch communication strategies that improved NPS and user adoption.',
		dateRange: '2023 - Present',
		industry: 'Security & services',
		services: 'UX/UI · Communication strategy · Data driven',
		heroImage: 'projects/prosegur/prosegur.svg',
		contentImage: 'projects/prosegur/prosegur.svg',
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
		tags: ['UX/UI', 'Performance analysis', 'Product strategy', 'Team management', 'Benchmarking', 'Communication strategy', 'Mentoring', 'Data driven', 'Design System'],
		type: 'App'
	},
	{
		slug: 'selectra',
		iconImage: '/projects/selectra/selectra-icon.svg',
		isSideProject: false,
		title: 'Selectra',
		description: 'Colaboration in full cycle product design. From research and discovery to validation and go into production of MVPs optimizing performance.',
		dateRange: '2023 - Present',
		industry: 'Security & services',
		services: 'UX/UI · Communication strategy · Data driven',
		heroImage: 'projects/selectra/selectra.svg',
		contentImage: 'projects/selectra/selectra.svg',
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
		tags: ['UX/UI','Performance analysis','Communication strategy','Testing','Design System'],
		type: 'Webapp'
	},
	{
		slug: 'cupra-seat',
		iconImage: '/projects/cupra/cupra-icon.svg',
		isSideProject: false,
		title: 'Cupra & SEAT',
		description: 'Designed of systems for next generation radios, building scalable design foundations and visual languages that shaped future interfaces.',
		dateRange: '2023 - Present',
		industry: 'Auto industry',
		services: 'UX/UI · Communication strategy · Data driven',
		heroImage: 'projects/cupra/cupra.svg',
		contentImage: 'projects/cupra/cupra.svg',
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
		tags: ['UX/UI','Team management','Mentoring','Design System'],
		type: 'Radio'
	},
	{
		slug: 'imagins-ai',
		iconImage: '/projects/imagins/imagins-icon.svg',
		isSideProject: true,
		title: 'Imagins AI',
		description: 'AI story generator, create highly customizable illustrated books with an image and text model.',
		dateRange: '2023 - Present',
		industry: 'AI & Creative',
		services: 'UX/UI Design · AI Integration · Product Strategy',
		heroImage: '/placeholder-hero.jpg',
		contentImage: '/placeholder-content.jpg',
		overview: 'AI story generator, create highly customizable illustrated books with an image and text model.',
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
		galleryTitle: 'Interiorism',
		type: 'Webapp'
	},
	{
		slug: 'roam-rider',
		iconImage: '/projects/roamrider/roamrider-icon.svg',
		isSideProject: true,
		title: 'Roam Rider',
		description: 'Designed to give riders complete visibility and control over their journey  in one seamless experience.',
		dateRange: '2024 - Present',
		industry: 'Mobility & Travel',
		services: 'UX/UI Design · Mobile App Design · User Research',
		heroImage: '/placeholder-hero.jpg',
		contentImage: '/placeholder-content.jpg',
		overview: 'Designed to give riders complete visibility and control over their journey  in one seamless experience.',
		role: 'Product designer leading the mobile app experience, focusing on creating intuitive navigation and real-time information display.',
		challenge: 'Consolidating multiple travel touchpoints into a single, cohesive experience that reduces friction and increases user confidence.',
		solution: 'Designed a unified interface that aggregates booking, navigation, and real-time updates in a single, easy-to-use mobile application.',
		dataCards: [
			{ percentage: '20%', label: 'Security' },
			{ percentage: '20%', label: 'Energy' },
			{ percentage: '20%', label: 'Telco' },
			{ percentage: '20%', label: 'Automotive' },
			{ percentage: '20%', label: 'AI' }
		],
		type: 'App'
	}
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find(project => project.slug === slug);
}

