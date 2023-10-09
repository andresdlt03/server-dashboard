package api

import (
	"fmt"
	"net/http"
	"server-dashboard/handlers"
	"sync"

	"nhooyr.io/websocket"
	"nhooyr.io/websocket/wsjson"
)

var WSChannel = handlers.WSChannel

var options = websocket.AcceptOptions{
	OriginPatterns: []string{"localhost:*"},
}

var connections = make(map[*websocket.Conn]bool)

func handleWSConn(w http.ResponseWriter, r *http.Request) {

	wsconn, err := websocket.Accept(w, r, &options)
	connections[wsconn] = true
	wsconn.CloseRead(r.Context())
	if err != nil {
		delete(connections, wsconn)
		fmt.Println(err)
	}

	for {

		if err != nil {
			connections[wsconn] = true
			fmt.Println(err)
			return
		}

		select {
		case message := <-WSChannel:
			for conn := range connections {
				wsjson.Write(r.Context(), conn, message)
			}
		case <-r.Context().Done():
			delete(connections, wsconn)
			wsconn.Close(websocket.StatusNormalClosure, "Client disconnected")
			return
		}

	}

}

func StartWSServer(wgMain *sync.WaitGroup) {
	defer wgMain.Done()

	fmt.Println("Initializing Websocket server...")
	http.ListenAndServe(":8082", http.HandlerFunc(handleWSConn))
}
