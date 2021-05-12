# == Schema Information
#
# Table name: addresses
#
#  id             :bigint           not null, primary key
#  state_id       :integer          not null
#  city_id        :integer          not null
#  street_address :string           not null
#  zip_code       :integer          not null
#  lat            :float            not null
#  lng            :float            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Address < ApplicationRecord

end
