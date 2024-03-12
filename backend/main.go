package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type Users struct {
	Username string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

var userData []Users

func getUsers(w http.ResponseWriter, r *http.Request) {
	jsonData, err := json.Marshal(userData)
	if err != nil {
		http.Error(w, "Ошибка при кодировании JSON", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonData)
}

func createUsers(w http.ResponseWriter, r *http.Request) {
	var newData Users
	err := json.NewDecoder(r.Body).Decode(&newData)
	if err != nil {
		http.Error(w, "Ошибка при декодировании JSON", http.StatusBadRequest)
		return
	}

	userData = append(userData, newData)

	w.WriteHeader(http.StatusCreated)
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/get", getUsers).Methods(http.MethodGet)
	r.HandleFunc("/post", createUsers).Methods(http.MethodPost)

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "POST"})

	fmt.Println("Сервер запущен на порту 8080...")
	http.ListenAndServe(":8080", handlers.CORS(originsOk, headersOk, methodsOk)(r))
}
