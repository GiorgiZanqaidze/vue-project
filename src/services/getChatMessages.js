import axiosInstance from '../config/axios'

export default async function getChatMessages(receiverID, senderID) {
    try {
        const response = await axiosInstance.get('/api/chat-messages',
            {params: {receiver_id: receiverID, sender_id: senderID}}
    )
        return response
    } catch (error) {
        return error
    }
}
