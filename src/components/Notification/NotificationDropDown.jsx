

const NotificationDropDown = () => {
    return (
        <div className="absolute right-0 mt-10 text-black w-64 bg-white rounded-md shadow-lg overflow-hidden z-20 ">
            <ul className="list-none p-0">
                <li className="p-2 border-b hover:bg-primary hover:text-white cursor-pointer flex">Breakfast: Scrambled eggs, toast, and orange juice</li>
                <li className="p-2 border-b hover:bg-primary hover:text-white cursor-pointer">Lunch: Grilled chicken sandwich with a side of salad</li>
                <li className="p-2 border-b hover:bg-primary hover:text-white cursor-pointer">Dinner: Spaghetti Bolognese with garlic bread</li>
            </ul>
        </div>
    );
};

export default NotificationDropDown;