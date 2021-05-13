# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  property_id :integer          not null
#  user_id     :integer          not null
#  review      :text             not null
#  rating      :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord

    validates :property_id, :user_id, :review, presence: true

    belongs_to :property
    belongs_to :user
    
end
