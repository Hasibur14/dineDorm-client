import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';



const ReviewEdit = () => {
    const { id } = useParams();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        const reviewItem = {
            review: data.review,
        };

        try {
            const reviewRes = await axiosPublic.patch(`/reviews/${id}`, reviewItem);
            console.log(reviewRes.data);
            toast.success('Review updated successfully');
            reset();
            navigate('/dashboard/my-reviews');
        } catch (error) {
            toast.error('Failed to update review');
            console.error(error);
        }
    };


    return (
        <div>
            <div className="max-w-4xl mx-auto p-4 shadow-xl bg-slate-50">
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 lg:grid-cols-2">
                    <div className="form-control">
                        <label className="p-1">Update your Review:</label>
                        <textarea
                            {...register("review", { required: true })}
                            placeholder="Enter review here"
                            className="w-full lg:w-[850px] px-3 py-2 all-input-style transition-all duration-300 border"
                        />
                        {errors.review && <span className="text-red-500">Review is required</span>}
                    </div>

                    <div className="lg:col-span-2">
                        <button
                            type="submit"
                            className="button w-full p-2"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewEdit;
