package main

import (
	"context"
	amqp "github.com/rabbitmq/amqp091-go"
	"log"
	"time"
)

// failOnError: check the return value for each amqp call
func failOnError(err error, msg string) {
	if err != nil {
		log.Panicf("%s: %s", msg, err)
	}
}

func main() {
	// 创建链接
	//conn, err := amqp.Dial("amqp://kanna:password@api.ikanned.com:25672/")
	conn, err := amqp.Dial("amqp://kanna:password@192.168.0.243:5672/")
	failOnError(err, "Failed to connect to RabbitMQ")
	defer conn.Close()

	// 创建了一个新的channel
	ch, err := conn.Channel()
	failOnError(err, "Failed to open a channel")
	defer ch.Close()

	q, err := ch.QueueDeclare(
		"hello", // name
		false,   // durable
		false,   // delete when unused
		false,   // exclusive
		false,   // no-wait
		nil,     // arguments
	)
	failOnError(err, "Failed to declare a queue")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// 消息
	body := "Hello World!"
	err = ch.PublishWithContext(ctx,
		"",     // exchange
		q.Name, // routing key
		false,  // mandatory
		false,  // immediate
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(body),
		})

	for {
		body := "Hello World!"
		err = ch.PublishWithContext(ctx,
			"",     // exchange
			q.Name, // routing key
			false,  // mandatory
			false,  // immediate
			amqp.Publishing{
				ContentType: "text/plain",
				Body:        []byte(body),
			})

	}

	failOnError(err, "Failed to publish a message")
	log.Printf(" [x] Sent %s\n", body)
}
