package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	_ "github.com/lib/pq"
)

type Users struct {
	Id       string `json:"id"`
	Username string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

// var userData []Users

func getUsers(w http.ResponseWriter, r *http.Request) {

	connStr := "user=postgres password=postgres dbname=postgres sslmode=disable"
	db, err := sql.Open("postgres", connStr)

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

// func createUsers(w http.ResponseWriter, r *http.Request) {
// 	connStr := "user=postgres password=postgres dbname=postgres sslmode=disable"
// 	db, err := sql.Open("postgres", connStr)
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer db.Close()

// 	result, err := db.Exec("INSERT INTO users (username, email, password) VALUES ('test_create', 'test@test.ru', 'test')")
// 	if err != nil {
// 		panic(err)
// 	}
// 	fmt.Println(result)
// }

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/getUsers", getUsers).Methods(http.MethodGet)

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "POST"})

	fmt.Println("Сервер запущен на порту 8080...")
	http.ListenAndServe(":8080", handlers.CORS(originsOk, headersOk, methodsOk)(r))
}
