package handlers

import (
	"encoding/json"
	"fmt"
)

type Message struct {
	Type    string          `json:"type"`
	Payload json.RawMessage `json:"payload"`
}

type AlertPayload struct {
	Date  int64  `json:"date"`
	Event string `json:"event"`
}

type DataPayload struct {
	Name  string  `json:"name"`
	Value float32 `json:"value"`
}

func handleMessage(data Message) {

	switch data.Type {

	case "alert":
		var payload AlertPayload
		if err := json.Unmarshal(data.Payload, &payload); err != nil {
			fmt.Println(err)
			return
		}

	case "data":
		var payload DataPayload
		if err := json.Unmarshal(data.Payload, &payload); err != nil {
			fmt.Println(err)
			return
		}

	default:
		fmt.Println("Unknown message type:", data.Type)
	}

}
