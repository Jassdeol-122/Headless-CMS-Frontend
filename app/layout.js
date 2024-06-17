import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Comic Reviews',
  description: 'A site for comic book reviews',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-black`}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container mx-auto p-4">
            <Link href="/" className="navbar-brand text-white">Comic Reviews</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/" className="nav-link text-white">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container mx-auto my-4 p-4">
          {children}
        </main>
        <footer className="bg-dark text-white text-center py-3 mt-4">
          <div className="container">
            <p>&copy; 2024 Comic Reviews. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
