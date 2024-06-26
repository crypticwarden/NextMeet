import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NextMeet',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				layout: {
					logoImageUrl: '/icons/logo.svg',
				},
				variables: {
					colorText: '#FFFFFF',
					colorPrimary: '#0E78F9',
					colorBackground: '#1C1F2E',
					colorInputBackground: '#252A41',
					colorInputText: '#FFFFFF',
				},
			}}
		>
			<html lang='en'>
				<body className={`${inter.className} bg-dark-2`}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
