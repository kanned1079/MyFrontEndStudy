package routers

import (
	"MyFrontEndStudy/Vue3/nxc-backend/dao"
	"MyFrontEndStudy/Vue3/nxc-backend/settings"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"log"
	"net/http"
	"reflect"
)

// saveSettingToDB 将单个设置保存到数据库
func saveSettingToDB(category, key string, value json.RawMessage) error {
	setting := settings.SiteSetting{
		Category: category,
		Key:      key,
	}

	// 查找现有记录
	if err := dao.Db.Where("`category` = ? AND `key` = ?", category, key).First(&setting).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			// 如果没有找到记录，则创建新记录
			setting.Value = value
			if err := dao.Db.Create(&setting).Error; err != nil {
				return err
			}
		} else {
			return err
		}
	} else {
		// 如果找到记录，则更新值
		setting.Value = value
		if err := dao.Db.Save(&setting).Error; err != nil {
			return err
		}
	}

	log.Println("Setting created or updated successfully:", key)
	return nil
}

// saveSettingsWithReflection 使用反射来遍历结构体并保存字段
func saveSettingsWithReflection(category string, settingsStruct interface{}) {
	v := reflect.ValueOf(settingsStruct)
	t := v.Type()

	for i := 0; i < v.NumField(); i++ {
		field := v.Field(i)
		key := t.Field(i).Tag.Get("json")
		if key == "" {
			key = t.Field(i).Name // 如果没有json tag，则使用字段名
		}

		// 将字段值转为 JSON
		valueJSON, err := json.Marshal(field.Interface())
		if err != nil {
			log.Println("Failed to marshal value:", err)
			continue
		}

		// 调用保存到数据库的函数
		if err := saveSettingToDB(category, key, valueJSON); err != nil {
			log.Println("Error saving setting to DB:", err)
		}
	}
}

