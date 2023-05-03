const Chat = ({ descendingOrderMessages }) => {
    return (
        <div className="chat-display">
            {descendingOrderMessages?.map((message, _index) => (
                <div key={_index}>
                    <div className="chat-message-header">
                        <div className="img-conteiner">
                            <img src={message.img} alt={message.first_name + ' profile'} />
                        </div>
                        <p>{message.name}</p>
                    </div>
                    <p>{message.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Chat