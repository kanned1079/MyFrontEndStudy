package config

type SiteInfo struct {
	AppName        string `gorm:"column:app_name;primary_key" json:"app_name"`
	AppDescription string `gorm:"column:app_description" json:"app_description"`
	AppUrl         string `gorm:"column:app_url" json:"app_url"`
	ForceHttps     int    `gorm:"column:force_https" json:"force_https"`
	LogoUrl        string `gorm:"column:logo_url" json:"logo_url"`
	SubscribeUrl   string `gorm:"column:subscribe_url" json:"subscribe_url"`
	TosUrl         string `gorm:"column:tos_url" json:"tos_url"`
	StopRegister   int    `gorm:"column:stop_register" json:"stop_register"`
	TrialTime      int    `gorm:"column:trial_time" json:"trial_time"`
	TrialSubscribe int    `gorm:"column:trial_subscribe" json:"trial_subscribe"`
	Currency       string `gorm:"column:currency" json:"currency"`
	CurrencySymbol string `gorm:"column:currency_symbol" json:"currency_symbol"`
}

func (m *SiteInfo) TableName() string {
	return "site_info"
}
