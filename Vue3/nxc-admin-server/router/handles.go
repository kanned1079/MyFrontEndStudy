package router

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func handleGetAllUsers(context *gin.Context) {
	log.Println("GetAllUsers")
	context.JSON(http.StatusOK, gin.H{
		"path": http.StatusOK,
	})
}
