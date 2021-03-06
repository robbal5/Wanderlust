# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string           not null
#  phone_number    :integer
#  date_of_birth   :date
#  address_id      :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

validates :email, :name, :password_digest, :session_token, presence: true
validates :email, uniqueness: true
validates :password, length: {minimum: 6}, allow_nil: true

has_many :properties
has_many :reservations
has_many :reviews

attr_reader :password

after_initialize :ensure_session_token

has_many :reservations

def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
        return user
    else
        return nil
    end
end

def self.generate_session_token
    SecureRandom.urlsafe_base64
end

def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
end

def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
end

def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
end

private

def ensure_session_token
    self.session_token ||= User.generate_session_token
end

end
