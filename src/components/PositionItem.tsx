import { useForm } from "react-hook-form";
import type { ApplicationPayload, Position, User } from "../types";
import { toast } from "sonner";
import { applyToPosition } from "../services";
import { useMutation } from "@tanstack/react-query";
import { CiBookmarkCheck } from "react-icons/ci";

export const PositionItem = ({ position, user }: { position: Position; user: User }) => {
    const defaultValues: { repoUrl: ApplicationPayload['repoUrl'] } = {
        repoUrl: ""
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues })

    const { mutate, isPending } = useMutation({
        mutationFn: applyToPosition,
        onSuccess: () => {
            toast.success("Application submitted successfully")
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const onSubmit = (formData: { repoUrl: ApplicationPayload['repoUrl'] }) => {
        const payload: ApplicationPayload = {
            uuid: user.uuid,
            applicationId: user.applicationId,
            candidateId: user.candidateId,
            jobId: position.id,
            repoUrl: formData.repoUrl
        }

        mutate(payload)

    }

    return (
        <div className="p-6 rounded-lg shadow-sm flex flex-col gap-3 bg-white hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold">Work</span>
                <CiBookmarkCheck className="text-gray-500" />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-8">{position.title}</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <label htmlFor={'url ' + position.id} className="text-sm font-medium text-gray-600">GitHub URL</label>
                <input
                    id={'url ' + position.id}
                    type="url"
                    placeholder="https://github.com/username/repo"
                    className="border border-gray-300 p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("repoUrl",
                        {
                            required: {
                                value: true,
                                message: "Please enter a GitHub repository URL"
                            },
                            pattern: {
                                value: /^(https?:\/\/)?(www\.)?github\.com\/[^/]+\/[^/]+$/,
                                message: "Please enter a valid GitHub repository URL"
                            }
                        })}
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer mt-4"
                >
                    {isPending ? "Submitting..." : "Submit Application"}
                </button>
            </form>
            {errors.repoUrl && <p className="text-red-500 text-sm">{errors.repoUrl.message}</p>}
        </div>
    );
};