package handlers

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"server-dashboard/global"
	"server-dashboard/log"
	"server-dashboard/message"
)

type PayloadFactory func(json.Decoder) (message.MessagePayload, error)

// Map that returns a payload based on type field
var payloadRegistry = map[string]PayloadFactory{
	"alert": func(dec json.Decoder) (message.MessagePayload, error) {
		payload := message.AlertPayload{}
		if err := dec.Decode(&payload); err != nil {
			return nil, err
		}
		return payload, nil
	},
	"data": func(dec json.Decoder) (message.MessagePayload, error) {
		payload := message.DataPayload{}
		if err := dec.Decode(&payload); err != nil {
			return nil, err
		}
		return payload, nil
	},
}

// Channel to send messages to websocket
var WSChannel = make(chan message.Message)

func handleMessage(data message.Message) error {

	var dec = json.NewDecoder(bytes.NewReader([]byte(data.Payload)))
	dec.DisallowUnknownFields()

	if _, ok := payloadRegistry[data.Type]; !ok {
		return errors.New("unknown message type")
	}

	payload, err := payloadRegistry[data.Type](*dec)
	if err != nil {
		return err
	}

	// At this point, the message is successfully validated
	// and all its fields are correct

	if global.Config.RegisterLog {
		err = log.LogMessage(data.Type, payload)
		if err != nil {
			fmt.Println(err)
		}
	}

	if err != nil {
		fmt.Println(err)
	}

	WSChannel <- data

	return nil

}
