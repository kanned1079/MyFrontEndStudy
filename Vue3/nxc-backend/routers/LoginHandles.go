package routers

import (
	"MyFrontEndStudy/Vue3/nxc-backend/auth"
	"MyFrontEndStudy/Vue3/nxc-backend/system"
	"MyFrontEndStudy/Vue3/nxc-backend/user"
	"github.com/gin-gonic/gin"
	"net/http"
)

type LoginMsg struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func handleAdminLogin(context *gin.Context) {
	var req LoginMsg
	if err := context.ShouldBind(&req); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	//log.Println(req)
	//log.Println("输入 ", req.Email, req.Password)
	if user.IsUserExist(req.Email) == user.User_Exist {
		//log.Println("验证密码")
		// 验证用户密码
		if user.AuthUserInfo(req.Email, req.Password) == user.Auth_Pass {
			token, err := auth.GenerateToken(req.Email)
			if err != nil {
				context.JSON(http.StatusInternalServerError, gin.H{
					"code":     http.StatusInternalServerError,
					"isAuthed": false,
					"msg":      err.Error(),
				})
			}
			context.JSON(http.StatusOK, gin.H{
				"code":     http.StatusOK,
				"isAuthed": true,
				"msg":      "验证通过",
				"token":    token,
			})
		} else {
			context.JSON(http.StatusOK, gin.H{
				"code":     http.StatusOK,
				"isAuthed": false,
				"msg":      "incorrect_password",
			})
		}
	} else {
		context.JSON(http.StatusOK, gin.H{
			"code":     http.StatusOK,
			"isAuthed": false,
			"msg":      "user_not_exist",
		})
	}
}

func handleGetServerInfo(context *gin.Context) {
	var systemOverLook system.OsInfo
	systemOverLook.GetOsInfo()
	//log.Println("系统详情", systemOverLook)

	context.JSON(http.StatusOK, gin.H{
		"code":   http.StatusOK,
		"osInfo": systemOverLook,
	})
}

func getSettingSit(context *gin.Context) {

}

func responseLoginMsg(context *gin.Context, status any, authed bool, msg string) {
	context.JSON(http.StatusOK, gin.H{
		"code":    status,
		"authed":  authed,
		"message": msg,
	})
}
