import '../styles.css';

export const metadata = {
  title: 'Bluelike Illusion - Digital Solutions',
  description: 'Web Development • Mobile Apps • Digital Solutions'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

