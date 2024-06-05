import { useForm } from "react-hook-form";
import bannerImg from '../../../../assets/inputBgimg.jpg';

const AddMeals = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // You can handle form submission here
    };

    return (
        <div
            className="lg:w-[1520px] place-items-center bg-cover bg-no-repeat  rounded-md py-6 bg-blend-overlay"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}
        >
            <div className="max-w-4xl mx-auto p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 lg:grid-cols-2">
                    <div className="form-control ">
                        <label className="text-white p-1">Title:</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Enter your name here"
                            className="w-full px-3 py-2 all-input-style transition-all duration-300"
                        />
                        {errors.name && <span className="text-red-500">Title is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="text-white p-1">Category:</label>
                        <select
                            id="category"
                            {...register("category", { required: true })}
                            className="w-full px-3 py-2 all-input-style transition-all duration-300"
                        >
                            <option value="">Select category</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                        </select>
                        {errors.category && <span className="text-red-500">Category is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="text-white p-1">Image URL:</label>
                        <input
                            {...register("image", { required: true })}
                            placeholder="Enter image URL here"
                            className="w-full px-3 py-2 all-input-style transition-all duration-300"
                        />
                        {errors.image && <span className="text-red-500">Image is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="text-white p-1">Price:</label>
                        <input
                            type="number"
                            {...register("price", { required: true })}
                            placeholder="Enter price here"
                            className="w-full px-3 py-2 all-input-style transition-all duration-300"
                        />
                        {errors.price && <span className="text-red-500">Price is required</span>}
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="text-white p-1">Ingredients:</label>
                        <textarea
                            {...register("ingredients", { required: true })}
                            placeholder="Enter ingredients here"
                            className="w-full px-3 py-2 all-input-style transition-all duration-300"
                        />
                        {errors.ingredients && <span className="text-red-500">Ingredients are required</span>}
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="text-white p-1">Description:</label>
                        <textarea
                            {...register("description", { required: true })}
                            placeholder="Enter description here"
                            className="w-full px-3 py-2 all-input-style transition-all duration-300"
                        />
                        {errors.description && <span className="text-red-500">Description is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="text-white p-1">Rating:</label>
                        <input
                            type="number"
                            {...register("rating", { required: true })}
                            placeholder="Enter rating here"
                            className="w-full px-3 py-2 all-input-style transition-all duration-300"
                        />
                        {errors.rating && <span className="text-red-500">Rating is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="text-white p-1">Post Time:</label>
                        <input
                            type="datetime-local"
                            {...register("postTime", { required: true })}
                            placeholder="Enter post time here"
                            className="w-full px-3 py-2 all-input-style transition-all duration-300"
                        />
                        {errors.postTime && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="text-white p-1"> Likes:</label>
                        <input
                            type="number"
                            {...register("likes", { required: true })}
                            placeholder="Enter likes here"
                            className="w-full px-3 py-2 all-input-style transition-all duration-300"
                        />
                        {errors.likes && <span className="text-red-500">Likes are required</span>}
                    </div>

                    <div className="form-control">
                        <label className="text-white p-1">Reviews:</label>
                        <input
                            type="number"
                            {...register("reviews", { required: true })}
                            placeholder="Enter reviews here"
                            className="w-full px-3 py-2 all-input-style transition-all duration-300"
                        />
                        {errors.reviews && <span className="text-red-500">Reviews are required</span>}
                    </div>

                    <div className="lg:col-span-2">
                        <button
                            type="submit"
                            className="button w-full p-2"
                        >
                            Add Meals
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMeals;
