package system

import (
	"log"
	"os"
	"os/exec"
	"runtime"
	"strings"
	"time"
)

type SystemOverlook struct {
	ServerLoad
	HardwareInfo
	OsInfo
}

type ServerLoad struct {
	CpuUseage  float64 `json:"cpu_useage"`
	MemUseage  float64 `json:"mem_useage"`
	DiskUseage float64 `json:"disk_useage"`
}

type HardwareInfo struct {
	CpuModel string  `json:"cpu_model"`
	Cores    int     `json:"cores"`
	MemSize  float64 `json:"mem_size"`
	RootSize float64 `json:"root_size"`
}

type OsInfo struct {
	OsVersion       string    `json:"os_version"`
	KernelVersion   string    `json:"kernel_version"`
	OsArch          string    `json:"os_arch"`
	ProcessId       int       `json:"process_id"`
	NumsOfGoroutine int       `json:"nums_of_goroutine"`
	LastGCTime      time.Time `json:"last_gc_time"`
}

// getOsVersion 获取操作系统版本信息
func getOsVersion() string {
	out, err := exec.Command("cat", "/etc/redhat-release").Output()
	if err != nil {
		return "Unknow"
	}
	return string(out)
}

// getKernelVersion 获取内核版本信息
func getKernelVersion() string {
	out, err := exec.Command("uname", "-r").Output()
	if err != nil {
		return ""
	}
	return string(out)
}

func getArchName() string {
	out, err := exec.Command("uname", "-m").Output()
	if err != nil {
		return ""
	}
	return string(out)
}

func getCPUModel() string {
	// 在 Linux 系统中，可以使用 cat /proc/cpuinfo 命令来获取 CPU 信息
	cmd := exec.Command("cat", "/proc/cpuinfo")
	out, err := cmd.Output()
	if err != nil {
		return "获取失败"
	}
	// 解析输出找到 model name 对应的信息
	lines := strings.Split(string(out), "\n")
	for _, line := range lines {
		if strings.Contains(line, "model name") {
			parts := strings.Split(line, ":")
			if len(parts) > 1 {
				return strings.TrimSpace(parts[1])
			}
		}
	}
	return "未找到 CPU 型号信息"
}

func (this *SystemOverlook) GetOsInfo() {
	// ServerLoad
	log.Println("操作系统", runtime.GOOS)
	// HardwareInfo
	this.HardwareInfo.CpuModel = getCPUModel()
	this.HardwareInfo.Cores = runtime.NumCPU()

	// OsInfo
	this.OsInfo.OsVersion = getOsVersion()
	this.OsInfo.KernelVersion = strings.TrimSpace(getKernelVersion())
	this.OsInfo.OsArch = strings.TrimSpace(getArchName())
	this.OsInfo.ProcessId = os.Getpid()
	this.OsInfo.NumsOfGoroutine = runtime.NumGoroutine()
}
