import { cn } from '@/lib/utils';

const SectionLayout = ({ section }: { section: any }) => {
	const { id, bgImage, title } = section;
	return (
		<div
			id={`${id}`}
			className={cn(
				'h-screen grid place-content-center bg-no-repeat bg-cover position bg-fixed bg-center'
			)}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<h1 className="text-white text-6xl">{title}</h1>
		</div>
	);
};

export default SectionLayout;
