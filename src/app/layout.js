import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Notes App",
  description: "Easy Note taking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <span><Link className="btn btn-ghost text-xl" href="/">NOTEZ</Link></span>
          </div>
          <div className="flex-none menu menu-horizontal px-1">
            <Link className="btn btn-ghost text-m" href="/">My Notes</Link>
            <Link className="btn btn-ghost text-m" href="/sections/how_to">use Tips</Link>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
