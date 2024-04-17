package main

import (
	logrus "log"

	wallet "wallet"
	"wallet/package/handler"
	"wallet/package/repository"
	"wallet/package/service"

	_ "github.com/lib/pq"
	"github.com/spf13/viper"
)

func main() {
	if err := initConfig(); err != nil {
		logrus.Fatalf("error initialization config %s", err.Error())
	}

	db, err := repository.NewPostgresDB(repository.Config{
		Host:     "localhost",
		Port:     "54324",
		Username: "wallet",
		Password: "wallet",
		DBName:   "wallet-db",
		SSLMode:  "disable",
	})
	if err != nil {
		logrus.Fatalf("failed to initialize db: %s", err.Error())
	}

	repos := repository.NewRepository(db)
	services := service.NewService(repos)
	handlers := handler.NewHandler(services)

	srv := new(wallet.Server)
	if err := srv.Run(viper.GetString("port"), handlers.InitRoutes()); err != nil {
		logrus.Fatalf("error occured while running http server: %s", err.Error())
	}
}

func initConfig() error {
	viper.AddConfigPath("configs")
	viper.SetConfigName("config")
	return viper.ReadInConfig()
}
