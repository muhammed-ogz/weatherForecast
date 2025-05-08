const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-2">
      <div className="container mx-auto flex pt-4 px-4 sm:px-6 xl:px-20">
        <input
          type="search"
          className="
            bg-gray-700 
            w-full sm:w-96 lg:w-196 
            h-12 
            rounded-lg 
            px-4 
            text-white 
            placeholder-gray-400 
            focus:outline-none 
            focus:ring-2 
            focus:ring-gray-500"
          placeholder="Örnek metin"
        />
      </div>
    </header>
  );
};

export default Header;
