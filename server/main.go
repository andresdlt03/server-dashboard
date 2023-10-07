package main

import (
	"flag"
	"server-dashboard/api"
	"server-dashboard/global"
	"sync"
)

func main() {

	var registerLog = flag.Bool("log", false, "register received data in a csv file")
	flag.Parse()

	global.Config.RegisterLog = *registerLog

	var wgMain sync.WaitGroup
	wgMain.Add(2)

	// TCP and UDP server that receives the data
	go StartServer(&wgMain)

	// Websocket server that dial and send the data with frontend
	go api.StartWSServer(&wgMain)

	wgMain.Wait()

}
