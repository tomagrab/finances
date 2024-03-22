export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-white">QR Code Manager</h1>
      </div>
      <div className="flex items-center">
        <a href="/" className="text-white hover:text-gray-200">
          Home
        </a>
        <a href="/QRCode" className="ml-4 text-white hover:text-gray-200">
          QR Code
        </a>
      </div>
    </nav>
  );
}
