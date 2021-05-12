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

end
