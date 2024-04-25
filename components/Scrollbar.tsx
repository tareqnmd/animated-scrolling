'use client';
import SectionContext from '@/context/SectionContext';
import { SectionType } from '@/lib/section-data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';

interface ScrollbarProps {
	sections: SectionType[];
}

const Scrollbar: React.FC<ScrollbarProps> = ({ sections }) => {
	const { activeSection, activeSectionProgress }: any =
		useContext(SectionContext);

	return (
		<motion.div className="fixed right-10 h-dvh z-10 grid place-content-center gap-2">
			{sections.map(({ position, id }) => (
				<motion.a
					key={position}
					layout
					transition={{ duration: 0.05 }}
					href={`#${id}`}
					className={cn(
						'w-2 overflow-hidden cursor-pointer rounded-full',
						activeSection === position
							? 'h-[32px] bg-[#ececec]'
							: 'h-[8px] bg-[#aaaaaa]'
					)}
				>
					{activeSection === position && (
						<motion.div
							style={{ height: `calc(${activeSectionProgress * 100}% + 0px)` }}
							className={cn('w-full bg-yellow-400')}
						/>
					)}
				</motion.a>
			))}
		</motion.div>
	);
};

export default Scrollbar;
