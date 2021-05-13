# == Schema Information
#
# Table name: amenities
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  icon_url   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Amenity < ApplicationRecord

    validates :name, presence: true

    has_many :property_amenities
    has_many :properties, through: :property_amenities

end
