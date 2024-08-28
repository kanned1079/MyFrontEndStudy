package user

import (
	"MyFrontEndStudy/Vue3/nxc-backend/dao"
	"log"
)

func IsUserExist(email string) (code int) {
	user := Auth{
		Email: email,
	}
	result := dao.Db.Model(&Auth{}).Where("email = ?", user.Email).First(&user)
	if result.RowsAffected > 0 {
		code = User_Exist
	} else {
		code = User_Not_Exist
	}
	return
}

func AuthUserInfo(email string, password string) (code int) {
	var userAuth Auth
	result := dao.Db.Model(&Auth{}).Where("email = ?", email).First(&userAuth)
	if result.Error != nil {
		log.Println("未知错误")
	}
	if password == userAuth.Password {
		code = Auth_Pass
	} else {
		code = Auth_Failure
	}
	return
}
