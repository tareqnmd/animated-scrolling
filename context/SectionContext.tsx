'use client';
import { ReactNode, createContext, useState } from 'react';

export type SectionContextType = {
	activeSection: number;
	setActiveSection: (_: number) => void;
	activeSectionProgress: number;
	setActiveSectionProgress: (_: number) => void;
};

const SectionContext = createContext<SectionContextType | null>(null);

export const SectionContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [activeSection, setActiveSection] = useState(0);
	const [activeSectionProgress, setActiveSectionProgress] = useState(0);
	return (
		<SectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				activeSectionProgress,
				setActiveSectionProgress,
			}}
		>
			{children}
		</SectionContext.Provider>
	);
};

export default SectionContext;
