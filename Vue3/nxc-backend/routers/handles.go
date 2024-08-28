package routers

import (
	"MyFrontEndStudy/Vue3/nxc-backend/user"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func handleAdminLogin(context *gin.Context) {
	var email = context.PostForm("email")
	var password = context.PostForm("password")
	log.Println("输入 ", email, password)
	if user.IsUserExist(email) == user.User_Exist {
		log.Println("验证密码")
		// 验证用户密码
		if user.AuthUserInfo(email, password) == user.Auth_Pass {
			responseMsg(context, http.StatusOK, true, "验证通过")
		} else {
			responseMsg(context, http.StatusOK, false, "密码错误")
		}
	} else {
		responseMsg(context, http.StatusOK, false, "用户不存在")
	}
}

func responseMsg(context *gin.Context, status any, authed bool, msg string) {
	context.JSON(http.StatusOK, gin.H{
		"code":    status,
		"authed":  authed,
		"message": msg,
	})
}
