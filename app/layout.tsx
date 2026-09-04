import './globals.css';
import type { Metadata } from 'next';
import {Header,Footer} from '../components/SiteShell';

export const metadata: Metadata = {
  title: {default:'NovaClear | A Fresh Start. A Better Future.', template:'%s | NovaClear'},
  description:'NovaClear helps South Africans explore debt review, debt consolidation guidance and credit health options.'
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
