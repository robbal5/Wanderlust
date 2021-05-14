# == Schema Information
#
# Table name: properties
#
#  id                  :bigint           not null, primary key
#  address_id          :integer          not null
#  user_id             :integer          not null
#  name                :string           not null
#  description         :text
#  number_of_guests    :integer
#  number_of_bedrooms  :integer
#  number_of_beds      :integer
#  number_of_bathrooms :integer
#  type_of_place       :string           not null
#  enhanced_clean      :boolean          default(FALSE)
#  self_check_in       :boolean          default(FALSE)
#  price               :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Property < ApplicationRecord

    validates :address_id, :user_id, :name, :type_of_place, :price, presence: true
    validates :type_of_place, inclusion: { in: ['Entire place', 'Private room', 'Hotel room']}

    belongs_to :user
    belongs_to :address 
    has_one :state, through: :address
    has_one :city, through: :address

    has_many :reservations
    has_many :reviews
    has_many :property_amenities
    has_many :amenities, through: :property_amenities

    #AWS
    has_many_attached :photos

    def self.filtered_properties(filters)
        
        city_name = filters['cityFilter']
        type_of_place = filters['placeFilter']
        if city_name != ''
            city_id = City.where(name: city_name).as_json[0]['id']
        end
        
        address_ids = Address.where(city_id: city_id).as_json.map { |address| address['id']}
        debugger;
        if city_name == ''
            if !type_of_place
                Property.all
            else
                Property.where(type_of_place: type_of_place)
            end
        else
            if !type_of_place
                Property.where(address_id: address_ids)
            else
                Property.where(address_id: address_ids).where(type_of_place: type_of_place)
            end
            
        end
    end
    private

    
    
    
    

end