func handleUpdateSystemSettings(context *gin.Context) {
	var options = settings.SystemSettingOptions{}
	if err := context.ShouldBind(&options); err != nil {
		log.Println("获取设置失败")
	}
	log.Println(options)

	// 使用反射保存所有字段
	saveSettingsWithReflection("site", options.Site)
	saveSettingsWithReflection("security", options.Security)
	saveSettingsWithReflection("frontend", options.Frontend)
	saveSettingsWithReflection("subscribe", options.Subscribe)
	saveSettingsWithReflection("server", options.Server)
	saveSettingsWithReflection("sendmail", options.Sendmail)
	saveSettingsWithReflection("notice", options.Notice)
	saveSettingsWithReflection("myapp", options.Myapp)

	//context.JSON(http.StatusOK, options)
	//var refOptions = reflect.ValueOf(options)
	//log.Println("外部的字段数: ", refOptions.NumField())
	//for i := 0; i < refOptions.NumField(); i++ {
	//	log.Println("外部字段", refOptions.Field(i))
	//	var innerOptions = reflect.ValueOf(refOptions.Field(i))
	//	for j := 0; j < innerOptions.NumField(); j++ {
	//		log.Println("内部字段", innerOptions.Field(j))
	//
	//	}
	//}

	// 将结构体映射为 category -> (key -> value) 的结构
	//settingsMap := map[string]map[string]interface{}{
	//	"site": map[string]interface{}{
	//		"app_name":        options.Site.AppName,
	//		"app_description": options.Site.AppDescription,
	//		"app_url":         options.Site.AppURL,
	//		"force_https":     options.Site.ForceHTTPS,
	//		"logo_url":        options.Site.LogoURL,
	//		"subscribe_url":   options.Site.SubscribeURL,
	//		"tos_url":         options.Site.TosURL,
	//		"stop_register":   options.Site.StopRegister,
	//		"trial_time":      options.Site.TrialTime,
	//		"trial_subscribe": options.Site.TrialSubscribe,
	//		"currency":        options.Site.Currency,
	//		"currency_symbol": options.Site.CurrencySymbol,
	//	},
	//	"security": map[string]interface{}{
	//		"email_verify":             options.Security.EmailVerify,
	//		"email_gmail_limit_enable": options.Security.EmailGmailLimitEnable,
	//		"safe_mode_enable":         options.Security.SafeModeEnable,
	//		"secure_path":              options.Security.SecurePath,
	//		"email_whitelist_enable":   options.Security.EmailWhitelistEnable,
	//		"recaptcha_enable":         options.Security.RecaptchaEnable,
	//		"ip_register_limit_enable": options.Security.IPRegisterLimitEnable,
	//		"ip_register_limit_times":  options.Security.IPRegisterLimitTimes,
	//		"ip_register_lock_time":    options.Security.IPRegisterLockTime,
	//	},
	//	"frontend": map[string]interface{}{
	//		"frontend_theme_sidebar":  options.Frontend.FrontendThemeSidebar,
	//		"frontend_theme_header":   options.Frontend.FrontendThemeHeader,
	//		"frontend_theme":          options.Frontend.FrontendTheme,
	//		"frontend_background_url": options.Frontend.FrontendBackgroundURL,
	//	},
	//	"subscribe": map[string]interface{}{
	//		"user_modify_enable": options.Subscribe.UserModifyEnable,
	//		"show_info_in_sub":   options.Subscribe.ShowInfoInSub,
	//	},
	//	"server": map[string]interface{}{
	//		"server_token":         options.Server.ServerToken,
	//		"server_pull_interval": options.Server.ServerPullInterval,
	//		"server_push_interval": options.Server.ServerPushInterval,
	//	},
	//	"sendmail": map[string]interface{}{
	//		"email_host":         options.Sendmail.EmailHost,
	//		"email_port":         options.Sendmail.EmailPort,
	//		"email_encryption":   options.Sendmail.EmailEncryption,
	//		"email_username":     options.Sendmail.EmailUsername,
	//		"email_password":     options.Sendmail.EmailPassword,
	//		"email_from_address": options.Sendmail.EmailFromAddress,
	//		"email_template":     options.Sendmail.EmailTemplate,
	//	},
	//	"notice": map[string]interface{}{
	//		"notice_name": options.Notice.NoticeName,
	//		"bark_host":   options.Notice.BarkHost,
	//		"bark_group":  options.Notice.BarkGroup,
	//	},
	//	"myapp": map[string]interface{}{
	//		"win_download":     options.Myapp.WinDownload,
	//		"osx_download":     options.Myapp.OsxDownload,
	//		"android_download": options.Myapp.AndroidDownload,
	//	},
	//}
	//
	//// 遍历 settingsMap 并保存每个设置项
	//for category, config := range settingsMap {
	//	for key, value := range config {
	//		valueJSON, err := json.Marshal(value)
	//		if err != nil {
	//			log.Println("Failed to marshal value:", err)
	//			continue
	//		}
	//
	//		setting := settings.SiteSetting{
	//			Category: category,
	//			Key:      key,
	//			Value:    valueJSON,
	//		}
	//
	//		// 更新或创建设置项
	//		if err := dao.Db.Where("`category` = ? AND `key` = ?", category, key).Assign(&setting).FirstOrCreate(&setting).Error; err != nil {
	//			log.Println("Error creating or updating setting:", err)
	//		} else {
	//			log.Println("Setting created or updated successfully:", key)
	//		}
	//	}
	//}

	context.JSON(http.StatusOK, gin.H{"message": "Settings updated successfully"})
}

func handleGetSystemSetting(context *gin.Context) {
	var settings []settings.SiteSetting

	// 从数据库中读取所有的系统设置
	if err := dao.Db.Find(&settings).Error; err != nil {
		log.Println("Error fetching settings:", err)
		context.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch settings"})
		return
	}

	// 创建一个map来组织数据
	settingsMap := make(map[string]map[string]interface{})
	for _, setting := range settings {
		if _, exists := settingsMap[setting.Category]; !exists {
			settingsMap[setting.Category] = make(map[string]interface{})
		}

		var value interface{}
		if err := json.Unmarshal(setting.Value, &value); err != nil {
			log.Println("Error unmarshaling setting value:", err)
			continue
		}
		settingsMap[setting.Category][setting.Key] = value
	}

	// 返回组织好的数据
	context.JSON(http.StatusOK, settingsMap)
}
