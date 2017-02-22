Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :doctors, path: '/api/doctors'
  resources :patients, path: '/api/patients'
  resources :appointments, path: '/api/appointments'

end
