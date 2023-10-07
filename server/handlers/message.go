package handlers

import "encoding/json"

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
