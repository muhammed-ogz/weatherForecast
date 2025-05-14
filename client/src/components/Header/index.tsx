import { useCity } from "../../context/CityContext";

const Header: React.FC = () => {
  const { setCity } = useCity();

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
          placeholder="Şehir Araması Yapabilirsiniz"
          aria-label="Search"
          aria-describedby="search"
        />
        <button
          className="
            ml-4
            bg-gray-600
            hover:bg-gray-700
            text-white
            font-semibold
            py-2
            px-6
            rounded-lg
            transition
            duration-200
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
          "
          type="button"
          onClick={() => {
            const input = document.querySelector<HTMLInputElement>(
              'input[type="search"]'
            );
            if (input) {
              setCity(input.value);
            }
          }}
        >
          Ara
        </button>
      </div>
    </header>
  );
};
export default Header;
