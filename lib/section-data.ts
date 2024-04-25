export type SectionType = {
	position: number;
	id: string;
	title: string;
	bgImage: string;
};

export const sections = [
	{
		position: 0,
		id: 'header',
		title: 'Header',
		bgImage: 'https://images.unsplash.com/photo-1510279770292-4b34de9f5c23',
	},
	{
		position: 1,
		id: 'about',
		title: 'About',
		bgImage: 'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8',
	},
	{
		position: 2,
		id: 'blogs',
		title: 'Blogs',
		bgImage: 'https://images.unsplash.com/photo-1533109721025-d1ae7ee7c1e1',
	},
	{
		position: 3,
		id: 'footer',
		title: 'Footer',
		bgImage: 'https://images.unsplash.com/photo-1481833761820-0509d3217039',
	},
];
