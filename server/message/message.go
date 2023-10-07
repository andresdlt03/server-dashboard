package message

import (
	"encoding/json"
	"fmt"
)

type Message struct {
	Type    string          `json:"type"`
	Payload json.RawMessage `json:"payload"`
}

type MessagePayload interface {
	UnmarshalValues() []string
}

type AlertPayload struct {
	Date  int64  `json:"date"`
	Event string `json:"event"`
}

type DataPayload struct {
	Name  string  `json:"name"`
	Value float32 `json:"value"`
}

func (p AlertPayload) UnmarshalValues() []string {
	return []string{
		fmt.Sprintf("%v", p.Date), // date
		p.Event,                   // event
	}
}

func (p DataPayload) UnmarshalValues() []string {
	return []string{
		p.Name,                     // name
		fmt.Sprintf("%v", p.Value), // value
	}
}
