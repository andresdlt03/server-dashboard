package handlers

import (
	"encoding/json"
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
			connection.Close()
			return
		}

		handleMessageType(data)

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

		handleMessageType(data)

	}

}
