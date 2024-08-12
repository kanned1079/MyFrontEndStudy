package router

import (
	"MyFrontEndStudy/Vue3/nxc-admin-server/dao"
	"MyFrontEndStudy/Vue3/nxc-admin-server/user"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func handleGetAllUsers(context *gin.Context) {
	log.Println("GetAllUsers")
	var nxcUser user.NxcUsers
	result := dao.Db.Model(&user.NxcUsers{}).Limit(1).Find(&nxcUser)
	if result.Error != nil {
		log.Println(result.Error.Error())
	}
	var userSlice []user.NxcUsers
	for _, user := range userSlice {
		log.Println(user)
	}
	context.JSON(http.StatusOK, gin.H{
		"path": http.StatusOK,
	})
}
