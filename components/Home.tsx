import Scrollbar from '@/components/Scrollbar';
import Section from '@/components/Section';
import { sections } from '@/lib/section-data';
import SectionLayout from './SectionLayout';

export default function Home() {
	return (
		<div className="scrollable-area">
			<Scrollbar sections={sections} />
			{sections.map((section) => (
				<Section
					key={section.position}
					positionId={section.position}
					isFirst={section.position === 0}
					isLast={section.position === sections.length - 1}
				>
					<SectionLayout section={section} />
				</Section>
			))}
		</div>
	);
}
