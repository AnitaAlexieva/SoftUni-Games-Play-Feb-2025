export default function CommentsShow({ comments }) {
    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            {comments.length > 0 ? (
                <ul>
                    {comments.map(({ _id, email, comment }) => (
                        <li key={_id} className="comment">
                            <p>{email}: {comment}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-comment">No comments.</p>
            )}
        </div>
    );
}