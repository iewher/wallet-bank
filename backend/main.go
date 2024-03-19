package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	_ "github.com/lib/pq"
)

type Users struct {
	Id       string `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

var userData []Users

func getUsers(w http.ResponseWriter, r *http.Request) {

	connect := "user=postgres password=postgres dbname=postgres sslmode=disable"
	db, err := sql.Open("postgres", connect)

	if err != nil {
		log.Println(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM users")
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	products := []Users{}

	for rows.Next() {
		u := Users{}
		err := rows.Scan(&u.Id, &u.Username, &u.Email, &u.Password)

		if err != nil {
			fmt.Println(err)
			continue
		}
		products = append(products, u)
	}

	for _, p := range products {
		fmt.Println(p.Id, p.Username, p.Email, p.Password)
	}

}

func createUsers(w http.ResponseWriter, r *http.Request) {
	var newUser Users

	err := json.NewDecoder(r.Body).Decode(&newUser)

	if err != nil {
		log.Println("Произошла ошибка при добавлении пользователя в базу данных")
	} else {
		log.Println("Пользователь успешно добавлен в базу данных")
	}

	connect := "user=postgres password=postgres dbname=postgres sslmode=disable"
	db, err := sql.Open("postgres", connect)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	result, err := db.Exec("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", newUser.Username, newUser.Email, newUser.Password)
	if err != nil {
		panic(err)
	}

	fmt.Println(result)

	userData = append(userData, newUser)

	w.WriteHeader(http.StatusCreated)
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/users", getUsers).Methods(http.MethodGet)
	r.HandleFunc("/users", createUsers).Methods(http.MethodPost)

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "POST"})

	fmt.Println("Сервер запущен на порту 8080...")
	http.ListenAndServe(":8080", handlers.CORS(originsOk, headersOk, methodsOk)(r))
}
