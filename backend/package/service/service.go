package service

import (
	"wallet/user"

	"wallet/package/repository"
)

type Authorization interface {
	CreateUser(user user.User) (int, error)
}

type Service struct {
	Authorization
}

func NewService(repos *repository.Repository) *Service {
	return &Service{
		Authorization: NewAuthService(repos.Authorization),
	}
}
