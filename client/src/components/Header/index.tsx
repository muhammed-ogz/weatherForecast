const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-2">
      <div className="container mx-auto flex pt-4 pl-20">
        <input
          type="search"
          className="bg-gray-700 w-196 h-13 rounded-lg px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Örnek metin"
        />
      </div>
    </header>
  );
};

export default Header;
