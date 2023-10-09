package api

import (
	"context"
	"fmt"
	"net/http"
	"server-dashboard/handlers"
	"sync"

	"nhooyr.io/websocket"
)

var WSChannel = handlers.WSChannel

var options = websocket.AcceptOptions{
	OriginPatterns: []string{"localhost:*"},
}

func handleWSConn(w http.ResponseWriter, r *http.Request) {

	wsconn, err := websocket.Accept(w, r, &options)
	if err != nil {
		fmt.Println(err)
	}

	for {

		writer, err := wsconn.Writer(context.TODO(), websocket.MessageText)

		if err != nil {
			fmt.Println(err)
			return
		}

		//FIXME: ERROR AL DESCONECTAR EL CLIENTE
		select {
		case message := <-WSChannel:
			writer.Write(message)
			writer.Close()
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
