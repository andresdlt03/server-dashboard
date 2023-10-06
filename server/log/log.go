package log

import (
	"encoding/csv"
	"fmt"
	"os"
	"path/filepath"
	"reflect"
	"server-dashboard/global"
	"strconv"
)

var logHeaders = map[string][]string{
	"alert": {"date", "event"},
	"data":  {"name", "value"},
}

func LogMessage(messageType string, payload interface{}) error {

	var START_LOG_TIME = global.StartLogTime()

	dir := "./log"
	filename := messageType + "_" + strconv.FormatInt(START_LOG_TIME, 10) + ".csv"
	filePath := filepath.Join(dir, filename)

	file, err := os.OpenFile(filePath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
	if err != nil {
		return err
	}
	defer file.Close()

	writer := csv.NewWriter(file)

	fileInfo, err := os.Stat(filePath)
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

	// Handling the payload type on runtime with reflection
	var payloadType reflect.Type = reflect.TypeOf(payload)
	var payloadValue reflect.Value = reflect.ValueOf(payload)

	if payloadType.Kind() == reflect.Struct {
		for i := 0; i < payloadType.NumField(); i++ {
			fieldValue := payloadValue.Field(i)

			fieldString := fmt.Sprintf("%v", fieldValue.Interface())

			record = append(record, fieldString)
		}
	}

	writer.Write(record)
	writer.Flush()

	if err = writer.Error(); err != nil {
		return err
	}

	return nil
}
