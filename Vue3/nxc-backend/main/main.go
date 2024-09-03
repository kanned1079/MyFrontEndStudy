package main

import (
	"MyFrontEndStudy/Vue3/nxc-backend/dao"
	"MyFrontEndStudy/Vue3/nxc-backend/routers"
	"MyFrontEndStudy/Vue3/nxc-backend/settings"
	"MyFrontEndStudy/Vue3/nxc-backend/user"
	"github.com/gin-gonic/gin"
	"log"
	"os"
)

func main() {

	ginLog, _ := os.Create("gin.log")
	defer func() {
		if err := ginLog.Close(); err != nil {
			log.Println("关闭gin日志失败")
		}
	}()

	gin.DefaultWriter = ginLog

	// 自动迁移
	if err := dao.Db.AutoMigrate(&settings.SiteSetting{}); err != nil {
		panic("failed to migrate database")
	}

	if err := dao.Db.AutoMigrate(&user.User{}); err != nil {
		panic("failed to migrate database")
	}

	if err := dao.Db.AutoMigrate(&user.Auth{}); err != nil {
		panic("failed to migrate database")
	}

	//dao.Db.Create(&user.User{
	//	Name:              "kanna",
	//	Email:             "admin@ikanned.com",
	//	IsAdmin:           true,
	//	Balance:           29.8,
	//	LastLogin:         time.Date(2019, time.October, 16, 7, 45, 0, 0, time.UTC),
	//	LicenseExpiration: time.Date(2029, time.October, 16, 7, 45, 0, 0, time.UTC),
	//})
	//dao.Db.Create(&user.Auth{
	//	Email:    "admin@ikanned.com",
	//	Password: "cGFzc3dvcmQ=",
	//})

	routers.StartAdminReq()
}
