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
          <a className="btn btn-ghost text-xl">SIMPLE NOTE-TAKING APP</a>
        </div>
        {children}
      </body>
    </html>
  );
}
