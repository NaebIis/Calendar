Rails.application.routes.draw do
  resources :party_event_item_joins
  resources :party_events
  resources :category_item_joins
  resources :inventory_item_categories
  resources :inventory_items
  resources :clicked_day_notes
  resources :events
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
