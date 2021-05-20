

json.extract! @review, :id, :review, :rating, :created_at, :user_id
json.extract! @user, :name
          