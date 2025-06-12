import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Lynx Studio',
    description: 'Made by Zerochance Studio',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="wew3f4-">
            <body className="" data-oid="wv_543h">
                {children}
            </body>
        </html>
    );
}
