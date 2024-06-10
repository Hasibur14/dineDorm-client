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
import useReview from '../../hooks/useReview';

const ReviewModal = ({ closeModal, isOpen, meal }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [reviews, loading, refetch] = useReview()

    const onSubmit = async (data) => {
        console.log(data);
        const reviewItem = {
            title: meal.title,
            likes: meal.likes,
            review: data.review,
            reviewUserName: user?.displayName,
            reviewUserEmail: user?.email,
        };
        const mealRes = await axiosSecure.post('/reviews', reviewItem);
        console.log(mealRes.data);
        if (mealRes.data.insertedId) {
            reset();
            toast.success('Review send successfully');
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
                                  Please Review below
                                </DialogTitle>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <label className="text-black p-1">Review:</label>
                                        <textarea
                                            type="text"
                                            {...register("review", { required: true })}
                                            placeholder="Enter review here"
                                            className="w-full px-3 py-2  transition-all duration-300 rounded"
                                        />
                                        {errors.review && <span className="text-red-500">Review is required</span>}
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                        >
                                            Cancel
                                        </button>
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

ReviewModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    meal: PropTypes.object.isRequired,
};

export default ReviewModal;
