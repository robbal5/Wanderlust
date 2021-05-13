# == Schema Information
#
# Table name: property_amenities
#
#  id          :bigint           not null, primary key
#  property_id :integer          not null
#  amenity_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class PropertyAmenity < ApplicationRecord

    validates :property_id, :amenity_id, presence: true

    belongs_to :amenity
    belongs_to :property
    
end
