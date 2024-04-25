'use client';
import SectionContext from '@/context/SectionContext';
import { SectionType } from '@/lib/section-data';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';

interface ScrollbarProps {
	sections: SectionType[];
}

const Scrollbar: React.FC<ScrollbarProps> = ({ sections }) => {
	const { activeSection, activeSectionProgress }: any =
		useContext(SectionContext);

	return (
		<motion.div className="fixed right-10 h-dvh flex flex-col gap-2 justify-center z-10">
			{sections.map(({ position, id }) => (
				<motion.a
					key={position}
					layout
					transition={{ duration: 0.3 }}
					style={{
						height: activeSection === position ? '32px' : '8px',
						backgroundColor:
							activeSection === position ? 'rgb(200,200,200)' : 'rgb(82,82,82)',
						borderRadius: 9999,
					}}
					href={`#${id}`}
					className="w-2 overflow-hidden cursor-pointer"
				>
					{activeSection === position && (
						<motion.div
							style={{ height: `calc(${activeSectionProgress * 100}% + 0px)` }}
							className="w-full bg-yellow-400"
						/>
					)}
				</motion.a>
			))}
		</motion.div>
	);
};

export default Scrollbar;
