import { webSocketBaseURL } from '../constants/constants'

const webSocket = (symbol, onMsgCallback) => {
    const binanceSocketUrl = `${webSocketBaseURL}/${symbol.toLowerCase()}@ticker`
    const ws = new WebSocket(binanceSocketUrl)
    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log(message);
        onMsgCallback((parseFloat(message.c) * 80).toFixed(2));
    }
    return () => { ws.close() }
}

export default webSocket