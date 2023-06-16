import NavPosts from '../components/app/NavPosts';
import { StylesheetLinks, ScriptLinks } from '../Utils/ExternalLinks';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StylesheetLinks />
      </head>
      <body>
        <NavPosts />
        {children}
        <ScriptLinks />
      </body>
    </html>
  );
}
