import {computed, reactive, ref} from 'vue'
import {defineStore} from "pinia";
import {darkTheme} from 'naive-ui';
import instance from "@/axios";

const useSettingStore = defineStore('SettingStore', () => {
    // 管理员系统设置界面所有设置
    const settings = reactive({
        site: {
            app_name: '',           // 站点名称
            app_description: '',    // 站点描述
            app_url: '',            // 站点网址
            force_https: false,     // 强制HTTPS
            logo_url: '',           // LOGO
            subscribe_url: '',      // 订阅URL
            tos_url: '',            // 用户条款TOS
            stop_register: false,   // 停止新用户注册
            trial_time: 0,          // 试用时间
            trial_subscribe: '',    // 注册试用
            currency: '',           // 货币单位
            currency_symbol: '',    // 货币符号
        },
        security: {
            email_verify: false,                // 邮箱验证
            email_gmail_limit_enable: false,    // 禁止使用Gmail多别名
            safe_mode_enable: false,            // 安全模式
            secure_path: '',                    // 后台路径
            email_whitelist_enable: false,      // 邮箱后缀白名单
        },
        frontend: {
            frontend_theme_sidebar: false,  // 边栏风格
            frontend_theme_header: false,   // 头部风格
            frontend_theme_color: '',       // 主题色
            frontend_background_url: '',    // 背景
        },
        server: {
            server_token: '@zeBw2cSe6V^kCrz3uJQSd=FJU', // 通讯密钥
            server_pull_interval: 0,                    // 节点拉取动作轮询间隔
            server_push_interval: 0,                    // 节点推送动作轮询间隔
        },
        sendmail: {
            email_host: '',         // SMTP服务器地址
            email_port: 0,          // SMTP服务端口
            email_encryption: '',   // SMTP加密方式
            email_username: '',     // SMTP账号
            email_password: '',     // SMTP密码
            email_from_address: '', // 发件地址
            email_template: ''      // 邮件模板
        }
    })

    // 从服务器拉取数据
    let getSetting = async () => {
        let { data } = await instance.get('')
        if (data.code == 200) {

        }
    }

    return {
        settings,

    }

})

export default useSettingStore;