const FilterBar = () => {
    return (
        <ul className="items-center w-full text-sm font-medium text-white  border border-gray-200 rounded-lg sm:flex ">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center ps-3">
                    <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 focus:ring-2"
                    />
                    <label
                        htmlFor="horizontal-list-radio-license"
                        className="w-full py-3 ms-2 text-sm font-medium text-white"
                    >
                        Name{" "}
                    </label>
                </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                    <input
                        id="horizontal-list-radio-id"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 focus:ring-2"
                    />
                    <label
                        htmlFor="horizontal-list-radio-id"
                        className="w-full py-3 ms-2 text-sm font-medium text-white"
                    >
                        Author
                    </label>
                </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                    <input
                        id="horizontal-list-radio-military"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 focus:ring-2"
                    />
                    <label
                        htmlFor="horizontal-list-radio-military"
                        className="w-full py-3 ms-2 text-sm font-medium text-white"
                    >
                        Pub. Date
                    </label>
                </div>
            </li>
            <li className="w-full dark:border-gray-600">
                <div className="flex items-center ps-3">
                    <input
                        id="horizontal-list-radio-passport"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 focus:ring-2"
                    />
                    <label
                        htmlFor="horizontal-list-radio-passport"
                        className="w-full py-3 ms-2 text-sm font-medium text-white"
                    >
                        Price
                    </label>
                </div>
            </li>
        </ul>
    );
};

export default FilterBar;
