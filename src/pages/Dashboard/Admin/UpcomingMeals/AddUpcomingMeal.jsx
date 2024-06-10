import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from '@headlessui/react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../../../../hooks/useAuth';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddUpcomingMeal = ({ closeModal, isOpen, refetch }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const mealItem = {
                title: data.title,
                category: data.category,
                price: parseFloat(data.price),
                ingredients: data.ingredients.split(','),
                image: res.data.data.display_url,
                description: data.description,
                rating: parseFloat(data.rating),
                postTime: new Date(data.postTime).toISOString(),
                reviews: data.reviews.split(','),
                likes: parseFloat(data.likes),
                admin: user?.displayName,
                adminEmail: user?.email,
            };
            const mealRes = await axiosSecure.post('/upcomingMeal', mealItem);
            console.log(mealRes.data)
            if (mealRes.data.insertedId) {
                reset();
                toast.success('Upcoming Meal added successfully');
                refetch()
            }
        }
    };



    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-20' />
                    </TransitionChild>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <TransitionChild
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-lg bg-neutral-100  p-6 text-left align-middle  shadow-xl transition-all'>
                                    <DialogTitle
                                        as='h3'
                                        className='text-lg font-medium text-center leading-6 text-gray-900'
                                    >
                                        Upcoming Meal add now
                                    </DialogTitle>
                                    <div className="mx-auto ">
                                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 lg:grid-cols-2">
                                            <div className="form-control">
                                                <label className="text-black font-semibold p-1">Title:</label>
                                                <input
                                                    type="text"
                                                    {...register("title", { required: true })}
                                                    placeholder="Enter title here"
                                                    className="w-full px-3 py-2 all-input-style transition-all duration-300 "
                                                />
                                                {errors.title && <span className="text-red-500">Title is required</span>}
                                            </div>

                                            <div className="form-control">
                                                <label className="text-black font-semibold p-1">Category:</label>
                                                <select
                                                    id="category"
                                                    {...register("category", { required: true })}
                                                    className="w-full px-3 py-2 all-input-style transition-all duration-300"
                                                >
                                                    <option value="" defaultValue>Select category</option>
                                                    <option value="Breakfast">Breakfast</option>
                                                    <option value="Lunch">Lunch</option>
                                                    <option value="Dinner">Dinner</option>
                                                </select>
                                                {errors.category && <span className="text-red-500">Category is required</span>}
                                            </div>

                                            <div className="form-control">
                                                <label className="text-black font-semibold p-1">Image URL:</label>
                                                <input
                                                    type="file"
                                                    {...register('image', { required: true })}
                                                    className="file-input w-full px-3 py-2 
                         transition-all all-input-style font-semibold duration-300"
                                                />
                                                {errors.image && <span className="text-red-500">Image is required</span>}
                                            </div>

                                            <div className="form-control">
                                                <label className="text-black font-semibold p-1">Price:</label>
                                                <input
                                                    type="number"
                                                    {...register("price", { required: true })}
                                                    placeholder="Enter price here"
                                                    className="w-full px-3 py-2 all-input-style transition-all duration-300"
                                                />
                                                {errors.price && <span className="text-red-500">Price is required</span>}
                                            </div>

                                            <div className="form-control lg:col-span-2">
                                                <label className="text-black font-semibold p-1">Ingredients:</label>
                                                <textarea
                                                    {...register("ingredients", { required: true })}
                                                    placeholder="Enter ingredients (comma-separated) here"
                                                    className="w-full px-3 py-2 all-input-style transition-all duration-300"
                                                />
                                                {errors.ingredients && <span className="text-red-500">Ingredients are required</span>}
                                            </div>

                                            <div className="form-control lg:col-span-2">
                                                <label className="text-black font-semibold p-1">Description:</label>
                                                <textarea
                                                    {...register("description", { required: true })}
                                                    placeholder="Enter description here"
                                                    className="w-full px-3 py-2 all-input-style transition-all duration-300"
                                                />
                                                {errors.description && <span className="text-red-500">Description is required</span>}
                                            </div>

                                            <div className="form-control">
                                                <label className="text-black font-semibold p-1">Rating:</label>
                                                <input
                                                    type="number"
                                                    {...register("rating", { required: true })}
                                                    placeholder="Enter rating here"
                                                    className="w-full px-3 py-2 all-input-style transition-all duration-300"
                                                />
                                                {errors.rating && <span className="text-red-500">Rating is required</span>}
                                            </div>

                                            <div className="form-control">
                                                <label className="text-black font-semibold p-1">Post Time:</label>
                                                <input
                                                    type="datetime-local"
                                                    {...register("postTime", { required: true })}
                                                    className="w-full px-3 py-2 all-input-style transition-all duration-300"
                                                />
                                                {errors.postTime && <span className="text-red-500">This field is required</span>}
                                            </div>

                                            <div className="form-control">
                                                <label className="text-black font-semibold p-1">Likes:</label>
                                                <input
                                                    type="number"
                                                    {...register("likes", { required: true })}
                                                    placeholder="Enter likes here"
                                                    className="w-full px-3 py-2 all-input-style transition-all duration-300"
                                                />
                                                {errors.likes && <span className="text-red-500">Likes are required</span>}
                                            </div>

                                            <div className="form-control">
                                                <label className="text-black font-semibold p-1">Reviews:</label>
                                                <input
                                                    {...register("reviews", { required: true })}
                                                    placeholder="Enter reviews (comma-separated) here"
                                                    className="w-full px-3 py-2 all-input-style transition-all duration-300" />
                                                {errors.reviews && <span className="text-red-500">Reviews are required</span>}
                                            </div>

                                            <div className="lg:col-span-2 mt-6">
                                                <button
                                                    onClick={closeModal}
                                                    type="submit"
                                                    className="button w-full p-2"
                                                >
                                                    Add Meal
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div>
    );
};

export default AddUpcomingMeal;