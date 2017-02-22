class Car < ApplicationRecord
    validates :make, presence: true
    validates :model, presence: true
    validates :color, presence: true
    validates :year, numericality: true, length: {is: 4, 
        too_short: "%{count} characters is the maximum allowed"}
    validates :moonroof, inclusion: { in: [ true, false ] }
end
