package log

import (
	"encoding/csv"
	"fmt"
	"os"
	"path/filepath"
	"server-dashboard/global"
	"server-dashboard/message"
	"strconv"
)

var logHeaders = map[string][]string{
	"alert": {"date", "event"},
	"data":  {"name", "value"},
}

type File struct {
	file     *os.File
	headers  []string
	filename string
	filePath string
}

var FileDirectory = map[string]File{
	"alert": {},
	"data":  {},
}

func LogMessage(messageType string, payload message.MessagePayload) error {

	var START_LOG_TIME = global.StartLogTime()

	var file = FileDirectory[messageType]

	dir := "./log"
	file.filename = fmt.Sprintf("%v_%v.csv", messageType, strconv.FormatInt(START_LOG_TIME, 10))
	file.filePath = filepath.Join(dir, file.filename)

	if file.file == nil {
		f, err := os.OpenFile(file.filePath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
		if err != nil {
			return err
		}
		file.file = f
	}

	writer := csv.NewWriter(file.file)

	if file.headers == nil {
		file.headers = logHeaders[messageType]
		writer.Write(file.headers)
	}

	record := payload.UnmarshalValues()

	writer.Write(record)
	writer.Flush()

	return nil
}
