import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createComment, getCommentsByNoteId } from '../redux/comments/commentActions';

const Comments = ({ note }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState({
        comment: '',
    });

    const commentsById = useSelector((state) => state?.comment?.comments) || [];

    const handleChange = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Dispatching createComment action');
        await dispatch(createComment({ comment: comment.comment, noteId: note?._id }));
        setComment({ comment: '' });
        await dispatch(getCommentsByNoteId(note?._id))
    };

    useEffect(() => {
        dispatch(getCommentsByNoteId(note?._id))
    }, [dispatch, note])

    return (
        <div>
            <div className="second">
                
            <div className="flex">
  <button
    type="submit"
    className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
  >
    <img width="48" height="48" src="https://img.icons8.com/color/48/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/>
    <span className="sr-only">Icon description</span>
  </button>

  <button
    type="submit"
    className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
  >
   <img width="64" height="64" src="https://img.icons8.com/arcade/64/facebook-like.png" alt="facebook-like"/>
    <span className="sr-only">Like</span>
  </button>
</div>

                  


                    <form onSubmit={handleSubmit}>
                    <br />
               
                    <br />
                    <h1 className="text-2xl font-bold">ADD COMMENTS</h1>
                    <br />
                    <div className="relative flex h-10 w-full min-w-[200px] max-w-[34rem]">
                        <input
                            type="text"
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder="comment here...."
                            required
                            name="comment"
                            value={comment.comment}
                            onChange={handleChange}
                        />
                        <button
                            className="!absolute right-1 top-1 z-10 select-none rounded bg-white-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-white-500/20 transition-all hover:shadow-lg hover:shadow-white-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            SEND
                        </button>
                    </div>
                </form>
            </div>
            <br />
            <div className="relative h-grow w-full min-w-[200px] max-w-[34rem] rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {
                    commentsById.length === 0 ? (
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-2xl font-bold">No Comments Yet</h1>
                            <h1 className="text-2xl font-bold">Be the first one to comment</h1>
                        </div>
                    ) : (
                        <div></div>
                    )
                }

                {Array.isArray(commentsById) &&
                    commentsById?.map((comment) => (
                        <div key={comment?._id} className="mb-4 p-2 border rounded-lg shadow-md bg-white hover:shadow-lg">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-gray-700">{comment?.user?.username}</span>
                                    <span className="text-sm font-semibold text-gray-700">{comment?.comment}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-gray-500">{new Date(comment?.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Comments;