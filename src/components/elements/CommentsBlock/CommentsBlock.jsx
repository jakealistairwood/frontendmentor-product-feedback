import uuid from "react-uuid"

const CommentsBlock = ({ comments }) => {
    if(comments) {
        return <div className="comments bg-white rounded-xl px-8 py-6 mt-6">
            <h3 className="pb-6">{comments.length} Comments</h3>
            <ul className="flex flex-col gap-y-8">
                {comments.map(comment => {
                    const { user, id, content } = comment;
                    return <li key={uuid()} className="comment flex gap-8 pb-8 border-b-2 border-solid border-[#F7F8FD]">
                        <div className="aspect-square w-10 h-10 rounded-full">
                            <img className="aspect-square rounded-full w-fill h-fill" src={user.image} alt="user avatar" />
                        </div>
                        <div className="ml-auto grow">
                            <header className="flex grow justify-between">
                                <div className="pb-4">
                                    <h4 className="font-semibold">{user.name}</h4>
                                    <p className="text-sm">@{user.username}</p>
                                </div>
                                <button className="text-secondary-purple text-sm font-semibold default-link">Reply</button>
                            </header>
                            <p>{content}</p>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    }
}

export default CommentsBlock