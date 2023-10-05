package handlers

import (
	"bytes"
	"encoding/json"
	"errors"
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

type PayloadFactory func(json.Decoder) (interface{}, error)

// Map that returns a payload based on type field
var payloadRegistry = map[string]PayloadFactory{
	"alert": func(dec json.Decoder) (interface{}, error) {
		payload := AlertPayload{}
		if err := dec.Decode(&payload); err != nil {
			return nil, err
		}
		return payload, nil
	},
	"data": func(dec json.Decoder) (interface{}, error) {
		payload := DataPayload{}
		if err := dec.Decode(&payload); err != nil {
			return nil, err
		}
		return payload, nil
	},
}

func handleMessage(data Message) error {

	var dec = json.NewDecoder(bytes.NewReader([]byte(data.Payload)))
	dec.DisallowUnknownFields()

	if payloadRegistry[data.Type] == nil {
		return errors.New("unknown message type")
	}

	payload, err := payloadRegistry[data.Type](*dec)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(payload)

	return nil

}
