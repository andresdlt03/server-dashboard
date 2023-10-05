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

func handleMessageType(data Message) {

	switch data.Type {

	case "alert":
		var payload AlertPayload
		if err := json.Unmarshal(data.Payload, &payload); err != nil {
			fmt.Println(err)
			return
		}
		// fmt.Println("\nMensaje de alerta:")
		// fmt.Println("Fecha:", payload.Date)
		// fmt.Println("Evento:", payload.Event)

	case "data":
		var payload DataPayload
		if err := json.Unmarshal(data.Payload, &payload); err != nil {
			fmt.Println(err)
			return
		}
		// fmt.Println("\nMensaje de datos:")
		// fmt.Println("Nombre:", payload.Name)
		// fmt.Println("Valor:", payload.Value)

	default:
		fmt.Println("Unknown message type:", data.Type)
	}

}
