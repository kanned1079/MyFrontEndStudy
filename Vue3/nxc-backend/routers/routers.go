package routers

import (
	"MyFrontEndStudy/Vue3/nxc-backend/auth"
	"github.com/gin-gonic/gin"
	"net/http"
)

func StartAdminReq() {
	r := gin.Default()

	// 中间件
	r.Use(func(context *gin.Context) {
		context.Header("Access-Control-Allow-Origin", "*")
		context.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		context.Header("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if context.Request.Method == "OPTIONS" {
			context.AbortWithStatus(http.StatusOK)
			return
		}
		context.Next()
	})

	r.POST("/api/admin/login", handleAdminLogin)
	//r.GET("/api/admin/getSysInfo", handleGetServerInfo)

	authorized := r.Group("/api", auth.AuthMiddleware())
	//	后续所有的都在这里执行
	{
		authorized.GET("/admin/getSysInfo", handleGetServerInfo)
	}

	r.Run("localhost:8080")
}
