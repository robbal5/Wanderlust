# == Schema Information
#
# Table name: cities
#
#  id       :bigint           not null, primary key
#  name     :string           not null
#  state_id :integer          not null
#
class City < ApplicationRecord

    validates :name, :state_id, presence: true

    belongs_to :state
    has_many :addresses
end
