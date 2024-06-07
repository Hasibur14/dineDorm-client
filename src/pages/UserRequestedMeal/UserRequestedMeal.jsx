import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from '@headlessui/react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UserRequestedMeal = ({ closeModal, isOpen, meal }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const onSubmit = async (data) => {
        console.log(data);
        const mealItem = {
            title: data.title,
            reviews: data.reviews,
            likes: data.likes,
            requestUserName: user?.displayName,
            requestUserEmail: user?.email,
            status: 'pending'
        };
        const mealRes = await axiosSecure.post('/requestMeal', mealItem);
        console.log(mealRes.data)
        if (mealRes.data.insertedId) {
            reset();
            toast.success('Meal Request successfully');
            closeModal();
        }
    };

    return (
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
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
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
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-lg bg-neutral-200  p-6 text-left align-middle  shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Meal Request
                                </DialogTitle>
                                <div className="form-control">
                                    <label className="text-black p-1">Title:</label>
                                    <input
                                        type="text"
                                        {...register("title", { required: true })}
                                        className="w-full px-3 py-2  transition-all duration-300 rounded"
                                        defaultValue={meal.title}
                                        readOnly
                                    />
                                    {errors.title && <span className="text-red-500">Title is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="text-black p-1">Likes:</label>
                                    <input
                                        type="number"
                                        {...register("likes", { required: true })}
                                        className="w-full px-3 py-2  transition-all duration-300 rounded"
                                        defaultValue={meal.likes}
                                        readOnly
                                    />
                                    {errors.likes && <span className="text-red-500">Likes are required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="text-black p-1">Review:</label>
                                    <input
                                        type="text"
                                        {...register("reviews", { required: true })}
                                        placeholder="Enter review here"
                                        className="w-full px-3 py-2  transition-all duration-300 rounded"
                                        defaultValue={meal.reviews?.join(', ')}
                                        readOnly
                                    />
                                    {errors.review && <span className="text-red-500">Review is required</span>}
                                </div>
                                <div className="form-control mt-4">
                                    <button
                                        type='submit'
                                        onClick={handleSubmit(onSubmit)}
                                        className="bg-gradient-to-tl hover:bg-gradient-to-tr rounded-md from-[#910404] to-[#f0273b] text-white px-3 py-2">

                                        Request Now
                                    </button>
                                </div>

                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

UserRequestedMeal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    meal: PropTypes.object.isRequired,
};

export default UserRequestedMeal;
