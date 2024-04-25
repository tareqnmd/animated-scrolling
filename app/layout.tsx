import { SectionContextProvider } from '@/context/SectionContext';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Scrollable Animation',
	description: 'Scrollable Animation by Framer Motion',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SectionContextProvider>
					<main>{children}</main>
				</SectionContextProvider>
			</body>
		</html>
	);
}
