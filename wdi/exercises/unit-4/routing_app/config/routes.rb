Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  

  get   "/planes",        to: "planes#index"
  get   "/planes/new",    to: "planes#new"
  post  "/planes",        to: "planes#create"
  get   "/planes/:id",     to: "planes#show"
end
