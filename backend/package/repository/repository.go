package repository

import (
	"wallet/user"

	"github.com/jmoiron/sqlx"
)

type Authorization interface {
	CreateUser(user user.User) (int, error)
}

type Repository struct {
	Authorization
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
	}
}
