package main

import (
	"fmt"
	"log"
	"net"
	"server-dashboard/handlers"
	"sync"
)

var (
	tcpAddr = net.TCPAddr{
		Port: 8080,
		IP:   net.ParseIP("127.0.0.1"),
	}
	udpAddr = net.UDPAddr{
		Port: 8081,
		IP:   net.ParseIP("127.0.0.1"),
	}
)

// Function that launch the TCP and UDP servers in different goroutines
func StartServer(wgMain *sync.WaitGroup) {
	defer wgMain.Done()

	fmt.Println("Starting TCP/UDP server...")

	var wgServer sync.WaitGroup
	wgServer.Add(2)

	go startTCPServer(&wgServer)
	go startUDPServer(&wgServer)

	wgServer.Wait()

}

// Starts TCP server and launch a goroutine (handlers.HandleTCPConnection) to handle the connection
// It accepts more than one connection and handle each of them in different goroutines
func startTCPServer(wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println("TCP listening...")
	listenerTcp, err := net.ListenTCP("tcp", &tcpAddr)
	if err != nil {
		log.Println(err)
	}
	defer listenerTcp.Close()

	for {
		connectionTcp, err := listenerTcp.Accept()
		if err != nil {
			log.Println(err)
		}

		go handlers.HandleTCPConnection(connectionTcp)
	}
}

// Starts UDP server and launch a goroutine (handlers.HandleUDPConnection) to handle the UDPConnection
func startUDPServer(wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println("UDP listening...")

	connectionUdp, err := net.ListenUDP("udp", &udpAddr)
	if err != nil {
		log.Println(err)
	}
	defer connectionUdp.Close()

	handlers.HandleUDPConnection(*connectionUdp)
}
