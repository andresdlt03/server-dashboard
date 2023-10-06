package main

import (
	"flag"
	"server-dashboard/global"
)

func main() {

	var registerLog = flag.Bool("log", false, "register received data in a csv file")
	flag.Parse()

	global.Config.RegisterLog = *registerLog

	StartServer()

}
