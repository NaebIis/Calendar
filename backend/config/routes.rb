Rails.application.routes.draw do
  resources :inventory_item_categoties
  resources :inventory_items
  resources :clicked_day_notes
  resources :events
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
