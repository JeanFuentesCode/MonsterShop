export default function TopHeader() {
  return (
    <header
      className="h-20 bg-black/80 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 lg:px-10 z-10 sticky top-0"
      data-purpose="top-header"
    >
      <div>
        <h1 className="text-2xl font-bold text-white">Panel de Control</h1>
        <p className="text-sm text-gray-400 mt-1">14th Apr 2025</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-gray-700 transition">
            <i className="fa-regular fa-message"></i>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-gray-700 transition relative">
            <i className="fa-regular fa-bell"></i>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-3 pl-6 border-l border-gray-800">
          <img
            alt="Alayna Hossain"
            className="w-10 h-10 rounded-full border border-gray-800"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfi1K6tVmM9BXV7yvhp37Z07lw-25A6HtZsW__7XbAmQqFhBl0LKI6L74ubG_ZlmaB20cLEyxXrihXFFgQcBCOUhPuBt83wTKOAt63wafqWLBDR7_DCbAe7TvST0xPFuKsVKUoa9JouTt3pntAsAJyjcEXFYXcDfiaWRNsYVIo4E6jSNl-9jf3NqRFgYi2LnuB_zbiHshBAiIPrF6nZ3y5ckmSfJ3q5Im-IwjzMO8iSGkJAw3RGE6jF4sXAU2SYeyeVa8Zjr9Bw6E"
          />
          <div className="text-right">
            <p className="text-sm font-semibold text-white leading-tight">Alayna Hossain</p>
            <p className="text-xs text-gray-400">Sales Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}
