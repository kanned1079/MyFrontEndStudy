package user

import "time"

type User struct {
	Id         int64     `json:"id"`
	Name       string    `json:"name"`
	Email      string    `json:"email"`
	IsAdmin    bool      `json:"isAdmin"`
	Updated_at time.Time `json:"updatedAt"`
}
