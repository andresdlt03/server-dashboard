package global

import "time"

var START_LOG_TIME int64

// Function that returns the unix time when the log starts.
// A new log is created every time the server starts
func StartLogTime() int64 {
	if START_LOG_TIME == 0 {
		START_LOG_TIME = time.Now().Unix()
		return START_LOG_TIME
	}

	return START_LOG_TIME
}
