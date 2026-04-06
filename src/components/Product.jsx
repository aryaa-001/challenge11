export default function Product({ elem }) {
  return (
    <div className="group w-70 overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 bg-gray-100">
        <img
          src={elem.imageURL}
          alt={elem.title}
          className="h-full w-full object-fill"
        />

        <button
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full transition-all
                 bg-white text-gray-600 hover:text-red-500"
          aria-label="Toggle wishlist"
        >
          ❤️
        </button>

        <span className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-sm font-medium text-white">
          ⭐ {elem.rating}
        </span>

        {elem.discount && (
          <span className="absolute left-3 bottom-3 rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">
            {elem.discount}% OFF
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {elem.title}
        </h3>

        <p className="line-clamp-2 text-sm text-gray-600">{elem.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">
              {elem.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </span>

            <span className="text-sm text-gray-500 line-through">
              {elem.oldPrice.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex gap-2">
            <button className="rounded-lg text-sm font-medium transition border border-gray-300 px-3 py-1.5 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Add
            </button>

            <button className="rounded-lg bg-black px-4 py-1.5 text-sm font-medium text-white transition hover:bg-gray-800">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
