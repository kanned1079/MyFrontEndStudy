package main

import (
	"fmt"
	"github.com/shirou/gopsutil/v4/mem"
	"log"
)

func main() {
	v, err := mem.VirtualMemory()
	if err != nil {
		log.Fatalf("无法获取内存信息: %v", err)
	}

	// 打印总内存、空闲内存和使用率，单位为字节
	fmt.Printf("Total: %v MB, Free: %v MB, UsedPercent: %.2f%%\n", v.Total/1024/1024, v.Free/1024/1024, v.UsedPercent)

	// 打印内存信息的JSON格式
	fmt.Println(v)
}

func handleNet() {

}
