export default function CommentsCreate() {
    return(
        <article className="create-comment">
        <label>Add new comment:</label>
        <form className="orm">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment"/>
        </form>
    </article>
    )
}