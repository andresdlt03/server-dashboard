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

func handleWSConn(w http.ResponseWriter, r *http.Request) {

	wsconn, err := websocket.Accept(w, r, &options)
	wsconn.CloseRead(r.Context())
	if err != nil {
		fmt.Println(err)
	}

	for {

		if err != nil {
			fmt.Println(err)
			return
		}

		select {
		case message := <-WSChannel:
			wsjson.Write(r.Context(), wsconn, message)
		case <-r.Context().Done():
			return
		}

	}

}

func StartWSServer(wgMain *sync.WaitGroup) {
	defer wgMain.Done()

	fmt.Println("Initializing Websocket server...")
	http.ListenAndServe(":8082", http.HandlerFunc(handleWSConn))
}
