package routers

import (
	"MyFrontEndStudy/Vue3/nxc-backend/system"
	"MyFrontEndStudy/Vue3/nxc-backend/user"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

type PostReqType struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func handleAdminLogin(context *gin.Context) {
	//var email = context.Param("email")
	//var password = context.PostForm("password")
	var req PostReqType
	context.ShouldBind(&req)
	log.Println(req)
	log.Println("输入 ", req.Email, req.Password)
	if user.IsUserExist(req.Email) == user.User_Exist {
		log.Println("验证密码")
		// 验证用户密码
		if user.AuthUserInfo(req.Email, req.Password) == user.Auth_Pass {
			responseMsg(context, http.StatusOK, true, "验证通过")
		} else {
			responseMsg(context, http.StatusOK, false, "密码错误")
		}
	} else {
		responseMsg(context, http.StatusOK, false, "用户不存在")
	}
}

func handleGetServerInfo(context *gin.Context) {
	var systemOverLook system.SystemOverlook
	systemOverLook.GetOsInfo()
	log.Println("系统详情", systemOverLook)

	context.JSON(http.StatusOK, gin.H{
		"code":   http.StatusOK,
		"osInfo": systemOverLook,
	})
}

func responseMsg(context *gin.Context, status any, authed bool, msg string) {
	context.JSON(http.StatusOK, gin.H{
		"code":    status,
		"authed":  authed,
		"message": msg,
	})
}
