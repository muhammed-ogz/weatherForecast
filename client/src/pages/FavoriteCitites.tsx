import { FaStar } from "react-icons/fa";

const FavoriteCitites = () => {
  const cities = [
    { name: "İstanbul", id: 1 },
    { name: "Ankara", id: 2 },
    { name: "İzmir", id: 3 },
    { name: "Bursa", id: 4 },
    { name: "Antalya", id: 5 },
    { name: "Adana", id: 6 },
    { name: "Konya", id: 7 },
    { name: "Kayseri", id: 8 },
  ];
  return (
    <>
      <div className="text-white p-6">
        <h1 className="text-4xl text-center mb-8">Favori şehirler</h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {cities.map((city) => (
              <button
                key={city.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto max-w-xs lg:max-w-md xl:max-w-7xl w-full"
              >
                <h2 className="text-xl flex items-center mb-2">
                  <FaStar className="mr-2 text-gray-400" />
                  {city.name}
                </h2>
                <p className="text-gray-400 text-left">
                  Hava durumu bilgisini göster
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteCitites;
