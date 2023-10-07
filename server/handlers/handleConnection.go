package handlers

import (
	"encoding/json"
	"fmt"
	"net"
)

func HandleTCPConnection(connection net.Conn) {

	decoder := json.NewDecoder(connection)

	var data Message

	defer connection.Close()

	for {

		err := decoder.Decode(&data)

		if err != nil {
			connection.Write([]byte(err.Error() + "\n"))
			return
		}

		err = handleMessage(data)
		if err != nil {
			fmt.Println(err)
		}

	}
}

func HandleUDPConnection(connection net.UDPConn) {

	decoder := json.NewDecoder(&connection)

	var data Message

	defer connection.Close()

	for {

		err := decoder.Decode(&data)

		if err != nil {
			return
		}

		err = handleMessage(data)
		if err != nil {
			fmt.Println(err)
		}
	}

}
