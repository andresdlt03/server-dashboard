package log

import (
	"encoding/csv"
	"fmt"
	"os"
	"path/filepath"
	"server-dashboard/global"
	"strconv"
)

var logHeaders = map[string][]string{
	"alert": {"date", "event"},
	"data":  {"name", "value"},
}

var File struct {
	file     *os.File
	filename string
	filePath string
}

func LogMessage(messageType string, payload interface{}) error {

	var START_LOG_TIME = global.StartLogTime()

	dir := "./log"
	File.filename = fmt.Sprintf("%v_%v.csv", messageType, strconv.FormatInt(START_LOG_TIME, 10))
	File.filePath = filepath.Join(dir, File.filename)

	if File.file == nil {
		file, err := os.OpenFile(File.filePath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
		if err != nil {
			return err
		}
		File.file = file
	}

	defer File.file.Close() // ya no se debería de cerrar hasta que acabe la conexión

	writer := csv.NewWriter(File.file)

	fileInfo, err := os.Stat(File.filePath)
	if err != nil {
		return err
	}

	// If file is empty, write the headers
	if fileInfo.Size() == 0 {
		headers, ok := logHeaders[messageType]
		if ok {
			writer.Write(headers)
		}
	}

	var record []string

	// //TODO:
	// // Handling the payload type on runtime with reflection
	// var payloadType reflect.Type = reflect.TypeOf(payload)
	// var payloadValue reflect.Value = reflect.ValueOf(payload)

	// if payloadType.Kind() == reflect.Struct {
	// 	for i := 0; i < payloadType.NumField(); i++ {
	// 		fieldValue := payloadValue.Field(i)

	// 		fieldString := fmt.Sprintf("%v", fieldValue.Interface())

	// 		record = append(record, fieldString)
	// 	}
	// }

	writer.Write(record)
	writer.Flush()

	if err = writer.Error(); err != nil {
		return err
	}

	return nil
}
