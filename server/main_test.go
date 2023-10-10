package main

import (
	"context"
	"fmt"
	"net"
	"strings"
	"testing"
	"time"

	"nhooyr.io/websocket"
)

func TestMain(t *testing.T) {

	const SERVER_TCP_PORT = 8080
	const SERVER_WEBSOCKET_PORT = 8082

	type testCase struct {
		title    string
		output   string
		expected string
	}

	testCases := []testCase{
		{
			title:    "Send correct data message to server and received this message from Websocket",
			output:   `{"type":"data","payload":{"name":"cpu","value":23}}`,
			expected: `{"type":"data","payload":{"name":"cpu","value":23}}`,
		},
		{
			title:    "Send correct alert message to server and received this message from Websocket",
			output:   `{"type":"alert","payload":{"event":"Critic CPU usage","date":1283745}}`,
			expected: `{"type":"alert","payload":{"event":"Critic CPU usage","date":1283745}}`,
		},
		{
			title:    "Send incorrect message with unknown type",
			output:   `{"type":"unknown","payload":{"event":"Critic CPU usage","date":1283745}}`,
			expected: "",
		},
		{
			title:    "Send incorrect data message with unknown payload",
			output:   `{"type":"data","payload":{"unknown":"Critic CPU usage","rare":"1283745"}}`,
			expected: "",
		},
		{
			title:    "Send incorrect alert message with unknown payload",
			output:   `{"type":"alert","payload":{"unknown":"Critic CPU usage","rare":"1283745"}}`,
			expected: "",
		},
	}

	for _, tt := range testCases {
		t.Run(tt.title, func(t *testing.T) {
			// TCP connection
			tcpConn, err := net.Dial("tcp", fmt.Sprintf(":%v", SERVER_TCP_PORT))
			if err != nil {
				t.Errorf("%s", err)
			}

			// Websocket connection
			conn, _, err := websocket.Dial(context.TODO(), fmt.Sprintf("ws://localhost:%v", SERVER_WEBSOCKET_PORT), nil)
			if err != nil {
				t.Errorf("%s", err)
			}

			// Send message
			_, err = tcpConn.Write([]byte(tt.output))
			if err != nil {
				t.Errorf("%s", err)
			}

			var receivedMessage string
			done := make(chan interface{})
			readError := make(chan error)

			go func() {
				_, message, err := conn.Read(context.Background())
				if err != nil {
					readError <- err
					close(readError)
					close(done)
				}
				receivedMessage = string(message)
				close(done)
				close(readError)
			}()

			select {
			case <-done:
				if strings.TrimSpace(receivedMessage) != tt.expected {
					t.Errorf("Expected message: \"%s\" \nReceived message: \"%s\"", tt.expected, receivedMessage)
				}
			case err = <-readError:
				t.Errorf("%s", err)
			case <-time.After(1 * time.Second):
				if tt.expected != "" {
					t.Errorf("Expected message \"%s\" not received", tt.expected)
				}
			}

		})
	}

}
