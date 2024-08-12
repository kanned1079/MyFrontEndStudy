package router

import "github.com/gin-gonic/gin"

func startServer() {
	r := gin.Default()

	r.GET("/getAllUsers", handleGetAllUsers)
}
