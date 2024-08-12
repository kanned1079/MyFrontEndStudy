package user

import "time"

type NxcUsers struct {
	id         string
	mail       string
	username   string
	level      int8
	updated_at time.Time
	deleted_at time.Time
}

func TableName() (name string) {
	return "NxcUsers"
}
