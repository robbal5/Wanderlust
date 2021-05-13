# == Schema Information
#
# Table name: reservations
#
#  id          :bigint           not null, primary key
#  property_id :integer          not null
#  user_id     :integer          not null
#  start_date  :date             not null
#  end_date    :date             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Reservation < ApplicationRecord

    validates :property_id, :user_id, :start_date, :end_date, presence: true

    belongs_to :user
    belongs_to :property
end
