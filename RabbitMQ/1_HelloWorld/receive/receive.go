package main

import (
	amqp "github.com/rabbitmq/amqp091-go"
	"log"
)

// failOnError 处理错误
func failOnError(err error, msg string) {
	if err != nil {
		log.Panicf("%s: %s", msg, err)
	}
}

func main() {
	// amqp协议链接服务器
	conn, err := amqp.Dial("amqp://kanna:password@api.ikanned.com:25672/")
	failOnError(err, "Failed to connect to RabbitMQ")
	defer conn.Close() // 最后关闭连接

	// 通道打开一个独特的并发服务器通道 以处理大部分AMQP消息
	ch, err := conn.Channel()
	failOnError(err, "Failed to open a channel")
	defer ch.Close()

	// QueueDeclare 宣布了一个队列 以保存消息并交付给消费者。
	q, err := ch.QueueDeclare(
		"hello", // name
		false,   // durable
		false,   // delete when unused
		false,   // exclusive
		false,   // no-wait
		nil,     // arguments
	)
	failOnError(err, "Failed to declare a queue")

	// Consumer 立即开始传递排队的消息
	msgs, err := ch.Consume(
		q.Name, // queue
		"",     // consumer
		true,   // auto-ack
		false,  // exclusive
		false,  // no-local
		false,  // no-wait
		nil,    // args
	)
	failOnError(err, "Failed to register a consumer")

	var forever chan struct{}

	go func() {
		for d := range msgs {
			log.Printf("Received a message: %s", d.Body)
			log.Printf("Received %v", d)
		}
	}()

	log.Printf(" [*] Waiting for messages. To exit press CTRL+C")
	<-forever
}
