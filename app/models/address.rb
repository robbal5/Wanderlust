# == Schema Information
#
# Table name: addresses
#
#  id             :bigint           not null, primary key
#  city_id        :integer          not null
#  street_address :string           not null
#  zip_code       :integer          not null
#  lat            :float            not null
#  lng            :float            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Address < ApplicationRecord

    validates :city_id, :street_address, :zip_code, :lat, :lng, presence: true

    belongs_to :city 
    has_one :property
    has_one :state, through: :city


    
end
