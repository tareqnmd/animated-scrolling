'use client';
import SectionContext from '@/context/SectionContext';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import React, { HTMLAttributes, useContext, useRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
	positionId: number;
	isFirst?: boolean;
	isLast?: boolean;
}

const Section: React.FC<SectionProps> = ({
	positionId,
	isFirst = false,
	isLast = false,
	children,
	...props
}) => {
	const { setActiveSection, setActiveSectionProgress }: any =
		useContext(SectionContext);

	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: isFirst
			? ['start start', 'end center']
			: isLast
			? ['start center', 'end end']
			: ['start center', 'end center'],
	});

	useMotionValueEvent(scrollYProgress, 'change', (value) => {
		if (value > 0 && value < 1) {
			setActiveSection(Number(positionId));
			setActiveSectionProgress(value);
		}
	});

	return (
		<section
			{...props}
			ref={container}
		>
			{children}
		</section>
	);
};

export default Section;
